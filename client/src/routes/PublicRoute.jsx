
import { Navigate, Outlet } from "react-router-dom";


export const PublicRoute = () => {
  const { isAuthenticated } = false

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
