import React from 'react'
import { useParams } from 'react-router-dom'

const ForNoSubcategory = ({ Type }) => {
    const { LicenseTypeId } = useParams();
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center bg-[#423e4d17] mt-20 w-full gap-2 py-5'>
                <h1 className='text-lg text-black m-0 Boldfont'>Driving {LicenseTypeId ? "License" : "Vehicle"} Courses</h1>
                <span className='flex gap-2 items-center'>
                    <img className='max-w-[30px]' src={require('../../Assets/CarIcon.svg').default} alt="" />
                    <h1 className='text-lg text-black m-0 Boldfont'>
                        {LicenseTypeId
                            ? `License Type ${Type?.LicenseTypeName}`
                            : `Vehicle Type ${Type?.VehicleTypeName}`
                        }
                    </h1>
                </span>

            </div>
            <p className='w-3/4 text-base text-[#A1A3EF] text-center my-7'>

                {LicenseTypeId ? Type?.LicenseTypeDescription : Type?.VehicleTypeDescription}
            </p>
        </div>
    )
}

export default ForNoSubcategory