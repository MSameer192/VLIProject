import React from 'react'

const EnrolledCourseDetails = () => {
    return (
        <div className='flex gap-5 items-center flex-col md:flex-row'>
            <span className='inline-block h-full'>
                <img className='h-full' src={require('../../Assets/images.png')} alt="" />
            </span>
            <CorseDetailsText />
        </div>
    )
}

function CorseDetailsText() {
    return <span className='flex flex-col gap-2 sm:gap-5 md:gap-8 lg:gap-11 xl:gap-14 2xl:gap-16 justify-between items-center'>
        <h3 className={`text-center             lg:text-start
                        text-3xs    md:text-2xs                 xl:text-xs `}
        >
            Automotive Course
        </h3>


        <p className={`max-w-[650px] 
                                    sm:w-11/12  md:w-auto 
                       text-4xs                 md:text-3xs 
                       text-center                           lg:text-start`}
        >
            Class G. Allowed to drive any car, van or small truck or combination of vehicle and
            towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600
            kilograms
        </p>

    </span>
}

export default EnrolledCourseDetails