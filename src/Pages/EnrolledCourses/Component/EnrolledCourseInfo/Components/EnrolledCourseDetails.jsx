import React from 'react'
import { BaseUrl } from '../../../../../Actions/Base'

const EnrolledCourseDetails = ({ InstituteCourse }) => {

    return (
        <div className='flex gap-5 items-center flex-col md:flex-row w-[64%]'>
            <span className='flex justify-center items-center max-h-[150px] h-full overflow-hidden w-4/5 max-w-[230px]'>
                <img className='w-full'
                    src={InstituteCourse ? `${BaseUrl}/api/vehicletype/image?url=${InstituteCourse?.Course?.CourseThumbnail}` : null}
                    alt="Course Thumbnail" />
            </span>
            <CorseDetailsText InstituteCourse={InstituteCourse} />
        </div>
    )
}

function CorseDetailsText({ InstituteCourse }) {
    let Description = InstituteCourse?.Course?.Description;
    if (Description.length >= 220)
        Description = Description.split("").slice(0, 215).join('') + "...";
    let CourseName = InstituteCourse?.Course?.CourseName
    if (CourseName.length >= 40)
        CourseName = CourseName.split("").slice(0, 37).join("") + "..."

    return <span className='flex flex-col    gap-2 sm:gap-5 md:gap-8 lg:gap-11 xl:gap-14 2xl:gap-16 justify-between items-center'>
        <h3 className={`text-center           Boldfont  lg:text-start
                        text-3xs    md:text-2xs                 xl:text-xs `}
        >
            {CourseName}
        </h3>


        <p className={`max-w-[650px]
                       w-11/12      sm:w-11/12  md:w-auto 
                       text-4xs                 md:text-3xs 
                       text-center                           lg:text-start`}
        >
            {Description}
        </p>

    </span>
}

export default EnrolledCourseDetails