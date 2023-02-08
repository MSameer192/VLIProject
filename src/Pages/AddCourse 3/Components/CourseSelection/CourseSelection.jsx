// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images

import progressLine from "../Steps Indicator/Assets/progressLine.png";

// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import CourseSelctionNoteArea from './components/CourseSelctionNoteArea.jsx';
import CourseSelectionPackageTable from './components/CourseSelectionPackageTable.jsx';
import CourseSelectionInstallmentTable from './components/CourseSelectionInstallmentTable.jsx';

// css
import './CourseSelection.css'
import "../.././ownBootstrap.css";

// import axios from "axios";
class CourseSelection extends Component {
    render() {
        return (
            <>
                <div className="addCoursesMainContainer">

                    {/* CourseHeaderNav */}
        

                    <div className="row addCourse1">

                        {/* AddCoursedashboardTabs */}
             

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
                                <div className="mainContainer1White">

                                    {/* CourseSelctionNoteArea */}
                                    <CourseSelctionNoteArea />

                                    {/* <div className="packageTable addCourse1Table"> */}
                                    {/* <table className="addCourseTableHeader">
                                        <tr>
                                            <th>Driving Hours</th>
                                            <th>In Class Hours</th>
                                            <th>Online Hours</th>
                                            <th>Discount Type</th>
                                            <th>Fee</th>
                                            <th>Installments</th>
                                            <th>Status</th>
                                        </tr>
                                    </table> */}
                                    <CourseSelectionPackageTable />

                                    <div className="installmantTable">
                                        <div className="addPackgeTxt installmentsTxt">
                                            <h6>Installments</h6>
                                            <p>Create Frequency for each Installments</p>
                                        </div>


                                        <CourseSelectionInstallmentTable />


                                    </div>
                                    <div className="courseCVDiv">
                                        <div className="courseCVDivHeading">
                                            <h6>Course Curriculum</h6>
                                            <p>You can attach or write Curriculum for your Course here</p>
                                        </div>
                                        <div className="attachCurriculumDiv">
                                            <button className="attachBtnCurriculum">Attachment <span>^</span></button>
                                            <div className="attachDropDownCurr">
                                            </div>
                                        </div>
                                        <div className="attachCurrBrowse">
                                            <button className="attachCurrBrowseBtn">Browse</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <center>
                                <Link to={{ pathname: "/AddCourse2" }}>
                                    <button className="SaveAndContinueBtn">Save & Continue</button>
                                </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CourseSelection;
