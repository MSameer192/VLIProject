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
import idCardIcon from "../../Images/addCourse3/idCardIcon.png";
import addCourse3HeadImg from "../../Images/addCourse3/addCourse3HeadImg.png";
import addCourseVehical1 from "../../Images/addCourse3/addCourseVehical1.png";
import addCourseVehical2 from "../../Images/addCourse3/addCourseVehical2.png";
import addCourseVehical3 from "../../Images/addCourse3/addCourseVehical3.png";
import addCourseVehical4 from "../../Images/addCourse3/addCourseVehical4.png";
import addCourseVehical5 from "../../Images/addCourse3/addCourseVehical5.png";
import addCourseVehical6 from "../../Images/addCourse3/addCourseVehical6.png";
import addCourseVehical7 from "../../Images/addCourse3/addCourseVehical7.png";
import addCourseVehical8 from "../../Images/addCourse3/addCourseVehical8.png";
import progressLine from "../../Images/addCourse1/progressLine.png";

import './Description.css'
// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
import "../../css/AddCourse3.css";
import "../../css/ownBootstrap.css";
// import axios from "axios";
class Description extends Component {
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
                                <div className="addCourse3Main">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical1} alt="addCourseVehical1" />
                                                    </center>
                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical2} alt="addCourseVehical2" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical3} alt="addCourseVehical3" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical4} alt="addCourseVehical4" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical5} alt="addCourseVehical5" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical6} alt="addCourseVehical6" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical7} alt="addCourseVehical7" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical8} alt="addCourseVehical8" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical1} alt="addCourseVehical1" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical2} alt="addCourseVehical2" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical3} alt="addCourseVehical3" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="vehicalBox">
                                                <div className="vehicalImgConainer">
                                                    <center>
                                                        <img src={addCourseVehical4} alt="addCourseVehical4" />
                                                    </center>                                                </div>
                                                <span className="vehicalDetail">
                                                    <span className="vehicalName">Euro Bike</span>
                                                    <span className="vehicalModel">2018</span>
                                                </span>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>PK 2121</span></span>
                                                </center>
                                                <hr className="vehicalHr" />
                                                <p className="discOfVehical">Disk Brakes with Dual Channel ABS.
                                                    The latest fuel injection bikes come
                                                    with better-ventilated pads and brakes</p>
                                                <hr className="vehicalHr" />
                                                <center>
                                                    <button className="vehicalSelectBtn">
                                                        Select Vehicle
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
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
