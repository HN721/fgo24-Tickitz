import React from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import Select from "../component/Select";
import ListMovie from "../component/ListMovie";
import Chart from "../component/Chart";
export default function Dashboard() {
  return (
    <div>
      <NavbarAdmin />
      <Select />
      <Chart />
    </div>
  );
}
