// react States
import React, { Component } from "react";

// Images
import dashboardHome from "./CourseSelection/Assets/dashboardHome.svg";
import dashboardInbox from "./CourseSelection/Assets/dashboardInbox.svg";
import dashboardInvoices from "./CourseSelection/Assets/dashboardInvoices.svg";
import dashboardCar from "./CourseSelection/Assets/dashboardCar.svg";
import dashboardCustomers from "./CourseSelection/Assets/dashboardCustomers.svg";
import dashboardDashboard from "./CourseSelection/Assets/dashboardDashboard.svg";
import dashboardSettings from "./CourseSelection/Assets/dashboardSettings.svg";


// css
import './CourseSelection/CourseSelection.css';

class AddCoursedashboardTabs extends Component {
    render() {
        return (
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
        )
    }
}
export default AddCoursedashboardTabs;
