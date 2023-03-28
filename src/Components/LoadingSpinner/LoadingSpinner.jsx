import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner({ Dashboard }) {
  let Width
  let Height = "h-screen"
  if (!Dashboard) {
    Height = "h-[70vh]"
    Width = "w-[calc(100%_-_80px)]"
  }
  else {
    Height = "h-[80vh]"
    Width = "w-full"
  }
  return (
    <div className={`${Height} ${Width} flex justify-center items-center`}>
      <div className="w-full text-center my-10">
        <div className="lds-dual-ring mx-auto"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
