// react States
import React from "react";



// components
import CoursesInventory from './components/CoursesInventory.jsx';
import VehicalInventoryAdminNote from './components/VehicalInventoryAdminNote.jsx';

// import '../Description/Description.css'
import './vehicalInventory.css'

import Filters from "./components/VehicleFilter/Filters";


const CourseSelection = ({ Steps, setSteps, CourseData, setCourseData, StepsIndicator, PageNo }) => {

    return (
        <div className={`addCoursesMainContainer ${Steps !== PageNo ? "hidden  pointer-events-none" : ""}`} >

            <div className="row addCourse1">

                <div className="col-12" style={{ margin: '0 auto' }}>
                    <div className="mainContainerAddCourse addCourseFirstPageCont" >
                        <StepsIndicator Steps={Steps} PageNo={PageNo} />
                        <div className="row mt-4">

                            <div className="col-9 vehicleInventoryInventory">
                                <CoursesInventory Steps={Steps} setSteps={setSteps}
                                    CourseData={CourseData} setCourseData={setCourseData} />
                            </div>

                            <div className="col-3 vehicleInventorySearch flex flex-col items-center mt-5" id="vehicleInventorySearch">
                                <Filters />
                                <VehicalInventoryAdminNote />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}





export default CourseSelection;
