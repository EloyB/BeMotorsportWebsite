import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font-raleway relative box-border">
      <Navbar />
      {children}
    </div>
  );
}
