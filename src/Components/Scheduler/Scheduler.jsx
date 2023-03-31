import ClassesIndicator from "../../Components/ClassesIndicator/ClassesIndicator";
import DevExtremeScheduler from "../DevExtremeScheduler/DevExtremeScheduler";
import Timetable from "./TimeTable/Timetable";

function ClassScheduler({ Name, TopBtn, BottomComp, setEvents, Events }) {


  return (
    <div className="flex justify-center items-center   mt-5 w-full">
      <div className="flex flex-col justify-center items-center w-full sm:w-[87%] gap-7  bg-white px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8">

        <div className="flex justify-between w-full">
          <h3 className="text-xs font-normal text-[#4D4F5C]">{Name}</h3>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5">
          <div className="flex justify-center items-center lg:justify-start w-full lg:w-1/3">
            <ClassesIndicator text="sm:text-5xs md:text-4xs xl:text-3xs" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-[55%]">
            <p className="text-center text-[#4D4F5C] lg:relative top-5 text-3xs md:text-2xs lg:text-xs xl:text-base whitespace-nowrap">
              Sep 4 - Sep 10
            </p>

            <div>{TopBtn && <TopBtn />} </div>

          </div>
        </div>



        <div className="w-full overflow-x-scroll">
          <div className="min-w-[700px] w-full">
            <DevExtremeScheduler Events={Events} setEvents={setEvents} />
          </div>
        </div>
        {BottomComp && <BottomComp />}
      </div>
    </div>
  );
}

export default ClassScheduler