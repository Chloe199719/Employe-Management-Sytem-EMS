import prismaClient from "@/lib/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import getRole from "@/lib/frontend/getRole";
type Props = {
  children: ReactNode;
};

async function layout({ children }: Props) {
  const { userId } = auth();
  const role = await getRole(userId!);
  if (role !== "admin") {
    redirect("/");
  }
  return <>{children}</>;
}
export default layout;
