// react States
import React, { useEffect, useState } from "react";
// Images
import descriptionAddCourse2 from "./Assets/descriptionAddCourse2.png";
// components
import CourseDescription from './components/CourseDescription.jsx';
import SyllabusDescription from './components/SyllabusDescription.jsx';
import WeeklyCourseModule from './components/WeeklyCourseModule.jsx';

// css
import "./Pricing.css";

const CourseDetails = ({ Steps, setSteps, CourseData, setCourseData, StepsIndicator, PageNo }) => {
    const [CourseDetailsData, setCourseDetailsData] = useState({
        ShortDescription: "",
        LongDescription: "",
        CourseSyllabus: [{ CourseDescription: "" }],
        ClassSchedule: [{ ClassDescription: "", ClassNumber: "", WeekNumber: "" }],
    });

    const [CourseDetailsErr, setCourseDetailsErr] = useState({})
    useEffect(() => {
        setCourseData({ ...CourseData, ...CourseDetailsData, })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseDetailsData])

    return (
        <div className={`addCoursesMainContainer ${Steps !== PageNo ? "hidden" : ""}`}>

            <div className="row addCourse1">

                <div className="col-12">
                    <div className="mainContainerAddCourse">
                        <StepsIndicator Steps={Steps} />
                        <div className="mainContainer1White">
                            <center className="descriptionIconTxt">
                                <div>
                                    <img src={descriptionAddCourse2} alt="descriptionAddCourse2" />
                                </div>
                                <h6>Description</h6>
                            </center>

                            <CourseDescription
                                CourseDetailsData={CourseDetailsData} setCourseDetailsData={setCourseDetailsData}
                                CourseDetailsErr={CourseDetailsErr} setCourseDetailsErr={setCourseDetailsErr}
                            />

                            <SyllabusDescription
                                CourseDetailsData={CourseDetailsData} setCourseDetailsData={setCourseDetailsData}
                                CourseDetailsErr={CourseDetailsErr} setCourseDetailsErr={setCourseDetailsErr}
                            />

                            <div className="col5Descriptions" style={{ marginLeft: '50px' }}>
                                <div className="row">
                                    <div className="col-5">
                                        <h6>Weekly course <br />Module</h6>
                                        <p>Enter details for each class in <br /> this course</p>
                                    </div>
                                </div>
                            </div>

                            <WeeklyCourseModule CourseDetailsData={CourseDetailsData} setCourseDetailsData={setCourseDetailsData}
                                CourseDetailsErr={CourseDetailsErr} setCourseDetailsErr={setCourseDetailsErr}
                            />

                            <div className="col5Descriptions" style={{ marginLeft: '50px' }}>
                                <div className="row">
                                    <div className="col-5">
                                        <h6>Possible FAQ's about <br /> the course (if any)</h6>
                                        <p>Enter Possible Queries<br /> related to the course.</p>
                                    </div>
                                    <div className="col-7">
                                        <input className="addCourse2Texterea1 addCourse2Texterea3" placeholder="How to enroll for the Course?"
                                            onChange={e => setCourseDetailsData({ ...CourseDetailsData, Possible_FAQs: [e.target.value] })}
                                        />
                                        <p className="addCourse2Texterea1WordsCount">
                                            <button className="addCourse2AddFAQBtn" type="button">Add FAQ's</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <center>

                        <button className="SaveAndContinueBtn cursor-pointer" type="button"
                            onClick={() => setSteps(4)}
                        >Save & Continue</button>

                    </center>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
