import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetStudentsA } from "../../../Actions/StudentA";
import InstituteTemplate from "../../../Components/InstituteTemplate/InstituteTemplate";
import { InstructorRowTemplate } from "../../../Components/InstructorTemplate/InstructorTemplate";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import NoDataResponse from "../../../Components/NoDataResponse";
import useCheckLogin from "../../../Helpers/CustomHooks/CheckLogin";
import StudentFilter from "./Components/StudentFilter";
import StudentTable from "./Components/StudentTable";

const StudentsListChild = () => {
  const { Students, loading } = useSelector((Store) => Store?.StudentReducer);
  const [MaxHeight, setMaxHeight] = useState("max-h-[0px]");
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    Dispatch(GetStudentsA());
  }, [Dispatch]);
  useCheckLogin(true, ["Institute"], ["Staff", "Admin"]);

  return (
    <div className="w-11/12 bg-white mt-16 rounded-[35px]">
      <div className="flex w-full px-16 items-center">
        <div className="text-[#174A84] text-xs Boldfont w-1/4 ">Students</div>
        <div className="flex w-3/4 justify-end gap-12">
          <span
            className="InstructorPageBtns  relative"
            onMouseEnter={() => setMaxHeight("max-h-[1000px]")}
            onMouseLeave={() => setMaxHeight("max-h-[0px]")}
          >
            Filter Instructor
            <StudentFilter MaxHeight={MaxHeight} />
          </span>
        </div>
      </div>
      {/* student table */}
      {loading ? (
        <LoadingSpinner />
      ) : Students.length === 0 ? (
        <NoDataResponse
          topText="Sorry, there are not students to show!"
          bottomText="No students enrolled yet"
        />
      ) : (
        <StudentTable Students={Students} />
      )}
    </div>
  );
};

const StudentsList = () => (
  <InstituteTemplate
    Element={StudentsListChild}
    bg="bg-[#F7F7F7] min-h-screen items-center"
  />
);

export default StudentsList;
