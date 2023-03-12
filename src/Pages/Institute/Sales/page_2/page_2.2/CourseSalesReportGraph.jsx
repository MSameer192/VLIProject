import React from "react";
import { salesReportData } from "../../../../InstituteDashboard/data/mockData";
import LineChart from "../reuseable_comp/LineGraph";
import { GraphHeader2 } from "../reuseable_comp/ReUseables";

function CourseSalesReportGraph() {
  return (
    <div className="rounded-[29px]  border-[1.4px] pb-[44px] w-[100%] bg-white">
      <GraphHeader2 title="Course Sales Report" alt="Sales Report Icon" />

      <div style={{ width: "100%", height: "571px" }}>
        <LineChart
          max={130}
          pointColor={{ theme: "background" }}
          data={salesReportData}
          enableArea={false}
          enableGridY={false}
          borderColor={true}
        />
      </div>
    </div>
  );
}

export default CourseSalesReportGraph;
