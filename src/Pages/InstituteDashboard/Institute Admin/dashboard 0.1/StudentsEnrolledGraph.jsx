import React from "react";
import LineChart from "../../../Institute/Sales/page_2/reuseable_comp/LineGraph";
 
import { studentsData } from "../../data/mockData";

function StudentsEnrolledGraph() {
  return (
    <>
      <div className=" border-[1.4px] rounded-[5px] bg-white">
        <GraphHeader title="Studens Enrolled" />
        <hr className="border-b-2" />

        <div className="h-[350px] w-[100%]  ">
          <LineChart
            max={25}
            gridYValues={[0, 5, 10, 15, 20, 25]}
            pointColor={{ theme: "background" }}
            data={studentsData}
            enableArea={true}
            borderColor={false}
          />
        </div>

        <GraphFooter
          leftText="Weekly Users"
          leftNum="9"
          middleText="Monthly Users"
          middleNum="56"
          icon="fa-solid fa-arrow-trend-up pr-2"
        />
      </div>
    </>
  );
}

export default StudentsEnrolledGraph;

export const GraphHeader = ({ title }) => {
  return (
    <div className="flex justify-between  px-[50px] py-[33px]">
      <p className="font-[500]">{title}</p>
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </div>
  );
};

export const GraphFooter = ({
  leftText,
  leftNum,
  middleText,
  middleNum,
  icon,
}) => {
  return (
    <div className="flex justify-around px-2 py-2 mb-2">
      <div>
        <p>{leftText}</p>
        <p>{leftNum}</p>
      </div>
      <div>
        <p>{middleText}</p>
        <p>{middleNum}</p>
      </div>
      <div>
        <i className={icon}></i>
      </div>
    </div>
  );
};
