// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import addCourseToggler from "../CourseSelection/Assets/toggler.jpeg";
import searchIcon from "../CourseSelection/Assets/searchIcon.png";
import dashboardHome from "../CourseSelection/Assets/dashboardHome.svg";
import dashboardInbox from "../CourseSelection/Assets/dashboardInbox.svg";
import dashboardInvoices from "../CourseSelection/Assets/dashboardInvoices.svg";
import dashboardCar from "../CourseSelection/Assets/dashboardCar.svg";
import dashboardCustomers from "../CourseSelection/Assets/dashboardCustomers.svg";
import dashboardDashboard from "../CourseSelection/Assets/dashboardDashboard.svg";
import dashboardSettings from "../CourseSelection/Assets/dashboardSettings.svg";
import navBell from "../CourseSelection/Assets/navBell.png";
import verticalTogglerNav from "../CourseSelection/Assets/verticalTogglerNav.png";
import navUserImg from "../CourseSelection/Assets/navUserImg.png";
import navDropdown from "../CourseSelection/Assets/navDropdown.png";
import progressLine from "../Steps Indicator/Assets/progressLine.png";
import descriptionAddCourse2 from "./Assets/descriptionAddCourse2.png";
import addCOursePricingPlus from "./Assets/addCOursePricingPlus.png";

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
                                                <h6>Course Syllabus</h6>
                                                <p>Enter Syllabus for this course</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="packageTable">
                                    <table className="addCourseTable">
                                        <tr className="addCourseTableTH">
                                            <th>S/no</th>
                                            <th>Description</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                                            <span>
                                                <img src={addCOursePricingPlus} style={{marginTop: '8px'}} alt="addCOursePricingPlus" />
                                            </span>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td style={{ textAlign: 'start' }}>Hello, Welcome to the Vehicle </td>
                                            <span>
                                                <img src={addCOursePricingPlus} style={{marginTop: '8px'}} alt="addCOursePricingPlus" />
                                            </span>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                                            <span>
                                                <img src={addCOursePricingPlus} style={{marginTop: '8px'}} alt="addCOursePricingPlus" />
                                            </span>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                                            <span>
                                                <img src={addCOursePricingPlus} style={{marginTop: '8px'}} alt="addCOursePricingPlus" />
                                            </span>
                                        </tr>
                                    </table>
                                </div>

                                <div className="col5Descriptions" style={{ marginLeft: '50px' }}>
                                    <div className="row">
                                        <div className="col-5">
                                            <h6>Weekly course <br />Module</h6>
                                            <p>Enter details for each class in <br /> this course</p>
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
                                </div>
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
