import React from 'react'

const ForNoSubcategory = ({ Courses }) => {

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center bg-[#423e4d17] mt-20 w-full gap-2 py-5'>
                <h1 className='text-lg Boldfont'>Driving License Courses</h1>
                <span className='flex gap-2'>
                    <img src={require('../../Assets/CarIcon.svg').default} alt="" />
                    <h1 className='text-lg Boldfont'>{Courses?.LicenseTypeName}</h1>
                </span>

            </div>
            <p className='w-3/4 text-base text-[#A1A3EF] text-center my-7'>
                {Courses?.LicenseTypeDescription}
            </p>
        </div>
    )
}

export default ForNoSubcategory