import { SignIn } from "@clerk/clerk-react";
const signUpUrl = import.meta.env.VITE_CLERK_SIGN_UP_URL;
export const LogIn = () => {
  return <SignIn signUpUrl={signUpUrl} />;
}
