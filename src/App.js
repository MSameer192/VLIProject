import "./App.css";
import Header from "./Components/Header/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { useEffect, useState } from "react";
import CourseOverview from "./Pages/CourseOverview/CourseOverview";
import CategoryGLicense from "./Pages/CategoryGLicense/CategoryGLicense";
import CourseEnrollment from "./Pages/CourseEnrollment/CourseEnrollment";
import MyCourses from "./Components/MyCourses/MyCourses";
import WishList from "./Pages/WishList/WishList";
import EnrolledCourses from "./Pages/EnrolledCourses/EnrolledCourses";
import SEnrolledCourse from "./Pages/SingleEnrolledCourse/SingleEnrolledCourse";
import CourseProgress from "./Pages/CourseProgress/CourseProgress";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import useSetSocket, {
  useSaveSocketUser,
} from "./Helpers/CustomHooks/useSetSocket";
import { createContext } from "react";
import AddVehicle from "./Pages/AddVehicle/AddVehicle";
import VehicleInventory from "./Pages/VehicleInventory/VehicleInventory";
import InstituteDashboard from "./Pages/InstituteDashboard/InstituteDashboard";
import { GetLocalStorage } from "./Helpers/LocalStorage/LocalStorage";
import InstituteSideBar from "./Components/InstituteSideBar/InstituteSideBar";
import UpdateVehicle from "./Pages/AddVehicle/UpdatedVehicle";
import AddCourse from "./Pages/AddCourse/AddCourse";
import { useSetLoginInfo } from "./Helpers/CustomHooks/CheckLogin";
import {
  EnrolledCourseButtonsInfo,
  InsEnrolledCourseButtons,
  MyCoursesButtonsInfo,
} from "./PageNames";
import EnrolledCourseIns from "./Pages/EnrolledCourse By Student (For Institute)/EnrolledCourseIns";

/* Dummy ROutes 4 Feb Staturday*/
import DashboardCalender from "./Pages/Abdullah_4_Feb/TeacherDashboard/DashboardCalender";
import ManageStudentCarousel from "./Pages/Abdullah_4_Feb/ManageStudentCarousel/ManageStudentCarousel";
import SchoolAdminProgress from "./Pages/Abdullah_4_Feb/schoolAdminProgress/SchoolAdminProgress";
import SchoolAdminDashboardPopup from "./Pages/Abdullah_4_Feb/SchoolAdminDashboardPopup/SchoolAdminDashboardPopup";
import SchoolAdminDashboardPopup2 from "./Pages/Abdullah_4_Feb/SchoolAdminDashboardPopup/SchoolAdminDashboardPopup2";
import SchoolAdminDashboardPopup3 from "./Pages/Abdullah_4_Feb/SchoolAdminDashboardPopup/SchoolAdminDashboardPopup3";
import SchoolAdminDashboardPopup4 from "./Pages/Abdullah_4_Feb/SchoolAdminDashboardPopup/SchoolAdminDashboardPopup4";


export const SocketContext = createContext();

function App() {
  const [setAuthPageName] = useState("");
  const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer);

  const [Socket, setSocket] = useState(undefined);
  const { UserInfo } = useSelector((store) => store.LoginSignupReducer);

  useSetSocket(Socket);
  useSaveSocketUser(Socket);
  useEffect(() => {
    setSocket(io("/"));
  }, []);

  useSetLoginInfo();
  const Home =
    !GetLocalStorage("UserInfo")?.User || UserInfo?.User === "Student" ? (
      <LandingPage />
    ) : GetLocalStorage("UserInfo")?.User === "Institute" ? (
      <InstituteDashboard />
    ) : null;

  return (
    <SocketContext.Provider value={Socket}>
      <BrowserRouter>
        {/* <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {GetLocalStorage("UserInfo")?.User === "Institute" ? (
          <InstituteSideBar />
        ) : null}
        {AuthPageName !== "" ? <LoginAndRegister /> : null} */}

        <Routes>
          <Route path="/" element={Home} />
          <Route
            path="/course/:InstituteCourseId"
            element={<CourseOverview />}
          />
          <Route
            path="/category/:LicenseTypeId"
            element={<CategoryGLicense />}
          />
          <Route path="/Enrollment/Course" element={<CourseEnrollment />} />

          <Route path="/Wishlist" element={<WishList />} />

          <Route
            path="/mycourses/enrolledcourses"
            element={
              <MyCourses
                ButtonsInfo={MyCoursesButtonsInfo}
                PageName="EnrolledCourses"
                Component={<EnrolledCourses />}
              />
            }
          />
          <Route
            path="/mycourses/Wishlist"
            element={
              <MyCourses
                ButtonsInfo={MyCoursesButtonsInfo}
                PageName="Wishlist"
                Component={<WishList />}
              />
            }
          />

          <Route
            path="/enrolledcourse/progress/:EnrollmentId"
            element={
              <MyCourses
                ButtonsInfo={EnrolledCourseButtonsInfo}
                PageName="CourseProgress"
                Component={<CourseProgress />}
              />
            }
          />

          <Route
            path="/enrolledcourse/coursemodule/:EnrollmentId"
            element={
              <MyCourses
                ButtonsInfo={EnrolledCourseButtonsInfo}
                PageName="CourseModule"
                Component={<SEnrolledCourse />}
              />
            }
          />

          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/vehicle/add" element={<AddVehicle />} />
          <Route
            path="/vehicle/update/:VehicleId"
            element={<UpdateVehicle />}
          />
          <Route path="/vehicle/inventory" element={<VehicleInventory />} />
          <Route
            path="/enrolledcourse/EnrolledCourse/:EnrollmentId"
            element={
              <MyCourses
                ButtonsInfo={InsEnrolledCourseButtons}
                PageName="EnrolledCourse"
                Component={<EnrolledCourseIns />}
              />
            }
          />

          {/* Dummy ROutes 4 Feb Staturday*/}
          <Route path="/DashboardCalender" element={<DashboardCalender />} />
          <Route path="/ManageStudentCarousel" element={<ManageStudentCarousel />} />
          <Route path="/SchoolAdminProgress" element={<SchoolAdminProgress />} />
          <Route path="/SchoolAdminDashboardPopup" element={<SchoolAdminDashboardPopup />} />
          <Route path="/SchoolAdminDashboardPopup2" element={<SchoolAdminDashboardPopup2 />} />
          <Route path="/SchoolAdminDashboardPopup3" element={<SchoolAdminDashboardPopup3 />} />
          <Route path="/SchoolAdminDashboardPopup4" element={<SchoolAdminDashboardPopup4 />} />
          
          
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
