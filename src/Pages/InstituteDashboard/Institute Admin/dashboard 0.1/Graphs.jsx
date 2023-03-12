import React from "react";
import NumOfClicksGraph from "./NumOfClicksGraph";
import StudentsEnrolledGraph from "./StudentsEnrolledGraph";

function Graphs() {
  return (
    <div className="w-full">
      <div className="w-full my-0 mx-auto">
        <div className="flex justify-between gap-[29px] dashboardGraphContainer">
          <div className="w-[50%] dashboardGraphs">
            <StudentsEnrolledGraph />
          </div>
          <div className="w-[50%] dashboardGraphs">
            <NumOfClicksGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
