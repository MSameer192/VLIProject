import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetEnrolledCourses } from '../../Actions/CourseA'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import MyCourses from '../../Components/MyCourses/MyCourses'
import NoDataResponse from '../../Components/NoDataResponse'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import useScrollToTop from '../../Helpers/CustomHooks/ScrollToTop'
import { MyCoursesButtonsInfo } from '../../PageNames'
import EnrolledCourseInfo from './Component/EnrolledCourseInfo/EnrolledCourseInfo'

import Ponits from './Component/Ponits'

const EnrolledCoursesChild = () => {

    const Dispatch = useDispatch()
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);
    const { EnrolledCourses, loading } = useSelector((Store) => Store.CourseReducer);


    useEffect(() => {
        if (Authenticated)
            Dispatch(GetEnrolledCourses())
    }, [Dispatch, Authenticated])
    useCheckLogin(true, ["Student"]);

    useScrollToTop()

    return (
        <div className='flex flex-col items-center gap-10 '>
            {
                !loading ?

                    <div className='flex flex-col w-11/12 2xl:w-4/5'>
                        {
                            EnrolledCourses?.length > 0 ?
                                EnrolledCourses?.map((Course) =>
                                    <EnrolledCourseInfo key={Course.EnrollmentId} Course={Course} />)

                                : <NoDataResponse topText="You are not enrolled in any courses." />
                        }
                    </div>
                    : <LoadingSpinner Height="screen" Width="screen" Position="fixed" Top="20" Bg="white" />
            }
            <Ponits />
        </div>
    )
}

const EnrolledCourses = () => <MyCourses ButtonsInfo={MyCoursesButtonsInfo} PageName="EnrolledCourses" Component={EnrolledCoursesChild} />


export default EnrolledCourses