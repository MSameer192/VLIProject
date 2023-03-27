// react States
import React, { useEffect } from "react";

// Images
import congratAddVehicleFive from ".././CourseSelection/Assets/congratAddVehicleFive.png";
import addCoursePage5CrossPopup from ".././CourseSelection/Assets/addCoursePage5CrossPopup.png";

// components
import InstructorsSelectionTable from './components/InstructorsSelectionTable.jsx';
import InstructorsSelectionTableHeader from './components/InstructorsSelectionTableHeader.jsx';

// css
import "./Instructors Selection.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../Components/LoadingSpinner/LoadingSpinner";

const InstructorSelection = ({ Steps, setSteps, CourseData, setCourseData, StepsIndicator, PageNo, Success }) => {
    const { loading } = useSelector(Store => Store.CourseReducer)

    const OnClick = () => {
        if (Success)
            setSteps(6)
    }
    useEffect(() => {
        if (Success === true)
            setSteps(6)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Success])
    return (

        <div className={`addCoursesMainContainer ${Steps < PageNo ? "hidden" : ""}`}>
            {!loading ?

                <div className="row addCourse1">

                    <div className="col-12">

                        <div className="mainContainerAddCourse" style={{ width: '90%' }}>
                            <StepsIndicator Steps={Steps} />
                            <div className="mainContainer1White">

                                <InstructorsSelectionTableHeader />

                                <InstructorsSelectionTable CourseData={CourseData} setCourseData={setCourseData} />

                            </div>
                        </div>

                        <center>

                            {Steps === 6 ? <SuccssPopup setSteps={setSteps} Steps={Steps} /> : null}

                            <button className="SaveAndContinueBtn" type="submit" onClick={OnClick}>Save & Continue</button>

                        </center>
                    </div>
                </div>
                : <LoadingSpinner />
            }
        </div>
    );
}

const SuccssPopup = ({ setSteps }) => {
    const Navigate = useNavigate();
    const OnClick = () => {
        setSteps(1)
        Navigate('/')
    }
    return <div className="addCoursePage5Container z-30">
        <div className="addCourseFivePopup">
            <div className="addCourseFivePopupCross">
                <img className="cursor-pointer" src={addCoursePage5CrossPopup} alt="img" onClick={OnClick} />
            </div>
            <h6>Congratulations !!</h6>
            <p>Course has been added to the Queue Waiting for course approval</p>
            <div className="addCourseFivePopupVehicle">
                <img src={congratAddVehicleFive} alt="congratAddVehicleFive" />
            </div>
            <button type="button" className="cursor-pointer" onClick={OnClick}>Done</button>
        </div>
    </div>
}

export default InstructorSelection;
