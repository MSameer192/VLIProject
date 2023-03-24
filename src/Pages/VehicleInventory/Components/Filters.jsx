import React, { useRef, useState, useContext } from 'react'
import { useEffect } from 'react'
import { AlphabeticalF, LicenseTypeF, SortByDateF, VehicleTypeF } from './Filters/VehicleTypeF';
import { SocketContext } from '../../../App'
import { GeneralEvent } from '../../../Actions/Events/FilterA';
import { useDispatch } from 'react-redux';
const FIlters = () => {
    const [FilterVal, setFilterVal] = useState()
    const Socket = useContext(SocketContext)
    const FilterRef = useRef();
    const Dispatch = useDispatch()
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


    const OnClick = () => {
        Dispatch(GeneralEvent(null, "GetAllVehiclesRequest"))
        Socket?.emit("FilterVehicles", FilterVal)

    }
    useEffect(() => {
        Socket?.on("FilteredInsVehicles", (data) => {
            Dispatch(GeneralEvent(data, "GetAllVehiclesSuccess"))
        })
    }, [Socket, Dispatch])
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
                    src={require('../../../Components/Header/Components/StudentHeader/Components/RightSide/Assets/CrossIcon.svg').default}
                    alt="cross" />
            </span>

            <div className={`flex flex-col w-11/12 sm:w-full max-w-[400px]  bg-white px-10 py-10 gap-16`}>
                <h4 className='text-2xs font-normal Boldfont'> Filter</h4>
                <div className='flex flex-col gap-9'>
                    {/* <VehicleTypeF onChange={e => setFilterVal({ VehicelTypeFK: e.target.value })} />
                    <LicenseTypeF onChange={e => setFilterVal({ LicenseTypeFK: e.target.value })} /> */}
                    <SortByDateF onChange={e => setFilterVal({ Date: e.target.value })} />
                    <AlphabeticalF onChange={e => setFilterVal({ Model: e.target.value })} />
                </div>

                <button type='button' className='bg-[#A1A3EF] text-white flex items-center justify-center p-4 text-4xs  outline-none border-none rounded-md whitespace-nowrap cursor-pointer relative'
                    onClick={OnClick}>
                    <img className='absolute left-3' src={require('../Assets/Search.svg').default} alt="" />
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default FIlters