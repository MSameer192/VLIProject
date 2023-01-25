import React from 'react'

const TopPart = () => {
    return (
        <div className='bg-[#C8C9F6] pb-5 sm:pb-10'>
            <div className='relative pt-28 pb-36 z-10 sm:pt-56 sm:pb-72'>
                <h1 className='text-center text-[24px] sm:text-[45px] text-white SemiBoldItalic'>
                    Enrollment for <br /> VEHICLE MECHANICS
                </h1>

                <div className='absolute top-0 w-full  h-full -z-10 blur-[5px] EnrollmentBG'>
                    <div className='w-full h-full bg-[#a6a6a664]'></div>
                </div>
            </div>

        </div>
    )
}

export default TopPart