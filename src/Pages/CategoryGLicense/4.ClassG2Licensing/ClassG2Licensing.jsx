import React, { useEffect, useState } from 'react'
import CoursesSlider from '../../../Components/CourseSlider/CourseSlider'
import { Tiles } from '../2.ClassG1Licensing/ClassG1Licensing'
import CourseTiles from '../CourseTiles/CourseTiles'
let ClassNames = `relative   duration-300 flex items-start
w-[95%]                             lg:w-11/12                  xl:w-[90%]        
flex-nowrap     sm:flex-wrap 
justify-start   sm:justify-around   lg:justify-between
gap-7                               lg:gap-x-8 lg:gap-y-16  
`
const ClassG2Licensing = ({ LicenseType, NextSubLicenseType }) => {
    const [PopularCoursesInfo, setPopularCourses] = useState([])

    const { Courses } = LicenseType?.Courses

    useEffect(() => {
        setPopularCourses(Courses)
    }, [Courses])

    return (
        <div className='relative flex flex-col md:items-center '>
            <div className='flex items-center flex-col gap-7 sm:bg-[#acadf143] w-full'>
                <h2 className='sm:text-white text-center text-base sm:text-[38px]  PrintBoldfont'>
                    {LicenseType?.LicenseTypeName}
                </h2>

                <p className='sm:text-white text-center text-3xs sm:text-base w-11/12 md:w-[40%]'>
                    {LicenseType?.LicenseTypeDescription}
                </p>

                <div className='w-full'>
                    <CoursesSlider CoursesInfo={PopularCoursesInfo} ClassNames={ClassNames} CourseTiles={CourseTiles} NavigateBtnClass='G2Licensing' SwitchSize="sm" />

                </div>
                {NextSubLicenseType ? <LicenseType3Detail LicenseType={NextSubLicenseType} /> : null}
            </div>
            <BG />

        </div>
    )
}

function LicenseType3Detail({ LicenseType }) {
    return <>
        <h2 className='sm:text-white text-center text-base sm:text-[38px]  PrintBoldfont'>
            {LicenseType?.LicenseTypeName}
        </h2>
        <p className='mb-10 sm:text-white text-center text-3xs sm:text-base  w-11/12 md:w-[40%]'>
            {LicenseType?.LicenseTypeDescription}
        </p>
    </>
}

function BG() {
    return <div className='absolute h-full -z-20 flex justify-center'>
        <picture className=''>
            <source className='relative -left-1/2' media="(max-width:639px)" srcSet={require("../../LandingPage/PopularCourses/Assets/Shape.svg").default} />
            <img className='h-[125%] sm:h-full relative sm:static -left-[40%] -top-[20%]' src={require('../4.ClassG2Licensing/Assets/Class G2 BG.png')} alt="" />
        </picture>

    </div>
}
export default ClassG2Licensing