import React from 'react'

const EnrolledCourseHrs = ({ CoursePackage }) => {
    let ButtonBorders = `whitespace-nowrap py-4 px-5  text-white border-[1px] border-solid border-[#D7DAE2]
                        px-4        md:px-5 
                        text-4xs    md:text-3xs     xl:text-2xs`;


    return (
        <span className='flex w-[32%]'>

            <span className='flex flex-col gap-3 items-center'>
                <button className={`${ButtonBorders} bg-[#A1A3EF] rounded-l-md`}>Driving</button>
                <span>{CoursePackage?.DrivingHours ? CoursePackage?.DrivingHours : 0}</span>
            </span>

            <span className='flex flex-col gap-3 items-center'>
                <button className={`${ButtonBorders} bg-[#7F82F9]`}>
                    Online
                </button>
                <span>{CoursePackage?.OnlineHours ? CoursePackage?.OnlineHours : 0}</span>
            </span>
            <span className='flex flex-col gap-3 items-center'>
                <button className={`${ButtonBorders} bg-[#5456C7] rounded-r-md`}>In Class</button>
                <span>{CoursePackage?.InClassHours ? CoursePackage?.InClassHours : 0}</span>
            </span>
        </span>
    )
}

export default EnrolledCourseHrs