import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || ""
  );
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
