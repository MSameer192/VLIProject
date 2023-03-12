import React from 'react'
import { BaseUrl } from '../../../../../Actions/Base'

const EnrolledCourseDetails = ({ InstituteCourse }) => {
 
    return (
        <div className='flex gap-5 items-center flex-col md:flex-row '>
            <span className='inline-block h-full'>
                <img className='h-auto min-w-[150px] w-full sm:w-auto sm:h-full'
                    src={InstituteCourse ? `${BaseUrl}/api/vehicletype/image?url=${InstituteCourse?.Course?.CourseThumbnail}` : null}
                    alt="Course Thumbnail" />
            </span>
            <CorseDetailsText InstituteCourse={InstituteCourse} />
        </div>
    )
}

function CorseDetailsText({InstituteCourse}) { 
 
    return <span className='flex flex-col    gap-2 sm:gap-5 md:gap-8 lg:gap-11 xl:gap-14 2xl:gap-16 justify-between items-center'>
        <h3 className={`text-center             lg:text-start
                        text-3xs    md:text-2xs                 xl:text-xs `}
        >
           {InstituteCourse?.Course?.CourseName}
        </h3>


        <p className={`max-w-[650px]
                       w-11/12      sm:w-11/12  md:w-auto 
                       text-4xs                 md:text-3xs 
                       text-center                           lg:text-start`}
        >
            {InstituteCourse?.Course?.Description}
        </p>

    </span>
}

export default EnrolledCourseDetails