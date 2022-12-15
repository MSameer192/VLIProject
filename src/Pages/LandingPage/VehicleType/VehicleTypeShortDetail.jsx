import React from 'react'

const ShortDetail = () => {
    return (
        <ul className='mx-3 flex flex-col gap-7 md:gap-12 items-center'>
            <li className='flex justify-start items-center gap-5 Regularfont '>

                <img loading='lazy' src={require('./Assets/CarIcon.png')} alt="Car" />
                <p className='max-w-xs text-3xs'>VehicleType M is Vehicles Carrying Passengers</p>
            </li>

            <li className='flex justify-start items-center gap-5 Regularfont  '>

                <img loading='lazy' src={require('./Assets/TruckIcon.png')} alt="Truck" />
                <p className='max-w-xs text-3xs'>VehicleType N is vehicles carrying goods</p>
            </li>

            <li className='flex justify-start items-center gap-5 Regularfont'>

                <img loading='lazy' src={require('./Assets/BikeIcon.png')} alt="Bike" />
                <p className='max-w-xs text-3xs'>VehicleType L is vehicle with 2/3 wheelers</p>
            </li>

            <li className='flex justify-start items-center gap-5 Regularfont'>

                <img loading='lazy' src={require('./Assets/TractorIcon.png')} alt="" />
                <p className='max-w-xs text-3xs'>VehicleType T that can be used for Agricultural Purposes </p>
            </li>
        </ul>
    )
}

function VehicleTypeShortDetail() {
    return <div className='m-5 w-full flex flex-col gap-5 relative sm:gap-10 lg:gap-2 justify-center items-center  overflow-hidden lg:flex-row '>
        <ShortDetail />
        {/* Car Parking Illustration */}
        <picture className={`flex justify-center items-center mx-3 relative
            w-[90%] lg:w-[600px] xl:w-[800px]`}
        >
            <source media="(max-width:1024px)" srcSet={require("./Assets/CarParkingmobile.svg").default}
            />
            <img loading='lazy' className='w-full' src={require('./Assets/CarParking.png')} alt="" />
        </picture>
    </div>
}
export default VehicleTypeShortDetail