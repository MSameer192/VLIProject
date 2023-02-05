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
                <div className="addCourseFivePopup schoolAdminDashPopup2 schoolAdminDashPopup3">
                <div className="navaddCourseFivePopup">
                    <div className="addCourseFivePopupCross">
                        <img src={SchoolAdminDashboardPopupCrossRed} alt="SchoolAdminDashboardPopupCrossRed" />
                    </div>
                    <h6>Rejection Reason</h6>
                    </div>
                    <p>You Can add a new course by filling the forms by your self or can forward to Staff.</p>
                    <button style={{ backgroundColor: '#f13535' }}>Forward to Stall</button>
                    <button style={{ backgroundColor: '#6cff75' }}>Fill requirements now</button>
                </div>
            </div>
        );
    }
}

export default InstructorSelection;
