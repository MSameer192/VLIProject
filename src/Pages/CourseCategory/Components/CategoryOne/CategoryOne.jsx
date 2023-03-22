import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoursesSlider from "../../../../Components/CourseSlider/CourseSlider";
import NoDataResponse from "../../../../Components/NoDataResponse";
import CourseTiles from "../CourseTiles/CourseTiles";

let ClassNames = `relative   duration-300 flex items-start
                    w-[95%]                             lg:w-11/12                  xl:w-[97%]       
                    flex-nowrap     sm:flex-wrap 
                    justify-start   sm:justify-around   lg:justify-start
                    gap-7                               lg:gap-x-8 lg:gap-y-16
                    `;
const CategoryOne = ({ Types }) => {
  const { LicenseTypeId } = useParams();
  const [CoursesInfo, setCoursesInfo] = useState([]);
  const Courses = Types?.Courses;
  useEffect(() => {
    setCoursesInfo(Courses);
  }, [Courses]);

  return (

    <div className="flex flex-col justify-center items-center">
      {Types?.SubLicenseTypes?.length > 0 ? (
        <div className="flex flex-col sm:items-center gap-9 w-full">
          <h2 className=" text-center text-[38px] SemiBoldItalic ">
            {LicenseTypeId ? Types?.LicenseTypeName : Types?.VehicleTypeName}
          </h2>
          <p className=" text-center text-3xs sm:text-base sm:w-11/12 md:w-[40%]">
            {LicenseTypeId
              ? Types?.LicenseTypeDescription
              : Types?.VehicleTypeDescription}
          </p>
        </div>
      ) : null}

      {!CoursesInfo?.length || CoursesInfo?.length === 0

        ? <NoDataResponse topText={"Top Text"} bottomText={"bottom text"} />
        
        : <CoursesSlider
          CoursesInfo={CoursesInfo}
          ClassNames={ClassNames}
          CourseTiles={CourseTiles}
          NavigateBtnClass="G1Licensing"
          SwitchSize={"sm"}
        />
      }
    </div>
  );
};

export default CategoryOne;
