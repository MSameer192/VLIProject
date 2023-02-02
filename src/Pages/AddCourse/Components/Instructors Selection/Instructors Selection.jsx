// react States
import React, { Component } from "react";
// import { Link } from "react-router-dom";

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
import addCourse4FilterDropdown from "../../Images/addCourse2/addCourse4FilterDropdown.png";
import instructor1 from "../../Images/addCourse4/instructor1.png";
import progressLine from "../../Images/addCourse1/progressLine.png";
import congratAddVehicleFive from "../../Images/addCourse1/congratAddVehicleFive.png";
import addCoursePage5CrossPopup from "../../Images/addCourse1/addCoursePage5CrossPopup.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
import ".Instructors Selection.css";
// import axios from "axios";
class InstructorSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainContainerAddCoursePageFive: false
        };
    }
    async componentWillMount() {
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
                                <div className="addCourse4Heading">
                                    <h4>Instuctors</h4>
                                    <div className="FilterInstructorDiv">
                                        <p>Filter Instructor <span><img src={addCourse4FilterDropdown} alt="addCourse4FilterDropdown" /></span></p>
                                    </div>
                                </div>
                                <div className="addCOurse4Table">
                                    <table className="addCourse4Table">
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Status</th>
                                                <th>Joining Date</th>
                                                <th>Under Training Clients</th>
                                                <th>Total Classes</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Jim Halpert</td>
                                                <td>miles@gmail.com</td>
                                                <td><div className="addCourse4Status">Nex Class in 23:02</div></td>
                                                <td>08/08/2022</td>
                                                <td><div className="addCourse4Status">3</div></td>
                                                <td>12/15</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Pam Beesly</td>
                                                <td>barber@yahoo.com</td>
                                                <td><div className="addCourse4Status backgroudColorRed">In Class</div></td>
                                                <td>26/08/2021</td>
                                                <td><div className="addCourse4Status backgroudColorPurple">Free</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status backgroudColorPurple">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status backgroudColorRed">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status backgroudColorRed">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status backgroudColorPurple">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td><img className="addCourseinstructorImg" src={instructor1} alt="instructor1" /></td>
                                                <td>Michael Scott</td>
                                                <td>marshall@yahoo.com</td>
                                                <td><div className="addCourse4Status">In Class</div></td>
                                                <td>07/09/2022</td>
                                                <td><div className="addCourse4Status">2</div></td>
                                                <td>04/10</td>
                                                <td>  <input type="checkbox" className="addCourse4CheckBox" id="" name="" value="" /></td>
                                            </tr>
                                        </tbody>
                                    </ table>
                                </div>

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
