import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetSEnrolledCourse_ForInsA } from '../../../Actions/CourseA'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import MyCourses from '../../../Components/MyCourses/MyCourses'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import { InsEnrolledCourseButtons } from '../../../PageNames'
import EnrolledCourseInfo from '../../EnrolledCourses/Component/EnrolledCourseInfo/EnrolledCourseInfo'
import SEnrolledCourseInfo from '../../SingleEnrolledCourse/Components/EnrolledCourseInfo/EnrolledCourseInfo'
import CourseSubscription from './SubscriptionStatus/CourseSubscription'


const EnrolledCourseInsChild = () => {
    const [ShowSubscription, setShowSubscription] = useState()
    const { SEnrolledCourse } = useSelector(Store => Store.CourseReducer);
    const { EnrollmentId } = useParams();
    const Dispatch = useDispatch();


    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetSEnrolledCourse_ForInsA(EnrollmentId))
    }, [Dispatch, EnrollmentId])

    useCheckLogin(true, ["Institute"], ["Staff", "Admin"]);
    return (
        <div className='flex flex-col items-center gap-24 relative'>
            {ShowSubscription ? <CourseSubscription setShowSubscription={setShowSubscription} /> : null}
            <div className='flex flex-col w-11/12 2xl:w-4/5'>
                <EnrolledCourseInfo Course={SEnrolledCourse} setShowSubscription={setShowSubscription} />
            </div>
            <div className='flex items-center justify-center'>
                <SEnrolledCourseInfo SEnrolledCourse={SEnrolledCourse} />
            </div>
        </div>
    )
}


const EnrolledCourseInsPage = () =>
    <MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="EnrolledCourse" Component={EnrolledCourseInsChild} />

const EnrolledCourseIns = () => {

    return (<InstituteTemplate Element={EnrolledCourseInsPage} />)
}


export default EnrolledCourseIns