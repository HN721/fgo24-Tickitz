import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Editprofile from "../component/Editprofile";
export default function EditPages() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex gap-12 mb-6 mx-16">
        <Sidebar />
        <Editprofile />
      </div>
    </div>
  );
}
