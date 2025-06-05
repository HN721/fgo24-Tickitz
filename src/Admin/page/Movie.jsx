import React from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import ListMovie from "../component/ListMovie";
import Sidebar from "../component/Sidebar";

export default function Movie() {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex">
        <Sidebar />
        <ListMovie />
      </div>
    </div>
  );
}
