import React from "react";
import GeoGraph from "./GeoGraph";

function GeographyGraph() {
  const legendArr = [
    {
      color: "#FF7CC3",
      text: "Canada Trust Driving School Inc",
      city: "Ontorio",
    },
    {
      color: "#FFA177",
      text: "Canada Safe Drivers Driving School Inc",
      city: "Toronto",
    },
    {
      color: "#FF8474",
      text: "The Canadian Driving School",
      city: "Quebec City",
    },
    {
      color: "#5EE2A0",
      text: "Canada Trust Driving School Inc",
      city: "Calgary",
    },
    {
      color: "#FF2",
      text: "The Canadian Driving School",
      city: "Ontorio",
    },
  ];
  return (
    <div className="w-[443px] h-[575px] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.04)] bg-white px-[26px] py-[37px]">
      <h3
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
        className="text-[#4D4F5C] text-[20px]"
      >
        Other Driving Schools in Neighbourhood
      </h3>

      <div className="h-[200px]">
        <GeoGraph />
      </div>
      <hr className="border-b-[1px] my-2" />

      {legendArr.map(({ color, text, city }, ind) => (
        <div key={ind} className="flex mb-[24px]">
          <div
            style={{ background: color }}
            className={`w-[17px] h-[17px] rounded-full my-auto mr-[10px]`}
          ></div>
          <p className="text-[16px] text-[#4D4F5C]">{text}</p>
          <p className="text-[16px] ml-auto text-[#4D4F5C]">{city}</p>
        </div>
      ))}
    </div>
  );
}

export default GeographyGraph;
