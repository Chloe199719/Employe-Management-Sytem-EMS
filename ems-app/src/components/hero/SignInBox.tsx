import { SignInButton } from "@clerk/nextjs";

type Props = {};
function SignInBox({}: Props) {
  return (
    <SignInButton>
      <button className="btn  btn-info w-full text-primary">Login</button>
    </SignInButton>
  );
}
export default SignInBox;
