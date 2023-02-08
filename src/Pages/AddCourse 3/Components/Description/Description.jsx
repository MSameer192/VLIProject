// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import addCourse3HeadImg from "./Assets/addCourse3HeadImg.png";
import progressLine from ".././Steps Indicator/Assets/progressLine.png";

import './Description.css'

// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import DiscriptionMainArea from './components/DiscriptionMainArea.jsx';

// css
import "./Description.css";
import "../.././ownBootstrap.css";

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
                        <div className="mainContainerAddCourse">
                            <div className="addCourseProgress">
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber addCourseindexNumberActive">1</span>
                                    <span className="progressDiscription">Course<span className="colorEEE">_</span>Selection</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />

                                <div>
                                    <br />
                                    <span className="addCourseindexNumber addCourseindexNumberActive">2</span>
                                    <span className="progressDiscription">The<span className="colorEEE">_</span>price<span className="colorEEE">_</span>info</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber addCourseindexNumberActive">3</span>
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
                            <div className="mainContainer1White">
                                <center className="descriptionIconTxt addCOurse3Desc">
                                    <img src={addCourse3HeadImg} style={{ width: '90px' }} alt="addCourse3HeadImg" />
                                    <h6>Select Vehicle</h6>
                                </center>

                                <DiscriptionMainArea />

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
