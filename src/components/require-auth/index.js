import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import useRefreshToken from "../../hooks/useRefreshToken";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const [userLocal] = useLocalStorage("user");
  return allowedRoles?.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.email || userLocal ? (
    <Navigate to="unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
