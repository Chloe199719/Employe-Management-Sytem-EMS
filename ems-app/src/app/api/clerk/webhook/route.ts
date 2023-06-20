import clerk, { WebhookEvent } from "@clerk/clerk-sdk-node";
import prismaClient from "@/lib/prisma/prisma";
export async function POST(req: Request) {
  try {
    const token = req.headers.get("Bearer");
    if (token === process.env.CLERK_SECRET_KEY) {
      throw new Error("Invalid token", { cause: "Invalid token" });
    }
    const payload = (await req.json()) as WebhookEvent;
    if (payload.data.id === undefined) {
      throw new Error("No ID in Request", { cause: "Missing ID" });
    }
    const create = await prismaClient.user.create({
      data: {
        userID: payload.data.id!,
      },
    });
    const metadata = await clerk.users.updateUser(payload.data.id, {
      privateMetadata: {
        role: "guest",
      },
    });
    console.log(payload.data);
    return new Response("POST");
  } catch (error: any) {
    if (error.message === "Invalid token") {
      return new Response("Invalid token", { status: 401 });
    } else if (error.message === "Missing ID") {
      return new Response("No ID in Request", { status: 400 });
    }
    console.log(error);
    return new Response("POST", { status: 401 });
  }
}
