import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export const PrivateRoute = () => {
    const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
