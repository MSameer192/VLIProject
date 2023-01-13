import React from 'react'
import './VehicleDetails.css'
const VehicleDetails = ({ VehicleDetailRef }) => {
    const h4Style = `text-white 
                     text-4xs                   lg:text-3xs     xl:text-2xs  SemiBold`
    const pStyle = `text-white 
                     text-xs       md:text-sm  lg:text-base    xl:text-[30px]  SemiBold`
    return (
        <div className='flex flex-col gap-20 items-center' ref={VehicleDetailRef}>
            <h2 className=' text-[38px] PrintBoldfont'>Vehicle Details</h2>
            <div className='flex w-full items-center justify-around gap-10 px-5 flex-col md:flex-row'>

                <div className='flex flex-col items-center justify-center max-w-[850px] w-11/12 md:w-2/3'>
                    <img className='w-full' src={require('./Assets/Car Image.png')} alt="" />
                    <div>
                        <span></span>
                    </div>
                </div>

                <div className={`bg-[#516471] max-w-[800px] relative
                                px-5                    lg:px-9     xl:px-11
                                py-5                    lg:py-7     xl:py-9
                                w-11/12     md:w-2/6 `}
                >
                    <div className='h-[calc(100%_-_6px)] w-full absolute  top-[3px] -left-0 Shadowa bg-[#6cb0de] -z-10 hidden md:block'>

                    </div>

                    <h2 className={`text-white whitespace-nowrap 
                                    text-base       md:text-[28px]      lg:text-lg      xl:text-xl      Boldfont`}>
                        About Vehicle
                    </h2>
                    <div className='pt-5 flex flex-col gap-12'>
                        <span className='w-11/12 pb-2 md:pb-3 lg:pb-4 xl:pb-5 block VehicleBorder'>
                            <h4 className={h4Style}>Company</h4>
                            <p className={pStyle}>Mercedes</p>
                        </span>
                        <span className='w-11/12 pb-2 md:pb-3 lg:pb-4 xl:pb-5 block VehicleBorder'>
                            <h4 className={h4Style}>Model</h4>
                            <p className={pStyle}>Mercedes</p>
                        </span>
                        <span className='w-11/12 pb-2 md:pb-3 lg:pb-4 xl:pb-5 block VehicleBorder'>
                            <h4 className={h4Style}>Year</h4>
                            <p className={pStyle}>Mercedes</p>
                        </span>
                        <span className='w-11/12 pb-2 md:pb-3 lg:pb-4 xl:pb-5 block'>
                            <h4 className={h4Style}>Description</h4>
                            <p className='text-white'>asdasdasdadsasdasd</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetails