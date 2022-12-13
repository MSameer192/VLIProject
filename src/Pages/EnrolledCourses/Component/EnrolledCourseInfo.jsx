import React from 'react'
import { Link } from 'react-router-dom'
import EnrolledCourseDetails from './CourseInfoComps/EnrolledCourseDetails'
import EnrolledCourseHrs from './CourseInfoComps/EnrolledCourseHrs'

const EnrolledCourseInfo = () => {

    return (
        <div className={`flex  border-[#D6D6D6] border-[1px] border-solid py-7 mt-28 gap-8 items-center
                        w-11/12         2xl:w-4/5
                        px-5            md:px-10 
                        flex-col        lg:flex-row
                        `}
        >
            <div className='flex gap-5 flex-col xl:flex-row items-center'>
                <EnrolledCourseDetails />
                <EnrolledCourseHrs />

            </div>
            <hr className='w-3/5 lg:w-0  h-0 lg:min-h-[150px] ' />
            <Link className={`no-underline whitespace-nowrap bg-[#A1A3EF] text-white border-none rounded-xl py-3 cursor-pointer
                            px-5        md:px-6     xl:px-8
                            text-3xs    md:text-xs 
                        `}>
                Go To Course
            </Link>
        </div>
    )
}


export default EnrolledCourseInfo