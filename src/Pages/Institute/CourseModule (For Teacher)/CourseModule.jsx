import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleEnrolledCourse } from '../../../Actions/CourseA';
import MyCourses from '../../../Components/MyCourses/MyCourses';
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin';
import { TeacherButtons } from '../../../PageNames';
import SEnrolledCourseInfo from '../../SingleEnrolledCourse/Components/EnrolledCourseInfo/EnrolledCourseInfo';



const CourseModuleChild = ({ setName }) => {
    const { EnrollmentId } = useParams()
    const Dispatch = useDispatch()
    const { SEnrolledCourse } = useSelector((Store) => Store.CourseReducer);
    const { Authenticated, UserInfo } = useSelector((Store) => Store.LoginSignupReducer)

    useEffect(() => {
        if (EnrollmentId && Authenticated && UserInfo.User === "Institute")
            Dispatch(GetSingleEnrolledCourse(EnrollmentId))
    }, [Dispatch, EnrollmentId, Authenticated, UserInfo])
    useCheckLogin(true, ["Institute"], ["Instructor"])

    useEffect(() => {
        if (SEnrolledCourse?.CoursePackage?.InstituteCourse?.Course?.CourseName)
            setName(SEnrolledCourse?.CoursePackage?.InstituteCourse?.Course?.CourseName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SEnrolledCourse])

    return (
        <div className='mt-20 flex flex-col items-center'>
            <SEnrolledCourseInfo SEnrolledCourse={SEnrolledCourse} />
        </div>
    )
}

const CourseModule = () => {
    
    return <MyCourses ButtonsInfo={TeacherButtons} PageName="CourseModule"
        Component={CourseModuleChild} HideFooter={true} />
}


export default CourseModule