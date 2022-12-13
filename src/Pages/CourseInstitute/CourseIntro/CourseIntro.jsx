import React from 'react'
import { Link } from 'react-router-dom'
import { RatingAndReviewd, ShortDetail, TitleAndDuration } from './CenterPart'

const CourseIntro = () => {
    return (
        <div className='relative flex flex-col items-center overflow-hidden'>
            <div className={`absolute left-0 top-0  justify-center
            h-full sm:min-h-[758px] sm:h-full
            w-full
            -z-10 rounded-b-[60px]
            MobileGradient
            `}>
                <img className='hidden sm:inline-block absolute top-0 h-full -z-[5]' src={require('./Assets/School Image.png')} alt="" />
                <div className='hidden  sm:block h-full w-full  -z-[2] bg-[rgba(0,0,0,0.5)]'>
                </div>
            </div>

            <h1 className='text-white text-[33px] Boldfont '>Course Name</h1>

            <div className='flex w-full sm:w-11/12 justify-center gap-6 mt-5 sm:mt-32 flex-col sm:flex-row'>
                <div className='hidden sm:block min-w-[140px] max-w-[440px] w-[40%]'>
                    <img className='w-full' src={require('./Assets/Course Image.png')} alt="" />
                </div>
                <div className='flex flex-col gap-4'>


                    <TitleAndDuration />
                    <ShortDetail />
                    <RatingAndReviewd />

                    <h3 className='hidden sm:inline-block text-[33px] text-white Boldfont'>Orem Ipsum Dolor Sit Amet, Consec</h3>
                    <p className='text-white text-6xs sm:text-base px-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicul
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel
                    </p>
                </div>

                <div className='flex sm:hidden flex-col gap-3 items-center'>
                    <Link className='text-3xs no-underline  text-white bg-[#A1A3EF] rounded-[9px] cursor-pointer px-10 w-60 max-w-[240px] py-5 whitespace-nowrap'>Enroll For 200$</Link>
                    <Link className='text-3xs no-underline  text-white bg-[#A1A3EF] rounded-[9px] cursor-pointer px-10 w-60 max-w-[240px] py-5 whitespace-nowrap'>Download Curriculum</Link>
                </div>
                <ExpandOnClickPart />
            </div>


        </div>

    )
}

function ExpandOnClickPart() {
    return <div className={`flex-row items-center justify-between gap-2 px-4 py-6
                            flex    sm:block 
                            w-full  sm:w-fit 
    `}>
        <p className='text-white text-4xs  sm:hidden sm:text-2xs w-fit SemiBold'>22,000 Students already enrolled</p>


        <span className='hidden sm:flex flex-col items-center text-[#BBAEFF] relative w-fit'>
            <img className='absolute -left-10 top-2' src={require('./Assets/TimeIcon.svg').default} alt="" />
            <h3 className='text-xs font-normal whitespace-nowrap'>Opening Hours

            </h3>
            <h5 className='font-normal text-5xs text-white'>(Click here to expand)</h5>
        </span>

        <span className='w-fit flex flex-col gap-2 items-center'>
            <h2 className='text-white text-4xs sm:text-[33px] SemiBold'>Offered By</h2>
            <img className='w-[70px] sm:w-auto' src={require('./Assets/Institute Logo.png')} alt="" />
        </span>
    </div>
}


export default CourseIntro