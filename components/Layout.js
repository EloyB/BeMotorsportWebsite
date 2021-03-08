import React from "react";
import CookieConsent from "./CookieConsent";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font-raleway box-border relative">
      <Navbar />
      {children}
      <CookieConsent />
      <Footer />
    </div>
  );
}
