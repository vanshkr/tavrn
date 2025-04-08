import { SignUp } from "@clerk/clerk-react";
const signInUrl = import.meta.env.VITE_CLERK_SIGN_IN_URL;
export const Register = () => {
  return <SignUp signInUrl={signInUrl} />;
};
