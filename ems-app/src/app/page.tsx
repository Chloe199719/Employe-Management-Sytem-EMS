import Image from "next/image";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import ToggleThemeBtn from "./ToggleThemeBtn";
export default async function Home() {
  const user = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100 text-primary">
      <ToggleThemeBtn />
      <UserButton />
    </main>
  );
}
