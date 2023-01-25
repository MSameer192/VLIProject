import React, { useEffect } from 'react'
import { useState } from 'react'
import './PopularCourses.css'
const PopularCourses = () => {
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
        <div className='relative flex flex-col justify-start items-center gap-5'>
            <h1 className='text-center md:text-left SemiBoldItalic'>Here you will get the list of popular courses</h1>

            <div className='absolute md:hidden  w-full overflow-hidden'>
                <picture>
                    <img className='relative -left-[700px] -top-24' src={require("./Assets/Shape.svg").default} alt="" />
                </picture>

            </div>
            <div className='relative flex w-4/5 justify-center items-center flex-col lg:flex-row lg:justify-between gap-12 sm:gap-8'>
                <ul className='flex flex-col text-4xs md:text-3xs gap-16 sm:gap-12 lg:gap-[70px] '>
                    <li className='flex gap-7 items-center Regularfont'>
                        <img src={require('./Assets/Black Buld Icon.svg').default}
                            className='h-10 md:h-16'
                            alt="" />
                        <p>
                            The Courses that are being liked by the students
                        </p>
                    </li>
                    <li className='flex gap-7 items-center Regularfont'>
                        <img src={require('./Assets/Black Buld Icon.svg').default}
                            className='h-10 md:h-16'
                            alt="" />
                        <p>
                            The Courses that are Mostly Searched by the students
                        </p>
                    </li>
                    <li className='flex gap-7 items-center Regularfont'>
                        <img src={require('./Assets/Black Buld Icon.svg').default}
                            className='h-10 md:h-16'
                            alt="" />
                        <p>
                            Unique selling proposition (USP) of your courses
                        </p>
                    </li>
                    <li className='flex gap-7 items-center Regularfont'>
                        <img src={require('./Assets/Black Buld Icon.svg').default}
                            className='h-10 md:h-16'
                            alt="" />
                        <p>
                            You can Rank up your courses through Sponsorship
                        </p>
                    </li>

                </ul>

                <img className='w-[110%] sm:w-[80%] lg:w-[55%] xl:w-[60%] 2xl:w-auto lg:inline-block'
                    src={require('./Assets/Popular Courses Illustration.png')}
                    alt="" />
            </div>
            <div className='flex items-center justify-start flex-col w-full gap-5'>
                <PopularCoursesTiles PopularCoursesInfo={PopularCoursesInfo} />
                <button className='Regularfont px-4 py-3 bg-[#A1A3EF] text-white text-4xs md:text-base cursor-pointer rounded-xl border-none ShowMoreBtn_BlackShadow'>
                    Show More
                </button>
            </div>
        </div>
    )
}
function PopularCoursesTiles({ PopularCoursesInfo }) {
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])

    return <div className='relative flex flex-col justify-start w-full gap-4'>
        <div className='relative w- mx-2 mt-5 overflow-hidden md:flex md:justify-center'>
            <div
                style={{ left: -Size + "px" }}
                className='relative w-fit duration-300 flex flex-row justify-start items-start flex-nowrap md:flex-wrap md:justify-center gap-7 lg:gap-8'>
                {PopularCoursesInfo?.map((value, index) => {
                    return (
                        <div className={`min-w-[252px] w-[60%] md:w-[325px] max-w-[360px] px-2 pb-2
                        flex flex-col rounded-[20px]  items-center h- relative hover:cursor-pointer hover:bg-[#BCBEFF] duration-300 bg-white md:bg-[#00000000]`}
                            ref={(e) => { setref(e) }}
                        >
                            <div className='flex flex-col items-center mx-2 md:mx-5'>
                                <div className='w-full flex justify-center relative m-8 mb-0 '>
                                    <img className='w-[90%] rounded-[20px]' src={require('./Assets/images.jpg')} alt="" />
                                    <span className='w-8 h-8 flex justify-center items-center bg-white absolute top-2 md:top-5 right-8 md:right-5 rounded-[16px] hover:'>
                                        <img className='h-6 relative -top-[2px] md:top-0 md:h-auto' src={require('./Assets/Favourite Icon.svg').default} alt="" />
                                    </span>
                                </div>

                                <span className='w-[102px] md:w-[145px] h-[35px] md:h-[50px] relative -top-[20px] md:-top-[40px] flex justify-center items-center bg-white  rounded-[14px] '>
                                {/* PriceShadow */}
                                    <h4 className='text-center font-extralight text-[12px] md:text-4xs Regularfont'>PKR {value.Price}</h4>
                                </span>

                            </div>

                            <div className='flex flex-col items-center gap-2'>
                                <h2 className='Blackfont text-[12px]  md:text-3xs'>{value.CourseName} {1 + index}</h2>
                                <p className='max-w-[250px] text-[12px] md:text-4xs Regularfont text-center'>{value.CourseDescription}</p>
                            </div>


                            <div className='flex justify-between  items-end w-full md:w-[100%] gap-16 mt-10 '>
                                <div className='flex flex-col'>
                                    <span className='flex'>{[...new Array(5)].map(() => {
                                        return <img className='w-6' src={require('../../CourseOverview/Assets/StarIcon.svg').default} alt=''/>
                                    })}</span>
                                    <span className='SemiBold text-xs'><img src={require('./Assets/Thumb Icon.svg').default} alt="" /> 100%</span>
                                </div>
                                <h5 className='Regularfont font-thin text-[12px] md:text-5xs whitespace-nowrap'>30 Lectures course</h5>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
        <div className='flex  justify-center items-center gap gap-2 '>
            {PopularCoursesInfo.map((value, index) =>
                <span onClick={(e) => setSize(ref.offsetWidth * index)}
                    className='w-[18px] h-[18px] rounded-[28px]  bg-[#A1A3EF] cursor-pointer NavigateButton_DropShadow'>
                </span>)
            }
        </div>
    </div>
}


export default PopularCourses