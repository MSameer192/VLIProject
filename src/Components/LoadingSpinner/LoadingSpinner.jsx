import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="w-full text-center my-10">
      <div className="lds-dual-ring mx-auto"></div>
    </div>
  );
}

export default LoadingSpinner;
