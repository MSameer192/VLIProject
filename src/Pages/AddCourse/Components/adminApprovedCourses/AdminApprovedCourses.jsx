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
import idCardIcon from "../Description/Assets/idCardIcon.png";
import addCourse3HeadImg from "../Description/Assets/addCourse3HeadImg.png";
import addCourseVehical1 from "../Description/Assets/addCourseVehical1.png";
import addCourseVehical2 from "../Description/Assets/addCourseVehical2.png";
import addCourseVehical3 from "../Description/Assets/addCourseVehical3.png";
import addCourseVehical4 from "../Description/Assets/addCourseVehical4.png";
import addCourseVehical5 from "../Description/Assets/addCourseVehical5.png";
import addCourseVehical6 from "../Description/Assets/addCourseVehical6.png";
import addCourseVehical7 from "../Description/Assets/addCourseVehical7.png";
import addCourseVehical8 from "../Description/Assets/addCourseVehical8.png";
import progressLine from "../Steps Indicator/Assets/progressLine.png";
import filteraddcourseDropdown from "../vehicalInventory/Assets/filteraddcourseDropdown.png";
import addCourseFilterSearch from "../vehicalInventory/Assets/addCourseFilterSearch.png";
import noteFromAdminFIlter from "../vehicalInventory/Assets/noteFromAdminFIlter.png";

import '../Description/Description.css'
import '../CourseSelection/CourseSelection.css'
import './adminApprovedCourses.css'
// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
// import "../../css/AddCourse3.css";
// import "../../css/ownBootstrap.css";
// import axios from "axios";
class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterForMobile: ''
        };
    }
    async componentWillMount() {
    }


    addOrRemoveClassFilterMobile(e) {
        if (e === "open") {
            this.setState({ filterForMobile: "open" })
            document.getElementById("filterAddCOurse1").classList.add("filterAddCOurse1Mobile")
            document.getElementById("vehicleInventorySearch").classList.add("vehicleInventorySearchMobile")
        } else {
            this.setState({ filterForMobile: "close" })
            document.getElementById("filterAddCOurse1").classList.remove("filterAddCOurse1Mobile")
            document.getElementById("vehicleInventorySearch").classList.remove("vehicleInventorySearchMobile")
        }
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
                        <div className="mainContainerAddCourse addCourseFirstPageCont">
                          <h3 className="coursesApprovedAdminTxt">Courses Approved from Admin</h3>
                            <div className="row">
                                <div className="col-9 vehicleInventoryInventory">
                                    <div className="mainContainer1White addCourseFirstPage vehicleInventrory">
                                        <div className="addCourse3Main" style={{ marginTop: '-100px' }}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="vehicalBox addCourseFIrstVehicalBox">
                                                        <div className="vehicalImgConainer">
                                                            <div className="vehicleInventoryImgTopRate">
                                                                <div>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <center>
                                                                <img src={addCourseVehical1} alt="addCourseVehical1" />
                                                            </center>
                                                            <div className="vehicleInventoryPictureWaterPrints">
                                                                <div className="waterPrintsGreen">LType G</div>
                                                                <div className="waterPrintsGreen">VType L</div>
                                                            </div>
                                                        </div>
                                                        <div className="vehicleInventoryContent">
                                                            <h6>Automotive Course</h6>
                                                            <p>Class G. Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600 kilograms</p>
                                                        </div>
                                                        <center>
                                                            <button className="vehicalSelectBtn">
                                                                Select Course
                                                            </button>
                                                        </center>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="vehicalBox addCourseFIrstVehicalBox">
                                                        <div className="vehicalImgConainer">
                                                            <div className="vehicleInventoryImgTopRate">
                                                                <div>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <center>
                                                                <img src={addCourseVehical2} alt="addCourseVehical2" />
                                                            </center>
                                                            <div className="vehicleInventoryPictureWaterPrints">
                                                                <div className="waterPrintsGreen">LType G</div>
                                                                <div className="waterPrintsGreen">VType L</div>
                                                            </div>
                                                        </div>
                                                        <div className="vehicleInventoryContent">
                                                            <h6>Automotive Course</h6>
                                                            <p>Class G. Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600 kilograms</p>
                                                        </div>
                                                        <center>
                                                            <button className="vehicalSelectBtn">
                                                                Select Course
                                                            </button>
                                                        </center>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="vehicalBox addCourseFIrstVehicalBox">
                                                        <div className="vehicalImgConainer">
                                                            <div className="vehicleInventoryImgTopRate">
                                                                <div>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <center>
                                                                <img src={addCourseVehical4} alt="addCourseVehical4" />
                                                            </center>
                                                            <div className="vehicleInventoryPictureWaterPrints">
                                                                <div className="waterPrintsGreen">LType G</div>
                                                                <div className="waterPrintsGreen">VType L</div>
                                                            </div>
                                                        </div>
                                                        <div className="vehicleInventoryContent">
                                                            <h6>Automotive Course</h6>
                                                            <p>Class G. Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600 kilograms</p>
                                                        </div>
                                                        <center>
                                                            <button className="vehicalSelectBtn">
                                                                Select Course
                                                            </button>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 vehicleInventorySearch" id="vehicleInventorySearch">
                                    <div className="filterForMobileVehicleInventory" onClick={() => {
                                        if (this.state.filterForMobile === "" || this.state.filterForMobile === "close") {
                                            this.addOrRemoveClassFilterMobile("open")
                                        } else if (this.state.filterForMobile === "open") {
                                            this.addOrRemoveClassFilterMobile("close")
                                        }
                                    }}>
                                        <h6>Filter</h6>
                                        <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                                    </div>
                                    <div className="filterAddCOurse1" id="filterAddCOurse1">
                                        <h5>Filter Vehicle</h5>
                                        <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                                        <div className="filterVehicleDiv">
                                            <p>Type L</p>
                                            <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                                        </div>
                                        <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                                        <div className="filterVehicleDiv">
                                            <p>Type L</p>
                                            <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                                        </div>
                                        <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                                        <div className="filterVehicleDiv">
                                            <p>Type L</p>
                                            <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                                        </div>
                                        <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                                        <div className="filterVehicleDiv">
                                            <p>Type L</p>
                                            <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                                        </div>

                                        <div className="filterButtonDiv" onClick={() => {
                                            this.addOrRemoveClassFilterMobile("close")
                                        }}>
                                            <img src={addCourseFilterSearch} alt="addCourseFilterSearch" />
                                            <p>Apply Filters</p>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="filterAddCOurse1 noteFromAdminFilter" id="filterAddCOurse1">
                                        <h5 style={{ fontSize: '15px' }}>Note from admin</h5>
                                        <img src={noteFromAdminFIlter} style={{ width: '7px', height: '15px', marginTop: '2px' }} alt="noteFromAdminFIlter" />
                                    </div>
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
