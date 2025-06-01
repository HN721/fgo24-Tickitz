import React from "react";
import Navbar from "../components/Navbar";
import QrCode from "../components/QrCode";
import { ScrollRestoration } from "react-router-dom";
export default function PaymentQr() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <QrCode />
    </div>
  );
}
