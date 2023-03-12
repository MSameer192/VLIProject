import React from "react";
import LineChart from "../../../Institute/Sales/page_2/reuseable_comp/LineGraph";
import { numOfClicksData } from "../../data/mockData";
 
import { GraphFooter, GraphHeader } from "./StudentsEnrolledGraph";

function NumOfClicksGraph() {
  return (
    <>
      <div className="border-[1.4px] rounded-[5px] bg-white">
        <GraphHeader title="Number of Clicks" />
        <hr className="border-b-2" />
        <div className="h-[350px] w-[100%]">
          <LineChart
            max={500}
            gridYValues={[0, 100, 200, 300, 400, 500]}
            pointColor={{ from: "color", modifiers: [] }}
            data={numOfClicksData}
            borderColor={false}
          />
        </div>
        <GraphFooter
          leftText="Weekly Clicks"
          leftNum="330+"
          middleText="Monthly Clicks"
          middleNum="1200+"
        />
      </div>
    </>
  );
}

export default NumOfClicksGraph;
