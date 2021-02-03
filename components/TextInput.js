import React from "react";

export default function TextInput({ label, placeholder }) {
  return (
    <div className="w-full">
      <p className="text-base font-bold py-1">{label}</p>
      <input
        className="w-full py-2 px-3 focus:outline-none rounded-md"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
