import React from "react";
import personIcon from "./images/person_con.svg";
import awaitIcon from "./images/await_icon.svg";
import holdIcon from "./images/hold_icon.svg";
import courseLeftIcon from "./images/courseLeft_icon.svg";
import cancelIcon from "./images/cancel_icon.svg";

function QuickDetails() {
  const quickDetailsData = [
    {
      icon: personIcon,
      middleText: "Last 24 hours",
      rightText: "5 New Students",
    },
    {
      icon: awaitIcon,
      middleText: "Awaiting Process",
      rightText: "27 Students in Progress",
    },
    {
      icon: holdIcon,
      middleText: "On hold",
      rightText: "2 Accounts",
    },
    {
      icon: courseLeftIcon,
      middleText: "Course Left",
      rightText: "1 Student",
    },
    {
      icon: cancelIcon,
      middleText: "Cancelled Subscription",
      rightText: "4 Accounts",
    },
  ];

  return (
    <div className="h-[700px] rounded-[23px] drop-shadow-[0_2px_3px_rgba(0,0,0,0.04)] border bg-white">
      <div className="w-[100%] px-[20px] py-[24px] divide-y-2 flex flex-col gap-5">
        <p className="text-[19px] p-1 font-[400] leading-[13px]">
          Quick Details
        </p>
        {quickDetailsData.map((item) => (
          <QuickDetailsRow
            icon={item.icon}
            middleText={item.middleText}
            rightText={item.rightText}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickDetails;

const QuickDetailsRow = ({ icon, middleText, rightText }) => {
  return (
    <div className="w-[100%] pt-4">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img
            className="w-[38px] h-[38px]"
            src={icon}
            alt="Quick Details Icon"
          />
          <small className="text-[#4D4F5C] text-[13px] leading-5 my-auto opacity-50">
            {middleText}
          </small>
        </div>
        <div>
          <p className="text-[15px] font-[400] leading-[25px] mt-[6px] text-right">
            {rightText}
          </p>
        </div>
      </div>
    </div>
  );
};
