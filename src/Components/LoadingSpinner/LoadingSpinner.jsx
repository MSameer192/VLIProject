import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner({ Dashboard, Width, Height, Top, Left, Position,  Bg }) {

  if (!Dashboard) {
    if (!Height)
      Height = "[80vh]"

    if (!Width)
      Width = "[calc(100%_-_80px)]"

  }
  if (!Top)
    Top = "20"

  if (!Left)
    Left = "20"

  if (!Position)
    Position = "absolute"
    
  if (!Bg)
    Bg = "[#ffffff00]"
  return (
    <div className={`h-${Height} w-${Width} bg-${Bg} flex justify-center items-center z-30 absolute top-${Top} left-0 left-${Left}`}>
      <div className="w-full text-center my-10">
        <div className="lds-dual-ring mx-auto"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
