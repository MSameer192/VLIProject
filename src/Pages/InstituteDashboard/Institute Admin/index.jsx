import React, { useState } from "react";
import Graphs from "./dashboard 0.1/Graphs";
import RecentCourses from "./Components/RecentCourses/RecentCourses";
import GeographyGraph from "./dashboard 0.2/GeographyGraph";
import TopCards from "./Components/TopCards/TopCards";
import Popups from "./Components/Popups/Popups";
import { GetLocalStorage } from "../../../Helpers/LocalStorage/LocalStorage";
import DashBoardAdminCourses from "../Admin/AdminCourses";
import './InsStaffAdminDashboard.css'
function InsStaffAdminDashboard() {
  const [Edit, setEdit] = useState();
  const [InstituteCourseId, setInstituteCourseId] = useState();
  return (
    <div className="InsDashboardContainer">
      {
        GetLocalStorage("UserInfo").InstituteUserType === "Admin" && Edit
          ? <Popups setEdit={setEdit} Edit={Edit} InstituteCourseId={InstituteCourseId} />
          : null
      }

      <TopCards />
      <div className="my-3 w-full">
        <Graphs />




        {
          GetLocalStorage("UserInfo").InstituteUserType === "Admin" ||
            GetLocalStorage("UserInfo").InstituteUserType === "Staff" ?
            <div className="CoursesGraphContainer">
              <div className="w-full 3xl:w-4/5">
                <RecentCourses setEdit={setEdit} setInstituteCourseId={setInstituteCourseId} />
              </div>
              <div className="flex flex-col items-end px-16">
                <GeographyGraph />
                <div>

                </div>
              </div>
            </div>
            : GetLocalStorage("UserInfo").User === "Admin" ?
              <DashBoardAdminCourses />
              : null
        }
      </div>
    </div>
  );
}

export default InsStaffAdminDashboard;
