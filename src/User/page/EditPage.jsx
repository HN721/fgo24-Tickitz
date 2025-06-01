import React from "react";
import Sidebar from "../component/Sidebar";
import Editprofile from "../component/Editprofile";
import Navbar from "../../components/Navbar";
import { ScrollRestoration } from "react-router-dom";
export default function EditPages() {
  return (
    <div className="bg-gray-50">
      <ScrollRestoration />
      <Navbar />
      <div className="flex gap-12 mb-6 mx-16 mt-8">
        <Sidebar />
        <Editprofile />
      </div>
    </div>
  );
}
