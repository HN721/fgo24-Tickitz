import React from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import Select from "../component/Select";
import ListMovie from "../component/ListMovie";
export default function Dashboard() {
  return (
    <div>
      <NavbarAdmin />
      <Select />
      <ListMovie />
    </div>
  );
}
