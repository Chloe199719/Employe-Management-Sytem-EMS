import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import getRole from "@/lib/frontend/getRole";
import AdminList from "./AdminList";

type Props = {};
async function Nav({}: Props) {
  const user = await currentUser();
  return (
    <nav className="flex flex-col bg-base-200 pr-4">
      <div className=" bg-base-100 w-full h-[130px] flex justify-center items-center">
        <Image
          className="w-[50px] h-[50px] md:h-[100px] md:w-[100px]"
          src={`/logo.png`}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <ul className="bg-base-100 menu w-20 md:w-56  flex-1 justify-between">
        <div>
          {" "}
          <li>
            <ThemeSwitch />
          </li>
          <hr className="my-1 border-primary" />
          <AdminList />
        </div>
        <div>
          <li className="">
            <a className="flex justify-center md:justify-start">
              <UserButton />
              <span className="hidden md:block font-bold text-lg overflow-hidden">
                {user?.firstName} {user?.lastName}
              </span>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Nav;
