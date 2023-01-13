import React from 'react'
import { BuyCourse } from './Components/BuyCourse'
import { TitleAndDetail } from './Components/TitleAndDetail'


const CourseIntro = ({ CourseInfo }) => {
    return (
        <div className='relative flex flex-col items-center overflow-hidden sm:min-h-[800px]'>
            <div className={`absolute left-0 top-0 justify-center h-full w-full -z-10 rounded-b-[60px]
            MobileGradient
            `}>
                <img className='hidden sm:inline-block absolute top-0 h-full -z-[5]' src={require('./Assets/School Image.png')} alt="" />
                <div className='hidden  sm:block h-full w-full  -z-[2] bg-[rgba(0,0,0,0.5)]'>
                </div>
            </div>

            <h1 className='text-white text-[33px] Boldfont'>{CourseInfo?.Institute?.InstituteName}</h1>

            <div className={`flex mb-10  gap-6  flex-col md:flex-row
             w-full sm:w-11/12
             items-end md:justify-center
             mt-20 sm:mt-32
            `}>

                <div className='flex flex-col gap-4 w-full'>
                    <TitleAndDetail CourseInfo={CourseInfo} />
                    <BuyCourse CourseInfo={CourseInfo} />
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