import React, { useState } from 'react'
import { MainContent } from '../2.ClassG1Licensing/ClassG1Licensing'

const ClassGLicensing = () => {
    const [PopularCoursesInfo, setPopularCourses] = useState([
        {
            CourseName: "Automotive",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Vehicle Mechanics",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Memberpress Course",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Memberpress Course",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
    ])


    return (
        <div className='flex items-center flex-col gap-16 relative '>
            <img className='w-full -z-40 absolute top-1/2 hidden sm:inline-block' src={require('./Assets/ClassGBG.svg').default} alt="" />
            <MainContent PopularCoursesInfo={PopularCoursesInfo} />

            
        </div>
    )
}

export default ClassGLicensing