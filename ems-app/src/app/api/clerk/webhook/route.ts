export async function POST(req: Request) {
  try {
    const token = req.headers.get("Bearer");
    if (token !== process.env.CLERK_SECRET_KEY) {
      throw new Error("Invalid token");
    }
    const payload = await req.json();
    console.log(payload);
    return new Response("POST");
  } catch (error) {
    console.log(error);
    return new Response("POST", { status: 401 });
  }
}
