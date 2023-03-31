import React from "react";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../../../../../../Actions/Base";
import { DeleteInstituteCoursesA } from "../../../../../../Actions/CourseA";
import { GetLocalStorage } from "../../../../../../Helpers/LocalStorage/LocalStorage";
import ButtonsSide from "./ButtonsSide/ButtonsSide";
import ContentSide from "./ContentSide/ContentSide";

import "./CoursesTiles.css";
const CoursesTiles = ({ Courses, OnClick, loading }) => {
  const Dispatch = useDispatch();
  const DeleteCourse = (InstituteCourseId) => {
    Dispatch(DeleteInstituteCoursesA(InstituteCourseId));
  };


  return Courses?.map((value) => {
    let Color =
      value?.Publish === "Approved"
        ? "text-[#00FF11] bg-[#00FF1129]"
        : value?.Publish === "Rejected"
          ? "bg-[#eb2e2e] text-[#ec1010]"
          : "bg-[#FF9C46] text-[#FF9C46]"
    console.log(`${BaseUrl}/api/Thumbnail/course?url=${value.CourseThumbnail}`, value)
    return (
      <div
        key={value?.InstituteCourseId}
        className="px-[4px] py-[6px] border rounded-[8px] w-full max-w-[700px] xl:max-w-none shadow-[4px_5px_3px_rgba(0,0,0,0.16)] mb-[23px]"
      >
        <div className="flex flex-col xl:flex-row gap-5 items-center">
          <div className="flex items-center justify-center h-[170px] overflow-hidden">
            <img
              className="w-full max-w-[295px]"
              src={`${BaseUrl}/api/Thumbnail/course?url=${value?.Course?.CourseThumbnail}`}
              alt="Automotive Course"
            />
          </div>
          <div className="w-full xl:w-[70%] flex flex-col lg:flex-row justify-between items-center">
            {/* middle section */}

            <ContentSide value={value} />
            {/* right section */}
            <ButtonsSide value={value} OnClick={OnClick} DeleteCourse={DeleteCourse} Color={Color} />
          </div>
        </div>
      </div>
    );
  })
    ;
};
export default CoursesTiles;
