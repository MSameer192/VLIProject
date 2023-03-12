import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InstituteCoursesA } from "../../../../../Actions/CourseA";
import { GeneralEvent } from "../../../../../Actions/Events/FilterA";
import { SocketContext } from "../../../../../App";
import CoursesTiles from "./Components/CoursesTiles";


function RecentCourses({ setInstituteCourseId, setEdit }) {
    const { Courses } = useSelector(Store => Store.CourseReducer);
    const Dispatch = useDispatch()
    const [CourseType, setCourseType] = useState("All Courses")
    const Socket = useContext(SocketContext)
    const OnClick = (text) => {
        setCourseType(text)
        Dispatch(GeneralEvent(null, "GetInstituteCoursesRequest"))
        Socket.emit("FilterInsAdminCourses", { Course: text })
    }


    useEffect(() => {
        Dispatch(InstituteCoursesA())
    }, [Dispatch])
    useEffect(() => {
        Socket?.on("FilteredInsAdminCourses", (CourseArr) =>
            Dispatch(GeneralEvent(CourseArr, "GetInstituteCoursesSuccess")))
 
    }, [Dispatch, Socket])


    const CourseEditClick = (Id) => {
        setEdit(true)
        setInstituteCourseId(Id)
    }
    return (
        <div className="bg-[#F7F7F7] p-4 box-border">
            <div className=" px-[42px] pt-5  border-2 ">
                {/* top */}
                <div className="mx-5">
                    {/* Heading */}
                    <div className="flex justify-between mr-9">
                        <h3 className="text-[22px] font-medium leading-5">
                            Recent Courses
                        </h3>
                        <button className="text-[20px] border-none leading-[18px] bg-[#A1A3EF] rounded-t-[12px] rounded-b-[16px] px-[31px] py-[14px] text-white">
                            Show All
                        </button>
                    </div>
                    {/* buttons */}
                    <div className="flex gap-1 mt-[10px]">
                        <CustomButton text="All Courses" OnClick={() => OnClick("All Courses")}
                            CourseType={CourseType} />
                        <CustomButton text="To be reviewed" OnClick={() => OnClick("To be reviewed")}
                            CourseType={CourseType} />
                        <CustomButton text="Approved" OnClick={() => OnClick("Approved")}
                            CourseType={CourseType} />
                        <CustomButton text="Rejected" OnClick={() => OnClick("Rejected")}
                            CourseType={CourseType} />

                        <CustomButton text="Vehicle Dashboard" OnClick={() => OnClick("Vehicle Dashboard")}
                            CourseType={CourseType} />
                    </div>
                </div>
                {/* recent courses list */}
                <div className="bg-white  px-[21px] py-[37px]">
                    <CoursesTiles Courses={Courses} OnClick={CourseEditClick} />
                </div>
            </div>
        </div>
    );
}

export default RecentCourses;

const CustomButton = ({ text, CourseType, OnClick }) => {
    const BgColor = CourseType !== text ? "bg-white" : "bg-[#C7DDFC]"
    return (
        <button className={`${BgColor} border-none text-[#576271] text-3xs px-[25px] py-[31px] rounded-t-[12px] w-[19%] text-center cursor-pointer`}
            onClick={OnClick}
        >
            {text}
        </button>
    );
};
