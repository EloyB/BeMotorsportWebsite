import React from "react";

export default function Checkbox({ label }) {
  return (
    <div className="w-full flex items-center py-1">
      <input className="h-6 w-6 mr-3 text-motorblue" type="checkbox" />
      <p className="text-sm sm:text-base font-bold py-1">{label}</p>
    </div>
  );
}
