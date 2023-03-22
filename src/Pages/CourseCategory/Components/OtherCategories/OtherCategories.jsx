import React, { useState } from 'react'
import { useEffect } from 'react'
import CoursesSlider from '../../../../Components/CourseSlider/CourseSlider'
import CourseTiles from '../CourseTiles/CourseTiles'
let ClassNames = `relative   duration-300 flex items-start
w-[95%]                             lg:w-11/12                  xl:w-[90%]        
flex-nowrap     sm:flex-wrap 
justify-start   sm:justify-around   lg:justify-between
gap-7                               lg:gap-x-8 lg:gap-y-16  
`
const OtherCategories = ({ LicenseType }) => {
    const [PopularCoursesInfo, setPopularCourses] = useState([])

    const { Courses } = LicenseType?.Courses
    
    useEffect(() => {
        setPopularCourses(Courses)
    }, [Courses])

    return (
        <div className='flex items-center flex-col gap-16 relative '>
            <img className='w-full -z-40 absolute top-1/2 hidden sm:inline-block' src={require('./Assets/ClassGBG.svg').default} alt="" />

            <CoursesSlider CoursesInfo={PopularCoursesInfo} ClassNames={ClassNames} CourseTiles={CourseTiles} NavigateBtnClass='GLicensing' SwitchSize={"sm"} />
        </div>
    )
}

export default OtherCategories