import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import getRole from "@/lib/frontend/getRole";
import AdminList from "./AdminList";
const items = [1, 2, 3];

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
          {items.map((item) => {
            return (
              <li key={item}>
                <a
                  href="/"
                  className="flex justify-center md:justify-start w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="hidden md:block">Item </span>
                </a>
              </li>
            );
          })}
          <li>
            <a className="flex justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden md:block">Item 1</span>
            </a>
          </li>
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
