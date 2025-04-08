import { SignUp } from "@clerk/clerk-react";
export const Register = () => {
  return <SignUp signInUrl="/sign-in" forceRedirectUrl="/" />;
};
