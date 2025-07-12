import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SeatPage from "./pages/SeatPage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import Dashboard from "./Admin/page/Dashboard";
import AddMovie from "./Admin/component/AddMovie";
import Movie from "./Admin/page/Movie";
import RegisterPage from "./pages/RegisterPage";
import TicketPage from "./pages/TicketPage";
import AuthLayout from "./components/AuthLayout";
import ProfilePage from "./User/page/ProfilePage";
import PaymentQr from "./pages/PaymentQr";
import EditPages from "./User/page/EditPage";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LoginAdmin from "./Admin/page/LoginAdmin";
import LayoutAdmin from "./Admin/page/LayoutAdmin";

export const DataContext = createContext();
export default function App() {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
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
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "Seat",
          element: <SeatPage />,
        },
        {
          path: "Detail-movie/:id",
          element: <DetailMoviePage />,
        },
        {
          path: "Profile-Page",
          element: <ProfilePage />,
        },
        {
          path: "Edit-Profile",
          element: <EditPages />,
        },
        {
          path: "Payment",
          element: <PaymentPage />,
        },
        {
          path: "/login/admin",
          element: <LoginAdmin />,
        },
        {
          path: "dashboard",
          element: <LayoutAdmin />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "movies",
              element: <Movie />,
            },
            {
              path: "add-movies",
              element: <AddMovie />,
            },
          ],
        },
        {
          path: "Ticket",
          element: <TicketPage />,
        },
        {
          path: "payment/qr-code",
          element: <PaymentQr />,
        },
      ],
    },

    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/Register",
      element: <RegisterPage />,
    },
  ]);

  return (
    <>
      <div className="w-full">
        <Provider store={store}>
          <PersistGate persistor={persistor}></PersistGate>
          <DataContext.Provider value={{ bookings, setBookings }}>
            <RouterProvider router={router} />
          </DataContext.Provider>
        </Provider>
      </div>
    </>
  );
}
