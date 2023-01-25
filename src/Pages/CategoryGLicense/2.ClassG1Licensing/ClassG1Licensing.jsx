import React, { useState } from 'react'
import { useEffect } from 'react';
import CoursesSlider from '../../../Components/CourseSlider/CourseSlider';
import CourseTiles from '../CourseTiles/CourseTiles';

let ClassNames = `relative   duration-300 flex items-start
                    w-[95%]                             lg:w-11/12                  xl:w-[97%]       
                    flex-nowrap     sm:flex-wrap 
                    justify-start   sm:justify-around   lg:justify-start
                    gap-7                               lg:gap-x-8 lg:gap-y-16
                    `
const ClassG1Licensing = ({ LicenseType }) => {
    const [PopularCoursesInfo, setPopularCourses] = useState([])
    const Courses = LicenseType?.Courses;
    useEffect(() => {
        setPopularCourses(Courses)
    }, [Courses])

    return (
        <div className='flex flex-col justify-center items-center'>
            {/* <div className='flex flex-col sm:items-center gap-9 w-full'>
                <h2 className=' text-center text-[38px] SemiBoldItalic '>{LicenseType?.LicenseTypeName}</h2>
                <p className=' text-center text-3xs sm:text-base sm:w-11/12 md:w-[40%]'>
                    {LicenseType?.LicenseTypeDescription}
                </p>
            </div> */}

            <CoursesSlider CoursesInfo={PopularCoursesInfo} ClassNames={ClassNames} CourseTiles={CourseTiles} NavigateBtnClass='G1Licensing' SwitchSize={"sm"} />
        </div>
    )
}


export default ClassG1Licensing