import React from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import Select from "../component/Select";
import ListMovie from "../component/ListMovie";
import Chart from "../component/Chart";
import Sidebar from "../component/Sidebar";
import List from "../component/List";
export default function Dashboard() {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <List />
          <Select />
          <Chart />
        </div>
      </div>
    </div>
  );
}
