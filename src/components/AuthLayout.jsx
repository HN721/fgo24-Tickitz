import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const user = useSelector((state) => state.auth.Auth.user);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
}
