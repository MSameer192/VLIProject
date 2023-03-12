// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// components

import VehicalInventory from '../vehicalInventory/components/VehicalInventory.jsx';
import VehicalInventoryAdminNote from '../vehicalInventory/components/VehicalInventoryAdminNote.jsx';

import '../CourseSelection/CourseSelection.css'
import './adminApprovedCourses.css'
import Filters from "../vehicalInventory/components/VehicleFilter/Filters.jsx";

class Description extends Component {
    render() {
        return (
            <div className="addCoursesMainContainer">

                <div className="row addCourse1">



                    <div className="col-12">
                        <div className="mainContainerAddCourse addCourseFirstPageCont">
                            <h3 className="coursesApprovedAdminTxt">Courses Approved from Admin</h3>
                            <div className="row">
                                <div className="col-9 vehicleInventoryInventory">

                                    <VehicalInventory />

                                </div>
                                <div className="col-3 vehicleInventorySearch" id="vehicleInventorySearch">
                                    <Filters />

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
