import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Dropdown from './Dropdown'
import { LicenseTypeF, VehicleTypeF } from './Filters/VehicleTypeF';

const FIlters = () => {
    const FilterRef = useRef();

    const HideFilter = (e) => {
        if (e.currentTarget === e.target) {
            e.target.parentNode.style.height = "0px"
            e.target.parentNode.style.minHeight = "0px"
        }
    }
    window.addEventListener("resize", () => {
        const VehicleFilter = document.getElementById("VehicleFilter")

        if (window.innerWidth >= 640) {
            VehicleFilter.style.minHeight = "auto"
            VehicleFilter.style.height = "auto"
            VehicleFilter.style.display = "flex"
        } else {
            VehicleFilter.style.minHeight = "0px"
            VehicleFilter.style.height = "0px"
        }
    })
    useEffect(() => {
        if (window.innerWidth < 640) {
            FilterRef.current.style.minHeight = "0px"
            FilterRef.current.style.height = "0px"
        }
    }, [])
    return (
        <div className={`top-0 flex  justify-center items-center duration-200 overflow-hidden
        w-full                  sm:w-full       md:w-11/12
        
        z-30                    sm:z-0
        fixed                   sm:relative
        rounded-b-[70px]        sm:rounded-none 
        SideBarBG`}

            id="VehicleFilter"
            ref={FilterRef}>

            <span className='bg-[#A1A3EF] absolute right-12 top-5 flex justify-center items-center rounded-[17px] sm:hidden cursor-pointer'
                onClick={HideFilter}>
                <img className='p-3 pointer-events-none'
                    src={require('../../../Components/Header/Components/StudentHeader/RightSideAssets/CrossIcon.svg').default}
                    alt="cross" />
            </span>

            <div className={`flex flex-col w-11/12 sm:w-full max-w-[400px]  bg-white px-10 py-10 gap-16`}>
                <h4 className='text-2xs font-normal Boldfont'> Filter</h4>
                <div className='flex flex-col gap-9'>
                    <VehicleTypeF />
                    <LicenseTypeF />
                    <Dropdown HeadingName="Sort by Date Modified" ID="New to Old" />
                    <Dropdown HeadingName="Filter by Alphabetic Order" ID="A to Z" />
                </div>

                <button type='button' className='bg-[#A1A3EF] text-white flex items-center justify-center p-4 text-4xs  outline-none border-none rounded-md whitespace-nowrap cursor-pointer relative'>
                    <img className='absolute left-3' src={require('../Assets/Search.svg').default} alt="" />
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default FIlters