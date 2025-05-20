import React, { createContext } from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SeatPage from "./pages/SeatPage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import Dashboard from "./Admin/page/Dashboard";
import Movie from "./Admin/page/Movie";
export const dataContext = createContext();

export default function App() {
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
      path: "/Login",
      element: <LoginPage />,
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
        <dataContext.Provider value={[]}>
          <RouterProvider router={router} />
        </dataContext.Provider>
      </div>
    </>
  );
}
