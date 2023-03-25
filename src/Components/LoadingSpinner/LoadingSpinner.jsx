import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-full text-center my-10">
        <div className="lds-dual-ring mx-auto"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
