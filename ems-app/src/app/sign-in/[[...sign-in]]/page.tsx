import { SignIn } from "@clerk/nextjs";

type Props = {};
function page({}: Props) {
  return <SignIn />;
}
export default page;
