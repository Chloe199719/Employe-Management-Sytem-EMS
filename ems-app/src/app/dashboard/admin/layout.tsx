import prismaClient from "@/lib/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
type Props = {
  children: ReactNode;
};

async function getRole(userId: string) {
  try {
    const res = await prismaClient.user.findUniqueOrThrow({
      where: {
        userID: userId,
      },
      select: {
        role: true,
      },
    });
    return res.role;
  } catch (error) {
    return null;
  }
}

async function layout({ children }: Props) {
  const { userId } = auth();
  const role = await getRole(userId!);
  if (role !== "admin") {
    redirect("/");
  }
  return <>{children}</>;
}
export default layout;
