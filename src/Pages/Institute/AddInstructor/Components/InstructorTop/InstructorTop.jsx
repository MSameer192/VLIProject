import React from 'react'

const InstructorTop = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-1'>
            <img src={require('./Assets/Instructor.svg').default}
                className="relative right-2 h-14 sm:h-16 md:h-[72px] lg:h-20 xl:h-[88px] 2xl:h-24"
                alt="" />
            <h3 className='font-normal text-xs text-[#A1A3EF]'>Instructor Details</h3>
        </div>
    )
}

export default InstructorTop