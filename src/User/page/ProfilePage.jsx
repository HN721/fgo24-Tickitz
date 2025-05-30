import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../component/Sidebar";
import Content from "../component/Content";
export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex gap-12 mb-6 mx-16 mt-8">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
