import React from "react";

export default function PrimaryButton({ onClick, label }) {
  return (
    <button
      className="px-6 py-3 bg-motorblue text-white focus:outline-none sm:px-16"
      onClick={(e) => onClick(e.target.value)}
      value={label}
    >
      {label}
    </button>
  );
}
