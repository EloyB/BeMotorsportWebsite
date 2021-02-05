import React from "react";

export default function SecondaryButton({ label, onClick }) {
  return (
    <button className="text-white bg-white border-white border-2 bg-transparent px-3 py-2 mt-3 transition duration-300 bg-opacity-0 hover:bg-opacity-20 focus:outline-none">
      {label}
    </button>
  );
}
