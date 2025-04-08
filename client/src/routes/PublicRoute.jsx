import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export const PublicRoute = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    // Optional: Show a loading state while Clerk checks auth
    return <div>Loading...</div>;
  }

  return !isSignedIn ? <Outlet /> : <Navigate to="/" />;
};
