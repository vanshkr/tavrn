import { SignIn } from "@clerk/clerk-react";
export const LogIn = () => {
  return <SignIn signUpUrl="/sign-up" forceRedirectUrl="/" />;
};
