import React from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  ]);

  return (
    <>
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
