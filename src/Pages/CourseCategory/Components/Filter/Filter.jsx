import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GeneralEvent } from '../../../../Actions/Events/GeneralEvent';
import { SocketContext } from '../../../../App';

import './Filter.css'
const Filter = () => {
    const [FilterValue, setFilterValue] = useState();
    const { Courses } = useSelector((Store) => Store.CourseReducer)
    const { LicenseTypeId } = useParams()
    const Dispatch = useDispatch()
    const Socket = useContext(SocketContext);


    const SortOnChange = (e) => {
        setFilterValue(e.target.value)
        if (LicenseTypeId)
            Socket.emit("LicenseSortCourse", { LicenseTypeId: Courses?.LicenseTypeId, FilterValue: e.target.value })
        else
            Socket.emit("VehicleSortCourse", { VehicleTypeId: Courses?.VehicleTypeId, FilterValue: e.target.value })
        Dispatch(GeneralEvent(null, "LicenceTypeCoursesRequest"))
    }

    useEffect(() => {

        Socket?.on("ReceiveSortedCourse", data => {
            Dispatch(GeneralEvent(data, "LicenceTypeCoursesSuccess"))
        })
    }, [Socket, Dispatch, Courses])



    const FilterParentRef = useRef();

    const AddClass = (e) => {
        e.target.classList.toggle("bg-white")
        e.target.classList.toggle("text-[#A1A3EF]")
        FilterParentRef.current.classList.toggle("max-h-0")
        FilterParentRef.current.classList.toggle("max-h-52")
    }
    return (
        <div className='flex flex-col relative left-1/2 -translate-x-1/2 justify-center items-center w-1/2 max-w-[1000px] gap-10 py-5'>

            <button type='button' className="text-xs bg-[#A1A3EF] border-none px-8 py-2 text-white rounded-xl 
            cursor-pointer w-fit duration-300"
                onClick={AddClass}>
                Filter
            </button>

            <div className='flex gap-3 w-full items-center justify-center overflow-hidden  h-fit duration-500 ease-in-out max-h-[0px]'
                ref={FilterParentRef}>

                <SortBy setFilterValue={setFilterValue} FilterValue={FilterValue} SortOnChange={SortOnChange} />


                <FilterComp />


            </div>
        </div>
    )
}

function SortBy({ FilterValue, SortOnChange }) {
    return <div className='flex flex-col items-center gap-2 w-full max-w-[300px] px-1 '>

        <label htmlFor="Sort" className='SemiBold text-3xs '>
            Sort By
        </label>

        <select name="" id="Sort" className='text-3xs pr-5 w-full border-none outline-none DropDownBorder'
            value={FilterValue}
            onChange={(e) => SortOnChange(e)}
        >
            <option value="Most_Relevant">Most relevant</option>
            <option value="Most_Recent">Newly listed</option>
            <option value="High_Price">Highest price</option>
            <option value="Low_price">Lowest price</option>
        </select>

    </div>
}

function FilterComp() {
    return <div className='flex flex-col items-center gap-2 w-full max-w-[300px] px-1 '>
        <label htmlFor="Filter" className='SemiBold text-3xs '>
            Filter by
        </label>
        <select name="" id="Filter" className='text-3xs pr-5 w-full border-none outline-none DropDownBorder'>
            <option value="">Location</option>
            <option value="">Old to New</option>
        </select>
    </div>

}
export default Filter