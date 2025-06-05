import React from "react";
import {
  Clock,
  Grid,
  Heart,
  MessageSquare,
  List,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: <Link to={"/dashboard"}>Dashboard</Link>,
    icon: <Clock size={18} />,
    active: true,
  },
  {
    label: <Link to={"/dashboard/movies"}>Movies</Link>,
    icon: <Grid size={18} />,
  },
  { label: "User", icon: <Heart size={18} /> },
  { label: "Order Lists", icon: <List size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-auto shadow-md p-4 mt-1 space-y-1">
      {menuItems.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </aside>
  );
}

function SidebarItem({ label, icon, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors
        ${
          active ? "bg-secondary text-white" : "text-black hover:bg-orange-100"
        }`}
    >
      <div className={`text-xl`}>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
