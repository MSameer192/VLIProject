import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSingleEnrolledCourse } from '../../Actions/CourseA';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import SEnrolledCourseInfo from './Components/EnrolledCourseInfo/EnrolledCourseInfo';

const SEnrolledCourse = () => {
  const { EnrollmentId } = useParams()
  const Dispatch = useDispatch()
  const { SEnrolledCourse } = useSelector((Store) => Store.CourseReducer);
  const { Authenticated, UserInfo } = useSelector((Store) => Store.LoginSignupReducer)

  useEffect(() => {
    if (EnrollmentId && Authenticated && UserInfo.User === "Student")
      Dispatch(GetSingleEnrolledCourse(EnrollmentId))
  }, [Dispatch, EnrollmentId, Authenticated, UserInfo])
  useCheckLogin(true, ["Student", "Institute"], ["Admin", "Staff"])

  return (
    <div className='mt-20 flex flex-col items-center'>
      <SEnrolledCourseInfo SEnrolledCourse={SEnrolledCourse} />
    </div>
  )
}

export default SEnrolledCourse