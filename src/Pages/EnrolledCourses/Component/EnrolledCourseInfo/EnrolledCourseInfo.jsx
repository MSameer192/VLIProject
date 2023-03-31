import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import EnrolledCourseDetails from './Components/EnrolledCourseDetails'
import EnrolledCourseHrs from './Components/EnrolledCourseHrs';


const EnrolledCourseInfo = ({ Course, setShowSubscription }) => {
    const { UserInfo } = useSelector((Store) => Store.LoginSignupReducer);

    // console.log(Course)
    return (
        <div className={`flex  border-[#D6D6D6] border-[1px] border-solid py-7 mt-28 gap-8 items-center
        justify-between
                        px-5            md:px-10  bg-white
                        flex-col        lg:flex-row min-h-[205px]
                        `}
        >


            <div className='flex gap-5 flex-col xl:flex-row justify-between items-center  w-[72%]'>

                <EnrolledCourseDetails InstituteCourse={Course?.CoursePackage?.InstituteCourse} />
                <EnrolledCourseHrs CoursePackage={Course?.CoursePackage} />
            </div>

            <hr className='w-3/5 lg:w-0  h-0 lg:min-h-[150px]' />

            <span className="flex flex-col items-end justify-center gap-3 w-full sm:w-1/4">
                {UserInfo?.User === "Student" ?
                    <Link
                        to={`/enrolledcourse/coursemodule/${Course?.EnrollmentId}`}
                        className={`no-underline whitespace-nowrap bg-[#A1A3EF] text-white border-none rounded-xl py-3 cursor-pointer
                            px-5        md:px-6     xl:px-8
                            text-3xs    md:text-xs 
                        `}>
                        Go To Course
                    </Link>
                    : null
                }
                {
                    UserInfo?.User === "Institute"
                        ?
                        <>

                            <Link
                                to={`/enrolledcourse/coursemodule/${Course?.EnrollmentId}`}
                                className={`no-underline whitespace-nowrap bg-[#A1A3EF] text-white border-none rounded-xl py-3 cursor-pointer text-center
                                px-2    w-full max-w-[185px] sm:max-w-[215px]
                                text-3xs    md:text-xs 
                        `}>
                                View Calendar
                            </Link>
                            <button
                                className={`no-underline whitespace-nowrap bg-[#EE1B1B] text-white border-none rounded-xl py-3 cursor-pointer text-center
                                w-full max-w-[185px] sm:max-w-[215px]
                                px-1 
                                text-4xs    sm:text-4xs     md:text-3xs     xl:text-2xs      2xl:text-xs 
                        `}
                                onClick={() => setShowSubscription(true)}
                            >
                                Subscription Status
                            </button>
                        </>
                        : null
                }


            </span>
        </div>
    )
}


export default EnrolledCourseInfo