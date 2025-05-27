import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const user = useSelector((state) => state.auth.Auth);
  const [token, setToken] = useState(user);
  if (token) {
    return (
      <AuthContext value={{ token, setToken }}>
        <Outlet />
      </AuthContext>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
