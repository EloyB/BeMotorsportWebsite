import React, { useState } from "react";

export const Dropdown = ({ selectOptions, setSelectedOption, targetField, placeholder, value }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative h-auto">
      <div
        className="p-4 bg-gray-50 w-full rounded flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {value !== "" ? (
          <p className="text-gray-800">{value}</p>
        ) : selected === null ? (
          <p className="text-gray-400">{placeholder}</p>
        ) : (
          <p className="text-gray-800">{selected}</p>
        )}
        <button className="cursor-pointer focus:outline-none pl-5" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6 text-motorblue"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute bg-white py-4 px-2 space-y-2 w-full shadow-sm rounded z-50`}
      >
        {selectOptions.length > 0 ? (
          selectOptions.map((item, index) => (
            <p
              key={index}
              className="hover:bg-gray-100 cursor-pointer px-2 rounded py-1"
              onClick={() => {
                setSelectedOption(item);
                setSelected(targetField ? item[targetField] : item);
                setOpen(false);
              }}
            >
              {targetField ? item[targetField] : item}
            </p>
          ))
        ) : (
          <p
            className="px-2 rounded py-1 text-gray-300"
            onClick={() => {
              setOpen(false);
            }}
          >
            No data found
          </p>
        )}
      </div>
    </div>
  );
};
