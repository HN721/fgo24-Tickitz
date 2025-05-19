import React from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SeatPage from "./pages/SeatPage";
import LoginPage from "./pages/LoginPage";

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
  ]);

  return (
    <>
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
