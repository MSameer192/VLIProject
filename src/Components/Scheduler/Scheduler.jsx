import ClassesIndicator from "../../Components/ClassesIndicator/ClassesIndicator";
// import Timetable from "./TimeTable/Timetable";
import "./Scheduler.css";
function ClassScheduler({
  Name,
  TopBtn,
  BottomComp,
  setEvents,
  Events,
  Edit,
  Resources,
}) {
  return (
    <div className="TimeTableContainer">
      <div className="flex h-fit w-full flex-col items-center justify-start gap-7 bg-white px-3 sm:w-[87%] sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8">
        <div className="flex w-full justify-between">
          <h3 className="text-xs font-normal text-[#4D4F5C]">{Name}</h3>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
          <div className="flex w-full items-center justify-center lg:w-1/3 lg:justify-start">
            <ClassesIndicator text="sm:text-5xs md:text-4xs xl:text-3xs" />
          </div>

          <div className="flex w-[55%] flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="top-5 whitespace-nowrap text-center text-3xs text-[#4D4F5C] md:text-2xs lg:relative lg:text-xs xl:text-base">
              Sep 4 - Sep 10
            </p>

            <div>{TopBtn && <TopBtn />} </div>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="w-full min-w-[700px]">
            {/* <Timetable Events={Events} setEvents={setEvents} Edit={Edit} Resources={Resources} /> */}
          </div>
        </div>
        {BottomComp && <BottomComp />}
      </div>
    </div>
  );
}

export default ClassScheduler;
