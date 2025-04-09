import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export const PublicRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    // Optional: Show a loading state while Clerk checks auth
    return <div>Loading...</div>;
  }

  return !isSignedIn ? <Outlet /> : <Navigate to="/" />;
};
