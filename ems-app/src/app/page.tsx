import Image from "next/image";
import { UserButton, auth } from "@clerk/nextjs";
export default async function Home() {
  const user = auth();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      {JSON.stringify(user)}
      <UserButton />
    </main>
  );
}
