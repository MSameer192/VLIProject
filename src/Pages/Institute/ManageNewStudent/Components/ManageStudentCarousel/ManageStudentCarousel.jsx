// react States
import React, { useEffect } from "react";
import $ from 'jquery'
import './jquery.hislide.js'

import studenInstCarIcon from "./Assets/studenInstCarIcon.png";
import studenInstEmailIcon from "./Assets/studenInstEmailIcon.png";
import studenInstCallIcon from "./Assets/studenInstCallIcon.png";
import { useDispatch, useSelector } from "react-redux";

// css
import './ManageStudentCarousel.css'
import { GetInstructorsA } from "../../../../../Actions/InstructorA.js";
import { BaseUrl } from "../../../../../Actions/Base.js";
import ClassScheduler from "../../../../../Components/Scheduler/Scheduler.jsx";
import { useParams } from "react-router-dom";

const CourseSlider = ({ Instructors: InstructorState, InstructorType, setInstructors, setShowSlider, Events, setEvents, SubmitSchedule }) => {

    const { Instructors } = useSelector(Store => Store.InstructorReducer)
    const Dispatch = useDispatch()
    setTimeout(() => {
        $('.slide')?.hiSlide();
    }, 100);
    const { EnrollmentId } = useParams();
    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetInstructorsA(EnrollmentId))
    }, [Dispatch, EnrollmentId])
    const { Student } = useSelector(Store => Store.StudentReducer)
    const SelectInstructor = (e, value, Src, Name) => {
        const InstructorTypes = ["Driving", "Online", "InClass"];
        let Index = InstructorTypes.indexOf(InstructorType);

        InstructorState[Index] = {

            id: value?.Instructor?.InstructorId,
            InstructorImage: Src,
            InstructorName: Name,
            text: Name,
            InstructorType,
            LicenseTypeName: value?.Instructor?.LicenseType?.LicenseTypeName,
            Email: value?.Email,
            PhoneNumber: value?.PhoneNumber,
            InstructorFK: value?.Instructor?.InstructorId
        }
        setInstructors([...InstructorState,]);


        setShowSlider({ Show: false, InstructorType: "" })
    }
    console.log(InstructorState)
    return (
        <div className="border-[red] border-[10px] border-solid" >

            <div style={{
                backgroundColor: '#454545b3', paddingTop: '50px', position: "fixed",
                zIndex: "30", overflowY: "scroll",
            }} className=" h-[calc(100vh_-_80px)] w-screen mt-20 top-0 left-0">
                <div className="slide hi-slide">
                    <div className="hi-prev "></div>
                    <div className="hi-next "></div>
                    <ul>
                        {Instructors?.map(value => {

                            const Src = `${BaseUrl}/api/images/Instructors?url=${value?.Instructor?.ProfileImage}`

                            const Name = value?.FirstName + " " + value?.LastName
                            return <li key={value?.Instructor?.InstructorId}>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center style={{ height: '270px', }}>
                                                <img src={Src} alt="studentInstImg" style={{ width: '100%' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>{Name}</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">
                                                    Instructor
                                                </button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" />
                                                <span>
                                                    Type
                                                    {` ${value?.Instructor?.LicenseType?.LicenseTypeName}`}
                                                </span>
                                                <br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>{value?.Email}</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>{value?.PhoneNumber}</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn cursor-pointer" onClick={(e) =>
                                                    SelectInstructor(e, value, Src, Name)
                                                }
                                                >
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}

                    </ul>
                </div>

                <SchedulerCompleted Student={Student} Events={Events} setEvents={setEvents} SubmitSchedule={SubmitSchedule} />
            </div>
            {/********************************** Calender Ends *****************************************/}
        </div >
    );
}

const SchedulerCompleted = ({ Student, Events, setEvents, SubmitSchedule }) => {


    return <ClassScheduler
        Name={Student?.FirstName + " " + Student?.LastName}
        setEvents={setEvents} Events={Events}
    />
}
export default CourseSlider;
