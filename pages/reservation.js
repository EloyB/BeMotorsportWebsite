import React from "react";
import MultiStepForm from "../components/MultiStepForm";

export default function reservation() {
  return (
    <div className="pt-20">
      <div className="py-10 pb-20 px-5">
        <h1 className="text-4xl font-medium text-center py-5 lg:text-5xl">Plan je trackday</h1>
        <p className="text-center max-w-screen-md m-auto">
          Plan nu vrijblijvend je trackday en wij regelen de rest!
        </p>
      </div>
      <MultiStepForm />
    </div>
  );
}
