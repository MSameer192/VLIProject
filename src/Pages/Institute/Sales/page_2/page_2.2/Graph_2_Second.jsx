import React from "react";
import CourseSalesReportGraph from "./CourseSalesReportGraph";

import QuickDetails from "./QuickDetails";

function Graph2Second() {
  return (
    <div className="w-[100%]">
      <div className="w-[90%] my-0 mx-auto">
        <div className="flex justify-between">
          <div className="w-[70%]">
            <CourseSalesReportGraph />
          </div>
          <div className="w-[27%]">
            <QuickDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph2Second;
