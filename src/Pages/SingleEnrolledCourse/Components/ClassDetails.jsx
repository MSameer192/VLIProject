import React from 'react'

const ClassDetails = () => {
    return (
        <div className='bg-[#A1A3EF] rounded-lg flex flex-col gap-5 px-6 py-5'>
            <span className='flex flex-col gap-4 md:gap-2'>
                <h3 className='text-3xs sm:text-2xs md:text-xs lg:text-sm xl:text-base 2xl:text-[30px] text-white SemiBold'>
                    Class 1
                </h3>
                <p className='text-4xs md:text-3xs lg:text-2xs  xl:text-xs text-white'>
                    Hello, Welcome to the Vehicle Mechanics Course !! My name is Schen chen (Teacher name ) and I'll do my best to help you along your journey. To improve your experience, I'll suggest
                </p>
            </span>
            <ClassDuration />
        </div>
    )
}

function ClassDuration() {
    return <span className='flex justify-end gap-2 md:gap-4 xl:gap-6'>
        <span className='flex flex-col items-center'>
            <h4 className='text-3xs  bg-white w-fit px-2 py-[6px] rounded-md SemiBold'>02</h4>
            <p className='text-[12px] text-white SemiBold'>Days</p>
        </span>
        <span className='flex flex-col items-center'>
            <h4 className='text-3xs  bg-white w-fit px-2 py-[6px] rounded-md SemiBold'>02</h4>
            <p className='text-[12px] text-white SemiBold'>Hours</p>
        </span>
        <span className='flex flex-col items-center'>
            <h4 className='text-3xs  bg-white w-fit px-2 py-[6px] rounded-md SemiBold'>02</h4>
            <p className='text-[12px] text-white SemiBold'>Minutes</p>
        </span>
    </span>
}

export default ClassDetails