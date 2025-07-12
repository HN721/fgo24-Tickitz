import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../component/NavbarAdmin";
import Sidebar from "../component/Sidebar";

export default function LayoutAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
