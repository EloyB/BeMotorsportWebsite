import React from "react";

export default function PrimaryButton({ onClick, label, disabled, fullWidth }) {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : ""
      } px-6 py-4 bg-motorblue text-white focus:outline-none sm:px-16`}
      onClick={(e) => onClick(e.target.value)}
      value={label}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
