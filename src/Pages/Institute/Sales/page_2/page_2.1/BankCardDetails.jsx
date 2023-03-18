import React from "react";
import bankCardImg from "./bank_detail.svg";

function BankCardDetails() {
  return (
    <div className="flex flex-col px-[18px] py-[15px]  border rounded-[25px] drop-shadow-[2px_3px_3px_rgba(0,0,0,0.16)]  h-[450px] bg-white">
      <div>
        <img className="w-[100%] " src={bankCardImg} alt="Bank Card" />
      </div>
      <div className="">
        <p className="text-[22px] mt-3 font-[400]">ABCD LIMITED</p>
        <p className="text-[22px] mt-3 font-400]">Visa: **** **** **** (092)</p>
        <p className="text-[22px] mt-3 font-[400]">
          Account Number:**** **** ****
        </p>
      </div>
    </div>
  );
}

export default BankCardDetails;
