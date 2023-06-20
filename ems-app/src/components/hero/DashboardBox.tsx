import { SignOutButton, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";

type Props = {
  user: User;
};
function DashboardBox({ user }: Props) {
  return (
    <div className="border-2 border-secondary py-3 rounded-md flex flex-col gap- max-w-xl w-full gap-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center text-xl">You Seem to be Logged in as :</h2>
        <div className="flex items-center gap-3">
          <span className="text-xl text-info">{user.username}</span>
          <UserButton />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Link
          className="w-full text-center mx-3 py-3 bg-info rounded-lg hover:bg-info/80 uppercase"
          href="/app/dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
      <p className="text-center ">Not you?</p>
      <div className="flex justify-center px-3">
        <SignOutButton>
          <button className="btn  btn-info w-full text-primary hover:bg-red-400">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
export default DashboardBox;
