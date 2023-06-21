import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

type Props = {};
function AdminList({}: Props) {
  return (
    <>
      <li className="tooltip tooltip-primary" data-tip={`Home`}>
        <Link
          href="/dashboard/admin"
          className="flex justify-center md:justify-start w-full"
        >
          <AiOutlineHome className="h-5 w-5" />
          <span className="hidden md:block">Home</span>
        </Link>
      </li>
      <hr className="my-1 border-primary" />
      <li className="tooltip tooltip-primary" data-tip={`Employee`}>
        <Link
          href="/dashboard/admin/employee"
          className="flex justify-center md:justify-start w-full"
        >
          <BsFillPeopleFill className="h-5 w-5" />
          <span className="hidden md:block">Employee</span>
        </Link>
      </li>
    </>
  );
}
export default AdminList;
