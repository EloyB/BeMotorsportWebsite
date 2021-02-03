import React from "react";
import TextInput from "../TextInput";

export default function PersonalInformationStep() {
  return (
    <div className="w-full py-10 px-5 bg-gray-50">
      <p className="max-w-screen-lg m-auto font-bold text-2xl pb-5 md:text-4xl">
        Personal Information
      </p>
      <div className="max-w-screen-lg m-auto w-full py-4 space-y-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5">
        <div className="space-y-4 sm:w-1/2">
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <TextInput label="Email" />
          <TextInput label="Phone Number" />
        </div>
        <div className="space-y-4 w-full sm:w-1/2">
          <TextInput label="Street" />
          <TextInput label="City" />
          <div className="flex gap-4 w-full">
            <TextInput label="Number" />
            <TextInput label="Appartment" />
          </div>
          <div className="flex gap-4 w-full">
            <TextInput label="Zip code" />
            <TextInput label="Country" />
          </div>
        </div>
      </div>
    </div>
  );
}
