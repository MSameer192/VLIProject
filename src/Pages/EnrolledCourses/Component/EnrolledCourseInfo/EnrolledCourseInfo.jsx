import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import EnrolledCourseDetails from './Components/EnrolledCourseDetails'
import EnrolledCourseHrs from './Components/EnrolledCourseHrs';


const EnrolledCourseInfo = ({ Course }) => {
    const { UserInfo } = useSelector((Store) => Store.LoginSignupReducer)

    return (
        <div className={`flex  border-[#D6D6D6] border-[1px] border-solid py-7 mt-28 gap-8 items-center
                        px-5            md:px-10  bg-white
                        flex-col        lg:flex-row
                        `}
        >

            <div className='flex gap-5 flex-col xl:flex-row justify-around items-center w-full'>

                <EnrolledCourseDetails InstituteCourse={Course?.CoursePackage?.InstituteCourse} />
                <EnrolledCourseHrs CoursePackage={Course?.CoursePackage} />
            </div>


            <hr className='w-3/5 lg:w-0  h-0 lg:min-h-[150px] ' />
            <span className="flex flex-col items-center justify-center gap-3">
                <Link
                    to={`/enrolledcourse/coursemodule/${Course?.EnrollmentId}`}
                    className={`no-underline whitespace-nowrap bg-[#A1A3EF] text-white border-none rounded-xl py-3 cursor-pointer
                            px-5        md:px-6     xl:px-8
                            text-3xs    md:text-xs 
                        `}>
                    Go To Course
                </Link>
                {
                    UserInfo?.User === "Institute"
                        ? <Link
                            to={`/enrolledcourse/coursemodule/${Course?.EnrollmentId}`}
                            className={`no-underline whitespace-nowrap bg-[#EE1B1B] text-white border-none rounded-xl py-3 cursor-pointer
                            px-5        md:px-6     xl:px-8
                            text-3xs    md:text-xs 
                        `}>
                            Subscription Status
                        </Link>
                        : null
                }


            </span>
        </div>
    )
}


export default EnrolledCourseInfo