import './App.css';
import Header from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginAndRegister from './Pages/LoginAndRegister/LoginAndRegister';
import { useEffect, useState } from 'react';
import CourseOverview from './Pages/CourseOverview/CourseOverview';
import CategoryGLicense from './Pages/CategoryGLicense/CategoryGLicense';
import CourseEnrollment from './Pages/CourseEnrollment/CourseEnrollment';
import MyCourses from './Components/MyCourses/MyCourses';
import WishList from './Pages/WishList/WishList';
import EnrolledCourses from './Pages/EnrolledCourses/EnrolledCourses';
import SEnrolledCourse from './Pages/SingleEnrolledCourse/SingleEnrolledCourse';
import CourseProgress from './Pages/CourseProgress/CourseProgress';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client'
import useSetSocket, { useSaveSocketUser } from './Helpers/CustomHooks/useSetSocket';
import { createContext } from 'react';
import AddVehicle from './Pages/AddVehicle/AddVehicle';
import VehicleInventory from './Pages/VehicleInventory/VehicleInventory';
import InstituteDashboard from './Pages/InstituteDashboard/InstituteDashboard';
import { GetLocalStorage } from './Helpers/LocalStorage/LocalStorage';
import SideBar from './Components/SideBar/SideBar';
import UpdateVehicle from './Pages/AddVehicle/UpdatedVehicle';
import AddCourse from './Pages/AddCourse 3/AddCourse';
import { useSetLoginInfo } from './Helpers/CustomHooks/CheckLogin'
import { EnrolledCourseButtonsInfo, InsEnrolledCourseButtons, MyCoursesButtonsInfo } from './PageNames';
import EnrolledCourseIns from './Pages/EnrolledCourse By Student (For Institute)/EnrolledCourseIns';
import AddInstructor from './Pages/AddInstructor/AddInstructor';
import AboutClient from './Pages/CourseProgress (Institute)/AboutClient';
import PaymentSettings from './Pages/Payment Settings/PaymentSettings';
import AssignInstructor from './Pages/Assign Instructor/AssignInstructor';
import Scheduler from './Pages/Scheduler/Scheduler';
import AddCourseAdmin from './Pages/Admin/Add Course (VLI Admin)/AddCourseAdmin';
import AddBookAdmin from './Pages/Admin/Add Book (VLI Admin)/AddBookAdmin';
import EbookList from './Pages/Admin/E-Book list/EbookList';
export const SocketContext = createContext();

function App() {
  const [setAuthPageName] = useState("");
  const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)

  const [Socket, setSocket] = useState(undefined);
  const { UserInfo } = useSelector((store) => store.LoginSignupReducer);

  useSetSocket(Socket)
  useSaveSocketUser(Socket)
  useEffect(() => {
    setSocket(io('/'))
  }, [])


  useSetLoginInfo()
  const Home = !GetLocalStorage("UserInfo")?.User || UserInfo?.User === "Student"
    ? <LandingPage /> :
    GetLocalStorage("UserInfo")?.User === "Institute" || GetLocalStorage("UserInfo")?.User === "Admin" ?
      <InstituteDashboard /> : null


  return (
    <SocketContext.Provider value={Socket}>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {GetLocalStorage("UserInfo")?.User === "Institute" || GetLocalStorage("UserInfo")?.User === "Admin" ? <SideBar /> : null}
        
        {AuthPageName !== "" ? <LoginAndRegister /> : null}

        <Routes>
          <Route path='/' element={Home} />
          <Route path='/course/:InstituteCourseId' element={<CourseOverview />} />
          <Route path='/category/:LicenseTypeId' element={<CategoryGLicense />} />
          <Route path='/Enrollment/Course' element={<CourseEnrollment />} />

          <Route path='/Wishlist' element={<WishList />} />


          <Route path='/mycourses/enrolledcourses'
            element={<MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="EnrolledCourses" Component={<EnrolledCourses />} />} />
          <Route path='/mycourses/Wishlist'
            element={<MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="Wishlist" Component={<WishList />} />} />

          <Route path='/enrolledcourse/progress/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseProgress" Component={<CourseProgress />} />} />

          <Route path='/enrolledcourse/coursemodule/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseModule" Component={<SEnrolledCourse />} />} />


          <Route path='/AddCourse' element={<AddCourse />} />
          <Route path='/vehicle/add' element={<AddVehicle />} />
          <Route path='/vehicle/update/:VehicleId' element={<UpdateVehicle />} />
          <Route path='/vehicle/inventory' element={<VehicleInventory />} />
          <Route path='/Instructor/add' element={<AddInstructor />} />

          <Route path='/Schedule' element={<Scheduler />} />
          <Route path='/enrolledcourse/EnrolledCourse/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="EnrolledCourse" Component={<EnrolledCourseIns />} />} />
          <Route path='/enrolledcourse/AboutClient/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="AboutClient" Component={<AboutClient />} />} />
          <Route path='/enrolledcourse/PaymentSetting/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="PaymentSetting" Component={<PaymentSettings />} />} />


          <Route path='/enrolledcourse/aaa/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="PaymentSetting" Component={<AssignInstructor />} />} />

          <Route path='/admin/addcourse' element={<AddCourseAdmin />} />
          <Route path='/admin/Book/add' element={<AddBookAdmin />} />
          <Route path='/admin/books/list' element={<EbookList />} />
        </Routes>

      </BrowserRouter>

    </SocketContext.Provider>
  );
}

export default App;
