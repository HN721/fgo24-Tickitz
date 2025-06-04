import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const bookings = useSelector((state) => state.booking.bookings);
  let movieData = [];
  bookings.map((item) => movieData.push(item.movieName));
  console.log(movieData);
  const data = {
    labels: movieData,
    datasets: [
      {
        label: "Penjualan Ticket",
        data: [12, 29, 33, 55, 12],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Statistik Penjualan Mingguan",
      },
    },
  };

  return (
    <div className="w-full max-w-2xl  mx-12">
      <Bar options={options} data={data} />
    </div>
  );
}
