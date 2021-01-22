import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
