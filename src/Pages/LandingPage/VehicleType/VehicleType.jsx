import React from 'react'
import './VehicleType.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetVehicleTypes } from '../../../Actions/CategoryA';
import CoursesSlider from '../../../Components/CourseSlider/CourseSlider';
import VehicleTiles from './VehicleTiles';
import VehicleTypeShortDetail from './VehicleTypeShortDetail';

const VehicleType = () => {
    const Dispatch = useDispatch();
    const [VehicleTypesSate, setVehicleTypesSate] = useState([])
    const { VehicleTypes } = useSelector((state) => { return state.VehicleTypeReducer });

    useEffect(() => {
        if (VehicleTypes)
            setVehicleTypesSate(VehicleTypes)
    }, [VehicleTypes])

    useEffect(() => {
        Dispatch(GetVehicleTypes())
    }, [Dispatch])


    return (
        <div id='VehicleTypes' className='w-full flex md:justify-center justify-start items-center flex-col relative gap-5 md:gap-24 mt-16 '>
            {/* Large Bulb Icon Center */}
            <picture className='absolute -z-10 -top-[225px] hidden md:inline' >
                <img loading='lazy' className='-top-[250px] md:h-[800px] lg:h-[1200px] ' src={require('./Assets/LargeBulbCenterImg.png')} alt="" />
            </picture>

            <h2 className='PrintBoldfont text-xl'>Vehicle Type</h2>

            <VehicleTypeShortDetail />

            {/* Right Small Bulb image */}
            <div className='hidden xl:inline-block absolute top-96 h-[380px] w-full overflow-hidden '>
                <img loading='lazy'
                    className='absolute -scale-x-100 -right-32  h-[380px] -z-10'
                    src={require('../SearchTiles/Assets/BulbIcon.png')}
                    alt=""
                />
            </div>
            <ContainerTiles VehicleTypesSate={VehicleTypesSate} />

        </div>
    )
}
function ContainerTiles({ VehicleTypesSate }) {

    let SliderParent = `flex w-full gap-6 h-fit duration-150 
    justify-start   sm:justify-center 
    flex-row        sm:flex-wrap 
                                        lg:gap-8 
                                        lg:mt-32  xl:mt-52  2xl:mt-64 
    relative        sm:static`;

    return <div className={`w-full h-fit lg:min-h-[900px]  relative mb-16 flex flex-col gap-5 overflow-hidden`}>
        {/* Vehicle Type Background */}
        <picture className='hidden md:inline w-full h-full'>

            <img loading='lazy' src={require('./Assets/VehicleTypeBG.png')}
                className='absolute md:w-[160%] lg:w-[140%] xl:w-[130%] 2xl:w-full -z-10 bottom-1/2 translate-y-1/2 right-1/2 max-h-[900px] translate-x-1/2'
                alt=""
            />
        </picture>

        <CoursesSlider CoursesInfo={VehicleTypesSate} CourseTiles={VehicleTiles} NavigateBtnClass={"VehicleType"}
            ClassNames={SliderParent} SwitchSize="sm" ShowMore={false}
        />

    </div>
}

export default VehicleType