// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import progressLine from ".././Steps Indicator/Assets/progressLine.png";
import descriptionAddCourse2 from "./Assets/descriptionAddCourse2.png";


// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import PricingFields from './components/PricingFields.jsx';
import PricingTable from './components/PricingTable.jsx';
import WeeklyCOurseTable from './components/WeeklyCOurseTable.jsx';


// css
import "./Pricing.css";

// import axios from "axios";
class Pricing extends Component {
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
                            <div className="mainContainer1White">
                                <center className="descriptionIconTxt">
                                    <div>
                                        <img src={descriptionAddCourse2} alt="descriptionAddCourse2" />
                                    </div>
                                    <h6>Description</h6>
                                </center>

                                <PricingFields />

                                <PricingTable />

                                <div className="col5Descriptions" style={{ marginLeft: '50px' }}>
                                    <div className="row">
                                        <div className="col-5">
                                            <h6>Weekly course <br />Module</h6>
                                            <p>Enter details for each class in <br /> this course</p>
                                        </div>
                                    </div>
                                </div>

                                <WeeklyCOurseTable />

                                <div className="col5Descriptions" style={{ marginLeft: '50px' }}>
                                    <div className="row">
                                        <div className="col-5">
                                            <h6>Possible FAQ's about <br /> the course (if any)</h6>
                                            <p>Enter Possible Queries<br /> related to the course.</p>
                                        </div>
                                        <div className="col-7">
                                            <input className="addCourse2Texterea1 addCourse2Texterea3" placeholder="How to enroll for the Course?"></input>
                                            <p className="addCourse2Texterea1WordsCount">
                                                <button className="addCourse2AddFAQBtn">Add FAQ's</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                        <center>
                            <Link to={{ pathname: "/AddCourse3" }}>
                                <button className="SaveAndContinueBtn">Save & Continue</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div >
        );
    }
}

export default Pricing;
