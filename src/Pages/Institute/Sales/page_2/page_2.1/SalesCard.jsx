import React from "react";
import salesCardImg from "./sales_icon.svg";

function SalesCard() {
  return (
    <div className="border rounded-[25px] drop-shadow-[2px_3px_3px_rgba(0,0,0,0.16)] px-[24px] py-[32px] h-[220px] bg-white">
      <div className="flex justify-between ">
        <p className="text-[22px]">Sales</p>
        <img
          className="w-[34px] h-[34px]"
          src={salesCardImg}
          alt="Sales Card Icon"
        />
      </div>
      <p className="text-[#A1A3EF] text-[32px] my-[10px]">$ 17,300</p>
      <p className="text-[22px] ">Sales increased by 16%</p>
    </div>
  );
}

export default SalesCard;
