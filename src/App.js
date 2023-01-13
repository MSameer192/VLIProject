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
import SingleEnrolledCourse from './Pages/SingleEnrolledCourse/SingleEnrolledCourse';
import CourseProgress from './Pages/CourseProgress/CourseProgress';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client'
import useSetSocket, { useSaveSocketUser } from './Helpers/CustomHooks/useSetSocket';

import { createContext } from 'react';


export const SocketContext = createContext();

function App() {
  const [setAuthPageName] = useState("");
  const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)

  const [Socket, setSocket] = useState(undefined);
  // SocketContext=useContext(Socket );

  useSetSocket(Socket)
  useSaveSocketUser(Socket)
  useEffect(() => {
    setSocket(io('/'))
  }, [])



  let MyCoursesButtonsInfo = {
    Heading: "My Course",
    ButtonsInfo: [
      {
        Link: '/mycourses/enrolledcourses',
        Id: "EnrolledCourses",
        Text: "Enrolled Courses"
      },
      {
        Link: '/mycourses/Wishlist',
        Id: "Wishlist",
        Text: "My Wishlist"
      },
      {
        Link: '/mycourses/completed',
        Id: 'completed',
        Text: "Completed Courses"
      },
    ]
  };


  let EnrolledCourseButtonsInfo = {
    Heading: "Automotive Course",
    ButtonsInfo: [
      {
        Link: '/enrolledcourse/coursemodule',
        Id: "CourseModule",
        Text: "Course Module"
      },
      {
        Link: '/enrolledcourse/upcomingclasses',
        Id: "UpcomingClasses",
        Text: "Upcoming Classes"
      },
      {
        Link: '/enrolledcourse/progress',
        Id: 'CourseProgress',
        Text: "Course Progress"
      },
    ]
  }

  return (
    <SocketContext.Provider value={Socket}>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />

        {AuthPageName !== "" ? <LoginAndRegister /> : null}

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/course/:InstituteCourseId' element={<CourseOverview />} />
          <Route path='/category/:LicenseTypeId' element={<CategoryGLicense />} />
          <Route path='/Enrollment/Course' element={<CourseEnrollment />} />

          <Route path='/Wishlist' element={<WishList />} />


          <Route path='/mycourses/enrolledcourses'
            element={<MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="EnrolledCourses"  Component={<EnrolledCourses />} />} />
          <Route path='/mycourses/Wishlist'
            element={<MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="Wishlist" Component={<WishList />} />} />

          <Route path='/enrolledcourse/progress/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseProgress" Component={<CourseProgress />} />} />

          <Route path='/enrolledcourse/coursemodule/:EnrollmentId'
            element={<MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="CourseModule" Component={<SingleEnrolledCourse />} />} />

        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
