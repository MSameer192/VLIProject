// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './CourseSelection.css'
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

// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
import "../../ownBootstrap.css";
// import axios from "axios";
class CourseSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async componentWillMount() {
    }
    handleEditInstallment() {
        window.scrollTo(0, 0);
        let element = document.getElementById("installmentsEdit");
        if (element.style.display === "initial") {
            element.style.display = "none"
        } else {
            element.style.display = "initial"
        }
    }

    render() {


        return (
            <>
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
                                <h1></h1>
                            </div>

                            <div className="col-3">
                                <span className="addCourseNavRightThings">
                                    <img className="addCourseNavAlaram" src={navBell} alt="navBell" />
                                    <img className="addCourseNavStraightToggle" src={verticalTogglerNav} alt="verticalTogglerNav" />
                                    <img className="addCourseNavProfilePhoto" src={navUserImg} alt="navUserImg" />
                                    <span className="addCourseNavProfileName">User123
                                        <img className="addCourseNavdropdown" src={navDropdown} alt="navDropdown" />
                                    </span>
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
                                    <div className="noteSec">
                                        <div className="addPackgeTxt">
                                            <h6>Add Packages</h6>
                                            <p>You can create your own packags according to the traning hours.</p>
                                        </div>
                                        <div className="noteSctionMain">
                                            <br />
                                            {/* <span className="noteSectionMainCross">x</span> */}
                                            <h6>Note</h6>
                                            <p>The amount entered here will be the first impression for the students.</p>
                                            <p className="noteSectionDotsRotate">....</p>
                                            <div className="noteSectionButtonsSec">
                                                <span className="noteSectionButtonsSecPrev">Previous</span>
                                                <span className="noteSectionButtonsSecNext">Next</span>
                                            </div>
                                        </div>
                                        <div className="pricingPackTxt">
                                            <h6>Pricing & Packages</h6>
                                        </div>
                                    </div>
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
                                    <div className="packageTable">
                                        <table className="addCourseTable">
                                            <thead>
                                                <tr className="addCourseTableTH">
                                                    <th>Driving Hours</th>
                                                    <th>In Class Hours</th>
                                                    <th>Online Hours</th>
                                                    <th>Discount Type</th>
                                                    <th>Fee</th>
                                                    <th>Installments</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>4</td>
                                                    <td>10</td>
                                                    <td>4</td>
                                                    <td>No Discount</td>
                                                    <td>260 $</td>
                                                    <td>3</td>
                                                    <td className="statusAddCourseTableBtn">Delete</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>9</td>
                                                    <td>2</td>
                                                    <td>30% Off</td>
                                                    <td>260 $</td>
                                                    <td>1</td>
                                                    <td className="statusAddCourseTableBtn">Delete</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>5</td>
                                                    <td>8</td>
                                                    <td>No Tax</td>
                                                    <td>400 $</td>
                                                    <td>2</td>
                                                    <td className="statusAddCourseTableBtn">Delete</td>
                                                </tr>
                                                <tr className="addCOurseRowLast">
                                                    <td>Min 1</td>
                                                    <td>Min 1</td>
                                                    <td>Min 1</td>
                                                    <td>Type</td>
                                                    <td>1 $</td>
                                                    <td>1</td>
                                                    <td className="statusAddCourseTableBtn">Add</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="installmantTable">
                                        <div className="addPackgeTxt installmentsTxt">
                                            <h6>Installments</h6>
                                            <p>Create Frequency for each Installments</p>
                                        </div>
                                        <div className="packageTable">

                                            <table className="addCourseTable addCourseTable2">
                                                <tr className="addCourseTableTH">
                                                    <th>Package Names</th>
                                                    <th>Installments</th>
                                                    <th>Schedule Set</th>
                                                    <th>Update</th>
                                                </tr>
                                                <tr>
                                                    <td>4 Hours Driving, 10 Hours In Class, 4 Hours Online for 260$</td>
                                                    <td>3</td>
                                                    <td>Weekly, 260$, 68$</td>
                                                    <td className="statusAddCourseTableBtn" onClick={() => { this.handleEditInstallment() }}>Edit</td>
                                                </tr>
                                                <tr>
                                                    <td>10 Hours Driving, 6 Hours In Class, 8 Hours Online for 400$</td>
                                                    <td>2</td>
                                                    <td>Weekly, 400$, 20$</td>
                                                    <td className="statusAddCourseTableBtn" onClick={() => { this.handleEditInstallment() }}>Edit</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><span style={{ color: 'white' }}>.</span></td>
                                                    <td></td>
                                                    <td className="statusAddCourseTableBtn"></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><span style={{ color: 'white' }}>.</span></td>
                                                    <td></td>
                                                    <td className="statusAddCourseTableBtn"></td>
                                                </tr>
                                            </table>
                                        </div>
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
                <div id="installmentsEdit">
                    <div className="installmentsEditPopup">
                        <h5>Installment Payment Schedule :</h5>
                        <div className="installmentPopupflex">
                            <span>Frequency</span>
                            <div>
                                <input type="checkbox" checked />
                                <span>Weekly</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Bi-Weekly</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Monthly</span>
                            </div>
                        </div>
                        <br />
                        <div className="secinstallmentPopupflex">
                            <div>
                                <span>Total Amount</span>
                                <input type="text" />
                            </div>
                            <div>
                                <span>Payment</span>
                                <input type="text" />
                            </div>
                        </div>
                        <p>3 payments will be proceessed weekly in the amount of </p>
                        <center className="installmentPopupButtons">
                            <button onClick={() => { this.handleEditInstallment() }}>Save</button>
                            <button onClick={() => { this.handleEditInstallment() }}>Cancel</button>
                        </center>
                    </div>
                </div>
            </>
        );
    }
}

export default CourseSelection;
