import './App.css';
import Header from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginAndRegister from './Pages/LoginAndRegister/LoginAndRegister';
import { useEffect, useState } from 'react';
import CourseOverview from './Pages/CourseOverview/CourseOverview';
import CourseCategory from './Pages/CourseCategory/CourseCategory';
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
import AddVehicle from './Pages/Institute/AddVehicle/AddVehicle';
import VehicleInventory from './Pages/VehicleInventory/VehicleInventory';
import InstituteDashboard from './Pages/InstituteDashboard/InstituteDashboard';
import { GetLocalStorage } from './Helpers/LocalStorage/LocalStorage';
import SideBar from './Components/SideBar/SideBar';
import UpdateVehicle from './Pages/Institute/AddVehicle/UpdatedVehicle';
import AddCourse from './Pages/AddCourse/AddCourse';
import { useSetLoginInfo } from './Helpers/CustomHooks/CheckLogin'
import { EnrolledCourseButtonsInfo, InsEnrolledCourseButtons, MyCoursesButtonsInfo } from './PageNames';
import EnrolledCourseIns from './Pages/Institute/EnrolledCourse By Student (For Institute)/EnrolledCourseIns';
import AddInstructor from './Pages/Institute/AddInstructor/AddInstructor';
import AboutClient from './Pages/Institute/CourseProgress (Institute)/AboutClient';
import PaymentSettings from './Pages/Payment Settings/PaymentSettings';
import ManageNewStudent from './Pages/Institute/ManageNewStudent/ManageNewStudent';
import AddCourseAdmin from './Pages/Admin/Add Course (VLI Admin)/AddCourseAdmin';
import AddBookAdmin from './Pages/Admin/Add Book (VLI Admin)/AddBookAdmin';
import EbookList from './Pages/Admin/E-Book list/EbookList';
import InstructorsList from './Pages/Institute/Instructors/Instructors';
import StudentsList from './Pages/Institute/StudentsList/StudentsList';
import ManageStatusChild from './Pages/table/ManageStatus'
import TeacherTimetable from './Pages/Institute/TeacherTimeTable/TeacherTimeTable';
import CourseProgressInstructor from './Pages/Institute/CourseProgress for(Instructor)/CourseProgress_Instructor';
import TeacherAboutStudent from './Pages/Institute/AboutStudent (For Teacher)/TeacgerAboutStudent';
import CourseModule from './Pages/Institute/CourseModule (For Teacher)/CourseModule';
import ClassesSchedule from './Pages/ClassesSchedule (For Student)/ClassesSchedule';
import Sales from './Pages/Institute/Sales/Sales';
import RecommendCourse from './Pages/Institute/RecommendCourse/RecommendCourse';
import UpdateInstructor from './Pages/Institute/AddInstructor/UpdateInstructor';
import RecommendedCoursesByAdmin from './Pages/Institute/RecommendedCoursesByAdmin/RecommendedCoursesByAdmin';
import { BaseUrl } from './Actions/Base';



export const SocketContext = createContext();

function App() {
  const [setAuthPageName] = useState("");
  const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)
  const [Socket, setSocket] = useState(undefined);
  const { UserInfo } = useSelector((store) => store.LoginSignupReducer);

  const UserType = GetLocalStorage("UserInfo")?.User
  const InstituteUserType = GetLocalStorage("UserInfo")?.InstituteUserType

  useSetSocket(Socket)
  useSaveSocketUser(Socket)
  useEffect(() => {
    if (!UserType || UserType === "Student")
      setSocket(io(`${BaseUrl}/`))

    else if (UserType === "Institute" && InstituteUserType)
      setSocket(io(`${BaseUrl}/${UserType.toLowerCase()}/${InstituteUserType.toLowerCase()}`))

    else if (UserType !== "Student")
      setSocket(io(`${BaseUrl}/${UserType.toLowerCase()}`))

  }, [UserType, InstituteUserType])


  useSetLoginInfo()



  const Home = !GetLocalStorage("UserInfo")?.User || UserInfo?.User === "Student"
    ? <LandingPage /> :
    GetLocalStorage("UserInfo")?.User === "Institute" || GetLocalStorage("UserInfo")?.User === "Admin" ?
      <InstituteDashboard /> : null

  return (
    <SocketContext.Provider value={Socket}>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {(GetLocalStorage("UserInfo")?.User === "Institute" && GetLocalStorage("UserInfo")?.InstituteUserType !== "Instructor")
          || GetLocalStorage("UserInfo")?.User === "Admin" ? <SideBar /> : null}

        {AuthPageName !== "" ? <LoginAndRegister /> : null}

        <Routes>
          <Route path='/' element={Home} />
          <Route path='/course/:InstituteCourseId' element={<CourseOverview />} />
          <Route path='/license/category/:LicenseTypeId' element={<CourseCategory />} />
          <Route path='/vehicle/category/:VehicleTypeId' element={<CourseCategory />} />
          <Route path='/Enrollment/Course' element={<CourseEnrollment />} />

          <Route path='/Wishlist' element={<WishList />} />


          <Route path='/mycourses/enrolledcourses'
            element={<EnrolledCourses />} />
          <Route path='/mycourses/Wishlist'
            element={<MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="Wishlist" Component={WishList} />} />

          <Route path='/enrolledcourse/progress/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseProgress" Component={CourseProgress} />} />

          <Route path='/enrolledcourse/coursemodule/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseModule" Component={SEnrolledCourse} />} />


          <Route path='/AddCourse' element={<AddCourse />} />
          <Route path='/Instructors/list' element={<InstructorsList />} />
          <Route path='/Instructor/add' element={<AddInstructor />} />
          <Route path='/Instructor/update/:InstructorId' element={<UpdateInstructor />} />


          <Route path='/vehicle/add' element={<AddVehicle />} />
          <Route path='/vehicle/update/:VehicleId' element={<UpdateVehicle />} />
          <Route path='/vehicle/inventory' element={<VehicleInventory />} />
          <Route path='/students/list' element={<StudentsList />} />

          <Route path='/enrolledcourse/:EnrollmentId' element={<EnrolledCourseIns />} />
          <Route path='/Admin/sales' element={<Sales />} />

          <Route path='/enrolledcourse/AboutClient/:EnrollmentId' element={<AboutClient />} />
          <Route path='/Admin/course/recommend' element={<RecommendCourse />} />
          <Route path='/courses/recommended' element={<RecommendedCoursesByAdmin />} />

          <Route path='/enrolledcourse/PaymentSetting/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="PaymentSetting" Component={PaymentSettings} />} />

          <Route path='/enrolledcourse/upcomingclasses/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="UpcomingClasses" Component={ClassesSchedule} />} />


          <Route path='/enrolledcourse/manage/:EnrollmentId'
            element={<MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="PaymentSetting" Component={ManageNewStudent} />} />



          <Route path='/teacher/CourseModule/:EnrollmentId' element={<CourseModule />} />

          <Route path='/teacher/UpcomingClasses' element={<TeacherTimetable />} />
          <Route path='/teacher/CourseProgress/:EnrollmentId' element={<CourseProgressInstructor />} />
          <Route path='/teacher/AboutStudent/:EnrollmentId' element={<TeacherAboutStudent />} />

          <Route path='/admin/adadcourse' element={<ManageStatusChild />} />
          <Route path='/admin/addcourse' element={<AddCourseAdmin />} />
          <Route path='/admin/Book/add' element={<AddBookAdmin />} />
          <Route path='/admin/books/list' element={<EbookList />} />
        </Routes>

      </BrowserRouter>

    </SocketContext.Provider>
  );
}

export default App;
