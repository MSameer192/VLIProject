import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CoursesSlider from '../../../Components/CourseSlider/CourseSlider';
import ImageAndPrice from './ImageAndPricing';
import { CourseInfo, RatingBtns } from './Navigation';

const ClassG1Licensing = ({ }) => {
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
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col sm:items-center gap-9 w-full'>
                <h2 className=' text-center text-[38px] SemiBoldItalic '>Class G2 vehicles</h2>
                <p className=' text-center text-3xs sm:text-base sm:w-11/12 md:w-[40%]'>
                    Level One of graduated licensing. Holders may drive Class G vehicles with an accompanying fully licensed driver
                    click here for more information
                </p>
            </div>
            <MainContent PopularCoursesInfo={PopularCoursesInfo} />
        </div>
    )
}

export function MainContent({ PopularCoursesInfo }) {
    let ClassNames = `relative   duration-300 flex items-start
w-[95%]                             lg:w-11/12                  xl:w-[97%]       
flex-nowrap     sm:flex-wrap 
justify-start   sm:justify-around   lg:justify-between
gap-7                               lg:gap-x-8 lg:gap-y-16
`

    return  <CoursesSlider CoursesInfo={PopularCoursesInfo} ClassNames={ClassNames} CourseTiles={Tiles} NavigateBtnClass='G1Licensing' />


 





}

export function Tiles({ CoursesInfo, setref }) {
    return (
        <>
            {CoursesInfo?.map((value, index) => {
                return <div className={`flex flex-col rounded-[20px] items-center
             bg-white hover:bg-[#BCBEFF] hover:cursor-pointer  relative  duration-300 w-fit    min-w-[252px]  
            px-2                        lg:px-3             xl:px-4             2xl:px-5
            pb-1            md:pb-2     lg:pb-3                                 2xl:pb-4
            max-w-[275px]               lg:max-w-[300px]    xl:max-w-[325px]    2xl:max-w-[360px] 
            `

                }
                    ref={(e) => { setref(e) }}
                    key={Number(index)}
                >
                    <ImageAndPrice value={value} />

                    <CourseInfo value={value} />

                    <RatingBtns />
                </div>
            })}


        </>
    )
}
export default ClassG1Licensing