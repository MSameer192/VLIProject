// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import addCourseToggler from "../../Images/addCourse1/toggler.jpeg";
import searchIcon from "../../Images/addCourse1/searchIcon.png";
import dashboardHome from "../../Images/addCourse1/dashboardHome.svg";
import dashboardInbox from "../../Images/addCourse1/dashboardInbox.svg";
import dashboardInvoices from "../../Images/addCourse1/dashboardInvoices.svg";
import dashboardCar from "../../Images/addCourse1/dashboardCar.svg";
import dashboardCustomers from "../../Images/addCourse1/dashboardCustomers.svg";
import dashboardDashboard from "../../Images/addCourse1/dashboardDashboard.svg";
import dashboardSettings from "../../Images/addCourse1/dashboardSettings.svg";
import navBell from "../../Images/addCourse1/navBell.png";
import verticalTogglerNav from "../../Images/addCourse1/verticalTogglerNav.png";
import navUserImg from "../../Images/addCourse1/navUserImg.png";
import navDropdown from "../../Images/addCourse1/navDropdown.png";
import progressLine from "../../Images/addCourse1/progressLine.png";
import descriptionAddCourse2 from "../../Images/addCourse2/descriptionAddCourse2.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
import "./Pricing.css";

// import axios from "axios";
class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async componentWillMount() {
    }


    render() {


        return (
            <div className="addCoursesMainContainer">
                <div className="courseHeaderNav">
                    <div className="row">
                        <div className="col-2">
                            <img className="togglerAddCourse" src={addCourseToggler} alt="addCourseToggler" />
                        </div>
                        <div className="col-4">
                            <input type="text" className="searchTopCourses" placeholder="Search" />
                            <span className="searchCoursesSearch">
                                <img src={searchIcon} alt="searchIcon" />
                            </span>
                        </div>
                        <div className="col-3">
                        </div>

                        <div className="col-3">
                            <span className="addCourseNavRightThings">
                                <img className="addCourseNavAlaram" src={navBell} alt="navBell" />
                                <img className="addCourseNavStraightToggle" src={verticalTogglerNav} alt="verticalTogglerNav" />
                                <img className="addCourseNavProfilePhoto" src={navUserImg} alt="navUserImg" />
                                <span className="addCourseNavProfileName">User123<img className="addCourseNavdropdown" src={navDropdown} alt="navDropdown" /></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row addCourse1">
                    <div className="col-1">
                        <div className="dashboardTabsContainer">
                            <div className="dashboardTabsContainerActiveCont">
                                <img className="dashboardTabsContainerActive" src={dashboardHome} alt="dashboardHome" />
                            </div>
                            <img src={dashboardDashboard} alt="dashboardDashboard" />
                            <img src={dashboardInbox} alt="dashboardInbox" />
                            <img src={dashboardCar} alt="dashboardCar" />
                            <img src={dashboardInvoices} alt="dashboardInvoices" />
                            <img src={dashboardCustomers} alt="dashboardCustomers" />
                            <img src={dashboardCustomers} alt="dashboardCustomers" />
                            <img src={dashboardSettings} alt="dashboardSettings" />
                        </div>
                    </div>
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
                                <div className="addCourse2Main">
                                    <div className="col5Descriptions">
                                        <div className="row">
                                            <div className="col-5">
                                                <h6>Short Description</h6>
                                                <p>Enter a short detail about <br /> the course</p>
                                            </div>
                                            <div className="col-7">
                                                <textarea className="addCourse2Texterea1"></textarea>
                                                <p className="addCourse2Texterea1WordsCount">0 / 50 characters</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col5Descriptions">
                                        <div className="row">
                                            <div className="col-5">
                                                <h6>Long Description</h6>
                                                <p>Enter a detailed detail about <br /> the course</p>
                                            </div>
                                            <div className="col-7">
                                                <textarea className="addCourse2Texterea1 addCourse2Texterea2"></textarea>
                                                <p className="addCourse2Texterea1WordsCount">0 / 1500 characters</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col5Descriptions">
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
                                    <div className="col5Descriptions">
                                        <div className="row">
                                            <div className="col-5">
                                                <h6>Weekly course <br />Module</h6>
                                                <p>Enter details for each class in <br /> this course</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="packageTable">
                                    <table className="addCourseTable">
                                        <tr className="addCourseTableTH">
                                            <th>Select week</th>
                                            <th>Select class</th>
                                            <th>Description</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                                        </tr>
                                    </table>
                                    <br /><br /><br />
                                </div>
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
