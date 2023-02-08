import ClassesIndicator from "../../Components/ClassesIndicator/ClassesIndicator";
import InstituteTemplate from "../../Components/InstituteTemplate/InstituteTemplate";
import Timetable from "./TimeTable/Timetable";

function SchedulerChild() {

  return (
    <div className="flex justify-center items-center bg-[#F7F7F7] mt-5">
      <div className="flex flex-col justify-center items-center w-full sm:w-[87%] gap-7  bg-white px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8">

        <div className="flex justify-between w-full">
          <h3 className="text-xs font-normal text-[#4D4F5C]">Shaun Chen & John Smith Schedult</h3>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5">
          <div className="flex justify-center items-center lg:justify-start w-full lg:w-1/3">
            <ClassesIndicator text="sm:text-5xs md:text-4xs xl:text-3xs" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-[55%]">
            <p className="text-center text-[#4D4F5C] lg:relative top-5 text-3xs md:text-2xs lg:text-xs xl:text-base whitespace-nowrap">
              Sep 4 - Sep 10
            </p>

            <button className={`bg-[#A1A3EF] shadow-[3px_3px_6px_#00000029] px-4 py-[14px] border-none  text-white cursor-pointer h-fit whitespace-nowrap w-fit
            rounded-3xl md:rounded-2xl             xl:rounded-3xl
            text-6xs    md:text-5xs     lg:text4xs xl:text-[17px]
            `}>
              Add a Leave/Break
            </button>

          </div>
        </div>



        <div className="w-full overflow-x-scroll">
          <div className="min-w-[700px] w-full">
            <Timetable />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 [&>*]:w-full sm:[&>*]:w-1/3">
          <div className="flex justify-center sm:justify-start">
            <ClassesIndicator text="sm:text-5xs md:text-4xs xl:text-3xs" />
          </div>

          <p className="text-center text-[#4D4F5C] sm:relative top-5 text-3xs md:text-2xs lg:text-xs xl:text-base">
            Sep 4 - Sep 10
          </p>
          <div className="flex justify-center sm:justify-end">
            <button className={`bg-[#A1A3EF] shadow-[3px_3px_6px_#00000029] px-4 py-[14px] border-none  text-white cursor-pointer h-fit whitespace-nowrap
            rounded-3xl md:rounded-2xl             xl:rounded-3xl
            text-6xs    md:text-5xs     lg:text4xs xl:text-[17px]
            `}>
              Add a Leave/Break
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Scheduler = () => <InstituteTemplate Element={SchedulerChild} />

export default Scheduler