import React, { useRef } from 'react'
import './VehicleType.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetVehicleTypes } from '../../../Actions/CategoryA';

const VehicleType = () => {
    const Dispatch = useDispatch();
    const [VehicleTypesSate, setVehicleTypesSate] = useState([
        {
            "VehicleTypeId": "50047f2d-99ca-47a8-b14c-61cdb69d95e3",
            "VehicleTypeName": "Vehicle type M",
            "VehicleTypeDescription": "vehicles carrying passengers",
            "VehicleTypeImage": "Public/VehicleType/VehicleTypeImage-1668188093019Vehicle Type M.png",
            "Active": null,
            "createdAt": "2022-10-03T14:50:12.659Z"
        },
        {
            "VehicleTypeId": "eabbb07c-0c67-41ff-b278-8b28ebe201d0",
            "VehicleTypeName": "Vehicle type N",
            "VehicleTypeDescription": "Vehicles carrying goods. Vehicles having at least four wheels and used for the carriage of.",
            "VehicleTypeImage": "Public/VehicleType/VehicleTypeImage-1668188312643Vehicle Type N.png",
            "Active": true,
            "createdAt": "2022-10-03T14:50:20.479Z"
        },
        {
            "VehicleTypeId": "aaac6a88-3202-42f9-b76c-65fa9da58cbb",
            "VehicleTypeName": "Vehicle type L",
            "VehicleTypeDescription": "2- and 3- wheel vehicles and quadricycles. Vehicles havie and used for the carriage of.",
            "VehicleTypeImage": "Public/VehicleType/VehicleTypeImage-1668188472835Vehicle Type L.png",
            "Active": true,
            "createdAt": "2022-10-03T14:50:24.890Z"
        },
        {
            "VehicleTypeId": "a5f33504-4c74-4cbe-8bc3-bed8e45f1e1e",
            "VehicleTypeName": "Vehicle type T",
            "VehicleTypeDescription": "Agricultural and forestry tractors and their trailers. Vehicles having at least four the carriage of.",
            "VehicleTypeImage": "Public/VehicleType/VehicleTypeImage-1668188616583Vehicle Type T.png",
            "Active": true,
            "createdAt": "2022-10-03T14:50:28.962Z"
        }
    ])
    const { VehicleTypes } = useSelector((state) => { return state.VehicleTypeReducer });

    useEffect(() => {
        // if (VehicleTypes) {setVehicleTypesSate(VehicleTypes); console.log(VehicleTypes)}
    }, [VehicleTypes])

    useEffect(() => {
        Dispatch(GetVehicleTypes())
    }, [Dispatch])


    return (
        <div className='w-full flex md:justify-center justify-start items-center flex-col relative gap-5 md:gap-24 mt-16 '>
            {/* Large Bulb Icon Center */}
            <picture className='absolute -z-10 -top-[225px] hidden md:inline' >
                <img loading='lazy' className='-top-[250px] md:h-[800px] lg:h-[1200px]' src={require('./Assets/LargeBulbCenterImg.png')} alt="" />
            </picture>

            <h2 className='PrintBoldfont text-xl'>Vehicle Type</h2>

            <div className='m-5 w-full flex flex-col gap-5 relative sm:gap-10 lg:gap-2 justify-center md:items-center  overflow-hidden lg:flex-row '>
                <ul className='mx-3 flex flex-col gap-7 md:gap-12 items-center'>
                    <li className='flex justify-start items-center gap-5 Regularfont '>
                        {/* Vehicle Type Car Icon  */}
                        <img loading='lazy' src={require('./Assets/CarIcon.png')} alt="Car" />
                        <p className='max-w-xs text-3xs'>VehicleType M is Vehicles Carrying Passengers</p>
                    </li>

                    <li className='flex justify-start items-center gap-5 Regularfont  '>
                        {/* Vehicle Type Truck Icon */}
                        <img loading='lazy' src={require('./Assets/TruckIcon.png')} alt="Truck" />
                        <p className='max-w-xs text-3xs'>VehicleType N is vehicles carrying goods</p>
                    </li>

                    <li className='flex justify-start items-center gap-5 Regularfont'>
                        {/*Vehicle Type Bike Icon */}
                        <img loading='lazy' src={require('./Assets/BikeIcon.png')} alt="Bike" />
                        <p className='max-w-xs text-3xs'>VehicleType L is vehicle with 2/3 wheelers</p>
                    </li>

                    <li className='flex justify-start items-center gap-5 Regularfont'>
                        {/*Vehicle Type Tracktor Icon */}
                        <img loading='lazy' src={require('./Assets/TractorIcon.png')} alt="" />
                        <p className='max-w-xs text-3xs'>VehicleType T that can be used for Agricultural Purposes </p>
                    </li>
                </ul>
                {/* Car Parking Illustration */}
                <picture className={`flex justify-center items-center mx-3 relative
                        w-[90%] lg:w-[600px] xl:w-[800px]`}
                >
                    <source media="(max-width:1024px)" srcset={require("./Assets/CarParkingmobile.svg").default}
                    />
                    <img loading='lazy' className='w-full' src={require('./Assets/CarParking.png')} alt="" />
                </picture>
            </div>

            {/* Right Small Bulb image */}
            <div className='absolute top-96 h-[380px]  w-full overflow-hidden hidden md:inline'>
                <img loading='lazy'
                    className=' absolute -scale-x-100 -right-32  h-[380px] -z-10'
                    src={require('../SearchTiles/Assessts/BulbIcon.png')}
                    alt=""
                />
            </div>
            <VehicleTypeTiles VehicleTypesSate={VehicleTypesSate} />

        </div>
    )
}
function VehicleTypeTiles({ VehicleTypesSate }) {
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);
    console.log( -Size + "px")
    let HoverStyle = "hover:origin-top-left hover:gap-12 hover:scale-100 md:hover:scale-[1.04] "
    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])
    return <div className={`w-full h-fit lg:h-[900px]  relative mb-16 flex flex-col gap-5 `}>
        {/* Vehicle Type Background */}
        <picture className='hidden md:inline'>
            <source loading="lazy" media="(min-width:1550px)" srcSet={require('./Assets/VehicleTypeBG.png')} />
            <img loading='lazy' src={require('./Assets/VehicleTypeBG.png')} className='absolute w-full -z-10 bottom-1/2 translate-y-1/2'
                alt=""
            />
        </picture>

        <div className='w-[95%] mx-2 mt-5 overflow-hidden py-5 md:overflow-visible h-fit'>
            <div
                style={{ left: -Size + "px" }}
                className={`flex w-full gap-6 h-fit duration-150 
                justify-start md:justify-center  
                flex-row md:flex-wrap lg:gap-8 
                lg:mt-32 xl:mt-52 2xl:mt-64 `
                }
            >
                {VehicleTypesSate?.map((value) =>
                    <span
                        key={value.VehicleTypeId}
                        ref={(e) => { setref(e) }}
                        className={`bg-white rounded-2xl duration-[400ms] cursor-pointer flex flex-col items-center 
                        gap-3 xl:gap-7  
                        max-w-[320px] min-w-[220px] w-[60%]  lg:w-[60%]
                        h-[324px] md:h-[340px] lg:h-[370px] 2xl:h-[480px] 
                        ${HoverStyle} hover-on-child
                        VehicleType_DropShadow
                        `}>
                        <img loading='lazy'
                            className='w-4/5'
                            src={`/api/vehicletype/image/?url=${value.VehicleTypeImage}`}
                            alt="Vehicle Type" />
                        <span className='w-[63%] flex gap-2 md:gap-5 flex-col items-center VehicleTypeInfo'>
                            <h2 className='text-3xs md:text-2xs font-normal duration-[400ms] w-full Regularfont'>
                                {value.VehicleTypeName}
                            </h2>

                            <p className='text-[12px] md:text-5xs duration-[400ms]  w-full Regularfont'>{value.VehicleTypeDescription}</p>

                        </span>
                    </span>
                )}

            </div>
        </div>
        <div className='md:hidden w-full flex justify-center gap-4 my-10'>
            {VehicleTypesSate.map((value, index) => {
                return (
                    <span onClick={(e) => setSize(ref.offsetWidth * index)}
                        className='w-5 h-5 rounded-[28px]  bg-[#A1A3EF] cursor-pointer NavigateButton_DropShadow'>
                    </span>
                )
            })}
        </div>
    </div>
}


export default VehicleType