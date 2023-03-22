import React, { useState } from "react";
import Graphs from "./dashboard 0.1/Graphs";
import RecentCourses from "./Components/RecentCourses/RecentCourses";
import GeographyGraph from "./dashboard 0.2/GeographyGraph";
import TopCards from "./Components/TopCards/TopCards";
import Popups from "./Components/Popups/Popups";
import { GetLocalStorage } from "../../../Helpers/LocalStorage/LocalStorage";
import DashBoardAdminCourses from "../Admin/AdminCourses";

function InsStaffAdminDashboard() {
  const [Edit, setEdit] = useState();
  const [InstituteCourseId, setInstituteCourseId] = useState();
  return (
    <div className="w-full pl-5 pr-20 relative">
      {
        GetLocalStorage("UserInfo").InstituteUserType === "Admin" && Edit
          ? <Popups setEdit={setEdit} Edit={Edit} InstituteCourseId={InstituteCourseId} />
          : null
      }

      <TopCards />
      <div className="my-3 w-full">
        <Graphs />





        {
          GetLocalStorage("UserInfo").InstituteUserType === "Admin" ?
            <div className="flex gap-5 my-[34px] w-full justify-between">
              <div className="w-4/5">

                <RecentCourses setEdit={setEdit} setInstituteCourseId={setInstituteCourseId} />

              </div>
              <div className="flex flex-col">
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
