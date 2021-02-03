import React from "react";
import Checkbox from "../Checkbox";
import DriverItem from "../DriverItem";
import TextInput from "../TextInput";

export default function DriversStep() {
  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <p className="max-w-screen-lg m-auto font-bold text-2xl pb-5 md:text-4xl">Drivers</p>
      <div className="max-w-screen-lg m-auto divide-y-2 lg:flex lg:divide-y-0 lg:divide-x-2">
        <div className="w-full space-y-4 pb-5 lg:pr-5">
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <TextInput label="Age" />
          <Checkbox label="Has experience" />
          <button
            className="px-6 py-3 w-full bg-motorblue text-white focus:outline-none sm:px-16 sm:w-auto"
            onClick={(e) => handleButtonClick(e.target.value)}
            value="next"
          >
            Add driver
          </button>
        </div>
        <div className="w-full pt-5 space-y-5 lg:pl-5">
          <DriverItem />
          <DriverItem />
          <DriverItem />
        </div>
      </div>
    </div>
  );
}
