import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { auth } from "@clerk/nextjs";
import getRole from "@/lib/frontend/getRole";
const items = [1, 2, 3];

type Props = {};
async function Nav({}: Props) {
  const { userId } = auth();
  const role = await getRole(userId!);
  return (
    <nav className="flex flex-col">
      <div className="bg-base-200 w-full h-[130px] flex justify-center items-center">
        <Image
          className="w-[50px] h-[50px] md:h-[100px] md:w-[100px]"
          src={`/logo.png`}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <ul className="menu bg-base-200 w-20 md:w-56  flex-1">
        <li>
          <ThemeSwitch />
        </li>
        {items.map((item) => {
          return (
            <li>
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="hidden md:block"> Item 3</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
