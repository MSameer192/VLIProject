// react States
import React, { Component } from "react";
// import { Link } from "react-router-dom";

// Images
import congratAddVehicleFive from "./Assets/congratAddVehicleFive.png";
import addCoursePage5CrossPopup from "./Assets/addCoursePage5CrossPopup.png";
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
            // <div className="addCoursePage5Container" style={{width: '100%'}}>
            //     <div className="addCourseFivePopup">
            //         <div className="addCourseFivePopupCross">
            //             <img src={addCoursePage5CrossPopup} alt="" />
            //         </div>
            //         <h6>Congratulations !!</h6>
            //         <p>Course has been added to the Queue Waiting for InstructorSelectionroval</p>
            //         <div className="addCourseFivePopupVehicle">
            //             <img src={congratAddVehicleFive} alt="congratAddVehicleFive" />
            //         </div>
            //         <button>Done</button>
            //     </div>
            // </div>

            <div className="addCoursePage5Container" style={{ width: '100%' }}>
                <div className="addCourseFivePopup schoolAdminDashPopup2">
                    <div className="addCourseFivePopupCross">
                        <img src={addCoursePage5CrossPopup} alt="addCoursePage5CrossPopup" />
                    </div>
                    <h6>Rejection Reason</h6>
                    <p>Enter a rejection reason for the staff.</p>
                    <textarea className="adminDashboardPopup2texterea" placeholder="Vehicle Gallery need changes..."></textarea>
                    <button style={{ backgroundColor: '#f13535' }}>Reject</button>
                    <button style={{ backgroundColor: '#6cff75' }}>Approve</button>
                </div>
            </div>
        );
    }
}

export default InstructorSelection;
