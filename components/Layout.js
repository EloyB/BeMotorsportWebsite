import React from "react";
import { Footer } from "./footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font-raleway box-border">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
