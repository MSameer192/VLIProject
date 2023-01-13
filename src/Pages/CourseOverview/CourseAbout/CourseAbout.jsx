import React from 'react'

const CourseAbout = ({ CourseInfo, CourseDetailRef }) => {


    return (

        <div className='w-full flex flex-col justify-center items-center mt-16' ref={CourseDetailRef}>
            <div className='flex gap-10 min-h-[350px] flex-col md:flex-row md:w-4/5 w-11/12'>
                <div className='flex gap-6 flex-col w-full md:w-2/6 '>
                    <span className='flex items-end gap-2'>
                        <span className='w-16 h-1 bg-[#A1A3EF] relative bottom-[5px]'></span>
                        <h4 className='text-[#A1A3EF] text-4xs md:text-3xs xl:text-2xs SemiBold'>About this Course</h4>
                    </span>
                    <div>
                        <h1 className='text-lg md:text-xl lg:text-[45px] xl:text-[50px] SemiBold'>Learn Driving in Top Driving Schools</h1>
                    </div>
                </div>

                {/* Discription */}
                <div className='flex flex-col relative top-5 gap-4 w-full md:w-2/3'>
                    <h1 className='text-sm SemiBold'>Description</h1>
                    <div>
                        <p className='break-words'>{CourseInfo?.Course?.Description}</p>
                    </div>
                </div>

            </div>

        </div>


    )
}


export default CourseAbout