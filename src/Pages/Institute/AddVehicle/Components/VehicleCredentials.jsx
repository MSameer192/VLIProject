import React from "react";
import ErrorIndicator from "./Components/ErrorIndicator";

let TextStyle = `w-60 font-normal whitespace-nowrap
sm:text-5xs     lg:text-4xs      xl:text-3xs
hidden          sm:inline-block`;
let DivStyle = `flex w-full justify-center sm:justify-start
px-0        sm:px-2     md:px-4     lg:px-6     xl:px-8     2xl:px-10    
gap-10      sm:gap-14   md:gap-16   lg:gap-20   xl:gap-24   2xl:gap-28`;
const InputStyle = `px-7 py-2 w-full outline-none border-solid border-[1px] shadow-[0px_3px_6px_#00000029]
    border-[#E3E3E3] focus-within:border-black
    text-6xs    sm:text-5xs     md:text-4xs     xl:text-3xs`;
const InputParentSpanStyle = "max-w-[375px] w-11/12 sm:w-1/2 relative";

const VehicleCredentials = ({
  VehicleData,
  setVehicleData,
  VehicleErrors,
  setVehicleErrors,
}) => {
  const OnChange = (e, KeyName) => {
    setVehicleData({ ...VehicleData, [KeyName]: e.target.value });
    setVehicleErrors({ ...VehicleErrors, [KeyName]: false });
  };

  return (
    <div
      className={`mt-10 flex w-11/12 flex-col items-center gap-10 py-6 sm:items-start sm:bg-white
                        sm:px-6     md:px-8     lg:px-10    xl:px-12    2xl:px-14`}
    >
      <h2 className="Boldfont text-3xs font-normal text-[#707070] md:text-2xs xl:text-sm">
        Registration and Insurance
      </h2>

      <div className="mx-5 flex w-full flex-col gap-7 ">
        <div className={DivStyle}>
          <label className={TextStyle} htmlFor="IdentityNumber">
            Identity Number
          </label>

          <span className={InputParentSpanStyle}>
            <ErrorIndicator Error={VehicleErrors?.IdentityNumber} />
            <input
              type="text"
              id="IdentityNumber"
              className={InputStyle}
              placeholder="Identity Number"
              value={VehicleData.IdentityNumber}
              onChange={(e) => OnChange(e, "IdentityNumber")}
            />
          </span>
        </div>
        <div className={DivStyle}>
          <label className={TextStyle} htmlFor="PlateNumber">
            Plate Number
          </label>
          <span className={InputParentSpanStyle}>
            <ErrorIndicator Error={VehicleErrors?.PlateNumber} />
            <input
              type="text"
              id="PlateNumber"
              className={InputStyle}
              placeholder="AAAA 111"
              value={VehicleData.PlateNumber}
              onChange={(e) => OnChange(e, "PlateNumber")}
            />
          </span>
        </div>
        <div className={DivStyle}>
          <label className={TextStyle} htmlFor="InsuranceNumber">
            Insurance Number
          </label>
          <span className={InputParentSpanStyle}>
            <ErrorIndicator Error={VehicleErrors?.InsuranceNumber} />
            <input
              type="text"
              id="InsuranceNumber"
              className={InputStyle}
              placeholder="Insurance Number"
              value={VehicleData.InsuranceNumber}
              onChange={(e) => OnChange(e, "InsuranceNumber")}
            />
          </span>
        </div>
        <div className={DivStyle}>
          <label className={TextStyle} htmlFor="TrainerNumberPlate">
            Trainer Number Plate
          </label>
          <span className={InputParentSpanStyle}>
            <ErrorIndicator Error={VehicleErrors?.TrainerNumberPlate} />
            <input
              type="text"
              id="TrainerNumberPlate"
              className={InputStyle}
              placeholder="AAAA 111"
              value={VehicleData.TrainerNumberPlate}
              onChange={(e) => OnChange(e, "TrainerNumberPlate")}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCredentials;
