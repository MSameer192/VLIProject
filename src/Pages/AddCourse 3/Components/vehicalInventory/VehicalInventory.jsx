// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import progressLine from "../Steps Indicator/Assets/progressLine.png";

// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import VehicalInventory from './components/VehicalInventory.jsx';
import VehicalInventoryFilter from './components/VehicalInventoryFilter.jsx';
import VehicalInventoryAdminNote from './components/VehicalInventoryAdminNote.jsx';

import '../Description/Description.css'
import '../CourseSelection/CourseSelection.css'
import './vehicalInventory.css'

class Description extends Component {

    render() {
        return (
            <div className="addCoursesMainContainer">


                <div className="row addCourse1">

      
                    <div className="col-11">
                        <div className="mainContainerAddCourse addCourseFirstPageCont">
                            <div className="addCourseProgress">
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber">1</span>
                                    <span className="progressDiscription">Course<span className="colorEEE">_</span>Selection</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />

                                <div>
                                    <br />
                                    <span className="addCourseindexNumber">2</span>
                                    <span className="progressDiscription">The<span className="colorEEE">_</span>price<span className="colorEEE">_</span>info</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber">3</span>
                                    <span className="progressDiscription">Brief<span className="colorEEE">_</span>description</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber">4</span>
                                    <span className="progressDiscription">Instructors<span className="colorEEE">_</span>Selection</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber">5</span>
                                    <span className="progressDiscription">Vehicle<span className="colorEEE">_</span>Selection</span>
                                </div>
                            </div>
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
