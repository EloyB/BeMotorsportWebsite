import React, { useState } from "react";

export default function TextInput({
  label,
  onChange,
  value,
  requirement,
  errorMessage,
  required,
  onBlur,
  placeholder,
}) {
  const [error, setError] = useState();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-bold py-1">{label}</p>
        {error && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </div>
      <input
        onBlur={(e) => {
          onBlur && onBlur();
          required ? setError(requirement) : true;
        }}
        className={`w-full py-4 px-4 focus:outline-none ${error ? "bg-red-100" : "bg-white"}`}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}
