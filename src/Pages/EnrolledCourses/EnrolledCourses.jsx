import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetEnrolledCourses } from '../../Actions/CourseA'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import EnrolledCourseInfo from './Component/EnrolledCourseInfo/EnrolledCourseInfo'
 
import Ponits from './Component/Ponits'

const EnrolledCourses = () => {

    const Dispatch = useDispatch()
    useCheckLogin(false, ["Student", "Institute"]);
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);

    const { EnrolledCourses } = useSelector((Store) => Store.CourseReducer);

    useEffect(() => {
        if (Authenticated)
            Dispatch(GetEnrolledCourses())
    }, [Dispatch, Authenticated])

    return (
        <div className='flex flex-col items-center gap-10 '>

            <div className='flex flex-col w-11/12 2xl:w-4/5'>
                {
                    EnrolledCourses?.map((Course) =>
                        <EnrolledCourseInfo key={Course.EnrollmentId} Course={Course} />
                    )
                }
            </div>

            <Ponits />
        </div>
    )
}

export default EnrolledCourses