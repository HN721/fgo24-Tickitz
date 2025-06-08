import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../component/Sidebar";
import Content from "../component/Content";
import { ScrollRestoration } from "react-router-dom";
export default function ProfilePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ScrollRestoration />
      <Navbar />
      <div className="flex flex-col justify-center items-center lg:items-start  lg:flex-row gap-6 mb-6 mx-4 lg:mx-16 mt-8">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
