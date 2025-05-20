import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SeatPage from "./pages/SeatPage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import Dashboard from "./Admin/page/Dashboard";
import Movie from "./Admin/page/Movie";
import RegisterPage from "./pages/RegisterPage";
import TicketPage from "./pages/TicketPage";
export const DataContext = createContext();
export default function App() {
  const [bookings, setBookings] = useState([
    {
      name: "",
      email: "",
      phone: "",
      idMovie: "",
      movieName: "",
      genre: [],
      seat: [],
      payment: null,
      img: "",
      cinema: "",
      date: "",
      location: "",
      time: "",
    },
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Movie-list",
      element: <MoviePage />,
    },
    {
      path: "/Detail-movie/:id",
      element: <DetailMoviePage />,
    },
    {
      path: "/Seat",
      element: <SeatPage />,
    },
    {
      path: "/Ticket",
      element: <TicketPage />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/Register",
      element: <RegisterPage />,
    },
    {
      path: "/Payment",
      element: <PaymentPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/movies",
      element: <Movie />,
    },
  ]);

  return (
    <>
      <div className="w-full">
        <DataContext.Provider value={{ bookings, setBookings }}>
          <RouterProvider router={router} />
        </DataContext.Provider>
      </div>
    </>
  );
}
