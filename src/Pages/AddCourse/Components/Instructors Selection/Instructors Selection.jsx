// react States
import React, { Component } from "react";

// Images
import progressLine from ".././Steps Indicator/Assets/progressLine.png";
import congratAddVehicleFive from ".././CourseSelection/Assets/congratAddVehicleFive.png";
import addCoursePage5CrossPopup from ".././CourseSelection/Assets/addCoursePage5CrossPopup.png";

// components
import CourseHeaderNav from '../CourseHeaderNav.jsx';
import AddCoursedashboardTabs from '../AddCoursedashboardTabs.jsx';
import InstructorsSelectionTable from './components/InstructorsSelectionTable.jsx';
import InstructorsSelectionTableHeader from './components/InstructorsSelectionTableHeader.jsx';

// css
import "./Instructors Selection.css";

class InstructorSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainContainerAddCoursePageFive: false
        };
    }

    render() {
        let mainContainerAddCoursePageFive;
        if (this.state.mainContainerAddCoursePageFive === true) {
            mainContainerAddCoursePageFive = <div className="addCoursePage5Container">
                <div className="addCourseFivePopup">
                    <div className="addCourseFivePopupCross">
                        <img src={addCoursePage5CrossPopup} alt="" />
                    </div>
                    <h6>Congratulations !!</h6>
                    <p>Course has been added to the Queue Waiting for InstructorSelectionroval</p>
                    <div className="addCourseFivePopupVehicle">
                        <img src={congratAddVehicleFive} alt="congratAddVehicleFive" />
                    </div>
                    <button>Done</button>
                </div>
            </div>
        }

        return (
            <div className="addCoursesMainContainer">

                {/* CourseHeaderNav */}
                <CourseHeaderNav />

                <div className="row addCourse1">

                    {/* AddCoursedashboardTabs */}
                    <AddCoursedashboardTabs />

                    <div className="col-11">

                        <div className="mainContainerAddCourse" style={{ width: '90%' }}>
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
                                    <span className="addCourseindexNumber addCourseindexNumberActive">4</span>
                                    <span className="progressDiscription">Instructors<span className="colorEEE">_</span>Selection</span>
                                </div>
                                <img className="addCourseline" src={progressLine} alt="progressLine" />
                                <div>
                                    <br />
                                    <span className="addCourseindexNumber" id="addCOurse5thStep">5</span>
                                    <span className="progressDiscription">Vehicle<span className="colorEEE">_</span>Selection</span>
                                </div>
                            </div>
                            <div className="mainContainer1White">

                                <InstructorsSelectionTableHeader />

                                <InstructorsSelectionTable />

                            </div>
                        </div>
                        {mainContainerAddCoursePageFive}
                        <center>
                            {/* <Link to={{ pathname: "/AddCourse2" }}> */}
                            <button className="SaveAndContinueBtn" onClick={() => {
                                this.setState({ mainContainerAddCoursePageFive: true })
                                document.getElementById("addCOurse5thStep").classList.add("addCourseindexNumberActive")
                            }}>Save & Continue</button>
                            {/* </Link> */}
                        </center>
                    </div>
                </div>
            </div >
        );
    }
}

export default InstructorSelection;
