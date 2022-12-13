import './App.css';
import Header from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginAndRegister from './Pages/LoginAndRegister/LoginAndRegister';
import { useState } from 'react';
import CourseInstitute from './Pages/CourseInstitute/CourseInstitute';
import CategoryGLicense from './Pages/CategoryGLicense/CategoryGLicense';
import CourseEnrollment from './Pages/CourseEnrollment/CourseEnrollment';
import MyCourses from './Components/MyCourses/MyCourses';
import WishList from './Pages/WishList/WishList';
import EnrolledCourses from './Pages/EnrolledCourses/EnrolledCourses';
import SingleEnrolledCourse from './Pages/SingleEnrolledCourse/SingleEnrolledCourse';
import CourseProgress from './Pages/CourseProgress/CourseProgress';


function App() {
  const [AuthPageName, setAuthPageName] = useState("")
  let PageInfo = {
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
  }
  let EnrolledCoursePageInfo = {
    Heading: "Automotive Course",
    ButtonsInfo: [
      {
        Link: '/mycourses/enrolledcourse/:EnrolledCourseId/CourseModule',
        Id: "CourseModule",
        Text: "Course Module"
      },
      {
        Link: '/mycourses/:EnrolledCourseId/UpcomingClasses',
        Id: "UpcomingClasses",
        Text: "Upcoming Classes"
      },
      {
        Link: '/mycourses/:EnrolledCourseId/CourseProgress',
        Id: 'CourseProgress',
        Text: "Course Progress"
      },
    ]
  }

  return (
    <>
      <BrowserRouter>
        <Header AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
        {AuthPageName !== "" ? <LoginAndRegister AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} /> : null}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/course/:CoursePackagePK' element={<CourseInstitute />} />
          <Route path='/category/G' element={<CategoryGLicense />} />
          <Route path='/CourseEnrollment' element={<CourseEnrollment />} />

          <Route path='/Wishlist' element={<WishList />} />


          <Route path='/mycourses/enrolledcourses'
            element={<MyCourses PageInfo={PageInfo} Component={<EnrolledCourses />} />} />
          <Route path='/mycourses/Wishlist'
            element={<MyCourses PageInfo={PageInfo} Component={<WishList />} />} />

          <Route path='/mycourses/enrolledcourse/:EnrolledCourseId/progress'
            element={<MyCourses PageInfo={PageInfo} Component={<CourseProgress />} />} />

          <Route path='/mycourses/enrolledcourse/:EnrolledCourseId/CourseModule'
            element={<MyCourses PageInfo={EnrolledCoursePageInfo} Component={<SingleEnrolledCourse />} />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
