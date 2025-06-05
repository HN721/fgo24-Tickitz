import React from "react";
import {
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  ListOrdered,
  Tv,
} from "lucide-react";
import { useSelector } from "react-redux";

export default function List() {
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.booking.bookings);
  const active = useSelector((state) => state.auth);
  console.log(typeof active);

  const stats = [
    {
      label: "Total User",
      value: user.length,
      icon: <Users className="text-purple-500" />,
      change: "8.5%",
      note: "Up from yesterday",
      trend: "up",
      color: "text-green-500",
    },
    {
      label: "Total Order",
      value: order.length,
      icon: <ListOrdered className="text-yellow-500" />,
      change: "1.3%",
      note: "Up from past week",
      trend: "up",
      color: "text-green-500",
    },
    {
      label: "Total Movies",
      value: "200",
      icon: <Tv className="text-green-500" />,
      change: "1.3%",
      note: "3 Movie Added",
      trend: "up",
      color: "text-green-500",
    },
    {
      label: "User Active",
      value: Object.keys(active).length,
      icon: <Activity className="text-orange-500" />,
      change: "1.8%",
      note: "Up from yesterday",
      trend: "up",
      color: "text-green-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div className="text-gray-500 text-sm font-medium">
              {item.label}
            </div>
            <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
          </div>
          <div className="text-2xl font-semibold text-gray-900">
            {item.value}
          </div>
          <div className="flex items-center gap-2 text-sm">
            {item.trend === "up" ? (
              <ArrowUpRight className={`w-4 h-4 ${item.color}`} />
            ) : (
              <ArrowDownRight className={`w-4 h-4 ${item.color}`} />
            )}
            <span className={`${item.color} font-medium`}>{item.change}</span>
            <span className="text-gray-500">{item.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
