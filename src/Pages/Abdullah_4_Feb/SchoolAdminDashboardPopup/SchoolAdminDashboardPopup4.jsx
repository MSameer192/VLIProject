// react States
import React, { Component } from "react";
// import { Link } from "react-router-dom";

// Images
import congratAddVehicleFive from "./Assets/congratAddVehicleFive.png";
import SchoolAdminDashboardPopupCrossRed from "./Assets/SchoolAdminDashboardPopupCrossRed.png";
import schoolAdminDashPopup from "./Assets/schoolAdminDashPopup.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// components
// import HeaderNav from '../../components/HeaderNav.jsx';

// css
import "./SchoolAdminDashboardPopup.css";
import "../../AddCourse/Components/Instructors Selection/Instructors Selection.css";
// import axios from "axios";
class InstructorSelection extends Component {
    render() {
        return (
            <div className="addCoursePage5Container" style={{ width: '100%' }}>
                <div className="addCourseFivePopup schoolAdminDashPopup2 schoolAdminDashPopup3 schoolAdminDashPopup4">
                    <div className="navaddCourseFivePopup">
                        <div className="addCourseFivePopupCross">
                            <img src={SchoolAdminDashboardPopupCrossRed} alt="SchoolAdminDashboardPopupCrossRed" />
                        </div>
                        <h6>Provide a note for Staff</h6>
                    </div>
                    <textarea className="adminDashboardPopup2texterea" placeholder="1) Discount of 30 %&#10;2) Provide an 2 Installment for this course&#10;3) Course fee should be 450 $ max for full course.
"></textarea>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}

export default InstructorSelection;
