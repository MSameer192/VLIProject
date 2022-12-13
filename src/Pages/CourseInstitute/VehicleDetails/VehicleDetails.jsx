import React from 'react'

const VehicleDetails = () => {
    return (
        <div className='flex flex-col gap-20 items-center'>
            <h2 className='text-white text-[38px] PrintBoldfont'>Vehicle Details</h2>
            <div className='flex'>
                <div className='flex flex-wrap w-4/5 gap-0 [&>*]:text-white [&>*]:text-[17px]  [&>*]:flex-[50%]'>
                    <span className='flex gap-2 items-center justify-center flex-col'>
                        <img className='w-48' src={require('./Assets/VehicleSpeedIcon.svg').default} alt="" />
                        <h5 className='relative -top-9 font-normal'>350 - 430</h5>
                    </span>

                    <span className='flex gap-2 items-center justify-center flex-col'>

                        <img className='w-48' src={require('./Assets/VehicleHybridIcon.svg').default} alt="" />
                        <h5 className='relative -top-9 font-normal'>HYBRID VEHICLE</h5>
                    </span>

                    <span className='flex gap-2 items-center justify-center flex-col'>
                        <img className='w-48' src={require('./Assets/GearIcon.svg').default} alt="" />

                        <h5 className='relative -top-9 font-normal'>AUTOMATIC TRANSMISSION</h5>
                    </span>

                    <span className='flex gap-2 items-center justify-center flex-col'>
                        <img className='w-48' src={require('./Assets/SeatsIcon.svg').default} alt="" />

                        <h5 className='relative -top-9 font-normal'>5 Seats</h5>
                    </span>
                </div>
                <div className='flex flex-col items-center w-4/5'>
                    <img className='max-w-[850px]' src={require('./Assets/Car Image.png')} alt="" />

                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetails