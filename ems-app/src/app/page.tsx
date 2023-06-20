import Image from "next/image";
import { SignInButton, UserButton, auth, currentUser } from "@clerk/nextjs";
import ToggleThemeBtn from "../components/ToggleThemeBtn";
import Header from "@/components/hero/Header";
import { SignIn } from "@clerk/nextjs";
import DashboardBox from "@/components/hero/DashboardBox";
import SignInBox from "@/components/hero/SignInBox";
export default async function Home() {
  const user = await currentUser();

  return (
    <div className="min-h-screen px-10 md:px-24">
      <Header />
      <main className="flex  flex-col items-center justify-between py-10 md:py-24 bg-base-100 text-primary">
        <div className="flex flex-col items-center max-w-7xl mx-auto w-full gap-10">
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            recusandae asperiores cum maiores deserunt magnam ullam?
            Exercitationem veniam, repudiandae ut fugiat dolores perferendis ex
            minima, quis, expedita omnis fuga corporis!
          </p>
          {user ? <DashboardBox user={user} /> : <SignInBox />}
        </div>
      </main>
    </div>
  );
}
