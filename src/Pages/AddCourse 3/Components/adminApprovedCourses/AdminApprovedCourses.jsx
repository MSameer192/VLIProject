// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import VehicalInventory from '../vehicalInventory/components/VehicalInventory.jsx';
import VehicalInventoryFilter from '../vehicalInventory/components/VehicalInventoryFilter.jsx';
import VehicalInventoryAdminNote from '../vehicalInventory/components/VehicalInventoryAdminNote.jsx';

import '../Description/Description.css'
import '../CourseSelection/CourseSelection.css'
import './adminApprovedCourses.css'

class Description extends Component {
    render() {
        return (
            <div className="addCoursesMainContainer">

                {/* CourseHeaderNav */}
                <CourseHeaderNav />

                <div className="row addCourse1">

                    {/* AddCoursedashboardTabs */}
                    <AddCoursedashboardTabs />

                    <div className="col-11">
                        <div className="mainContainerAddCourse addCourseFirstPageCont">
                            <h3 className="coursesApprovedAdminTxt">Courses Approved from Admin</h3>
                            <div className="row">
                                <div className="col-9 vehicleInventoryInventory">

                                    <VehicalInventory />

                                </div>
                                <div className="col-3 vehicleInventorySearch" id="vehicleInventorySearch">
                                    <VehicalInventoryFilter />

                                    <VehicalInventoryAdminNote />

                                </div>
                            </div>
                        </div>
                        <center>
                            <Link to={{ pathname: "/AddCourse4" }}>
                                <button className="SaveAndContinueBtn">Save & Continue</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div >
        );
    }
}

export default Description;
