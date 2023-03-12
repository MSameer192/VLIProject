import React from "react";

import { GraphHeader2 } from "../reuseable_comp/ReUseables";
import BarChart from "./BarChart";

function SalesReportGraph() {
  return (
    <>
      <div className="rounded-[29px]  border-[1.4px] pb-[44px] w-[100%] bg-white">
        <GraphHeader2 title="Sales Report" alt="Sales Report Icon" />

        {/* <div className="h-[571px] w-[350px]  xl:w-[1145px] sm:w-[500px] md:w-[600px] md:pl-[40px] "> */}
        <div style={{ width: "100%", height: "571px" }}>
          <BarChart />
        </div>
      </div>
    </>
  );
}

export default SalesReportGraph;
