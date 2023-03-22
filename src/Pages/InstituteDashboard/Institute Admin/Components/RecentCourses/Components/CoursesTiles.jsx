import React from "react";
import { useDispatch } from "react-redux";
import { DeleteInstituteCoursesA } from "../../../../../../Actions/CourseA";
import { GetLocalStorage } from "../../../../../../Helpers/LocalStorage/LocalStorage";

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
        : "bg-[#FF9C46] text-[#FF9C46]";
    return (
      <div
        key={value?.InstituteCourseId}
        className="px-[4px] py-[6px] border rounded-[8px] shadow-[4px_5px_3px_rgba(0,0,0,0.16)] mb-[23px]"
      >
        <div className="flex gap-5">
          <img
            className="h-[168px] w-[292px] cardImg"
            src={require("./images/card_image.png")}
            alt="Automotive Course"
          />
          <div className="cardBody w-[70%] flex justify-between  ">
            {/* middle section */}

            <div className="flex flex-col w-[70%] max-w-[535px] max-h-[136px] pl-[21px] pr-[27px] justify-between my-2 InsAdminCourseTilesBorder ">
              <div>
                <p className="text-[26px] leading-[26px] cardHeading">
                  {value?.Course?.CourseName}
                </p>
                <p className="text-[26px] leading-[26px] cardHeading">
                  L Type - {value?.Course?.LicenseType?.LicenseTypeName} | V
                  Type -{value?.Course?.VehicleType?.VehicleTypeName} |
                </p>
              </div>

              <p className="text-[14px] leading-[22px] pr-7 cardSubtitle">
                {value?.ShortDescription}
              </p>
            </div>
            <div className="border-r h-[137px] my-auto mx-[30px] cardHr"></div>
            {/* right section */}
            <div className="w-[27%] max-w-[230px] pr-[30px] mt-[24px] cardFoterWidth">
              <div className="flex flex-col  items-center cardFoter">
                <p className="text-[24px] leading-[24px] ">Status</p>
                <button
                  className={`rounded-[6px] py-[11px] px-[16px] text-center text-[13px] leading-[13px]  bg-opacity-20 mt-[18px] mb-[25px] w-[118px] border-none ${Color}`}
                >
                  {value?.Publish}
                </button>

                {GetLocalStorage("UserInfo").InstituteUserType === "Admin" ? (
                  <div className="flex gap-[15px]">
                    <img
                      className="w-[28px] h-[25px] cursor-pointer"
                      src={require("./images/edit_icon.svg").default}
                      alt="Edit Icon"
                      onClick={() => OnClick(value?.InstituteCourseId)}
                    />

                    <img
                      className="w-[19px] h-[25px] cursor-pointer"
                      src={require("./images/delete_icon.svg").default}
                      alt="Delete Icon"
                      onClick={() => DeleteCourse(value.InstituteCourseId)}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
    ;
};
export default CoursesTiles;
