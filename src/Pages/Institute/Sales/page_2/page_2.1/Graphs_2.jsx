import React from "react";
import SalesCard from "./SalesCard";
import BankCardDetails from "./BankCardDetails";
import SalesReportGraph from "./SalesReportGraph";

function Graphs2() {
  return (
    <div className="">
      <div style={{ width: "100%" }}>
        <div className="w-[90%] my-0 mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "70%" }}>
              <SalesReportGraph />
            </div>
            <div className="flex flex-col space-y-7 w-[27%]">
              <BankCardDetails />
              <SalesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs2;
