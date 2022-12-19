import React from 'react'
import CourseInfo from './Component/EnrolledCourseInfo'
import Ponits from './Component/Ponits'

const EnrolledCourses = () => {
    return (
        <div className='flex flex-col items-center gap-10 '>
            <CourseInfo />
            <Ponits />
        </div>
    )
}

export default EnrolledCourses