import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../../../App';
import { GeneralEvent } from '../../../../Actions/Events/FilterA'
const BooksFilter = () => {
    const [FilterValue, setFilterValue] = useState({});
    const Dispatch = useDispatch()
    const Socket = useContext(SocketContext);


    useEffect(() => {
        Socket?.on("FilteredStudentEBooks", data => {

            Dispatch(GeneralEvent(data, "FilterCarouselBooksSuccess"))
        })
    }, [Socket, Dispatch,])



    const OnChange = (e, Name) => {
        
        let Value = { ...FilterValue, [Name]: e.target.value }
        Socket.emit("FilterStudentEBooks", { ...Value });
        setFilterValue(Value)
        Dispatch(GeneralEvent(null, "FilterBooksSuccess"))
    }


    const FilterParentRef = useRef();

    const AddClass = (e) => {
        FilterParentRef.current.classList.toggle("max-h-52")
        FilterParentRef.current.classList.toggle("max-h-0")
    }

    return (
        <div className='flex flex-col justify-center items-center w-full max-w-[1200px] gap-10 py-5 '>
            <button type='button' className='bg-white cursor-pointer border-none text-[#A1A3EF] shadow-[4px_4px_3px_rgba(0,0,0,0.16)] py-4 pl-4 pr-[10px] text-xs'
                onClick={AddClass}>
                Filter Books
                <img src={require('../../Assets/DropDown.svg').default} alt="" />
            </button>

            <div className='flex gap-14 gap-y-16 flex-wrap w-full items-center justify-center overflow-hidden mb-10  h-fit duration-500 ease-in-out  max-h-0'
                ref={FilterParentRef}>

                <BookTypeFilter Value={FilterValue}
                    OnChange={e => OnChange(e, "BookType")} />
                <SortByPrice Value={FilterValue}
                    OnChange={e => OnChange(e, "Price")} />
                <SortByDate Value={FilterValue}
                    OnChange={e => OnChange(e, "createdAt")} />
                <BookCategoryFilter Value={FilterValue}
                    OnChange={e => OnChange(e, "E_BookCategory")}
                />
                <SortByRating Value={FilterValue}
                    OnChange={e => OnChange(e, "BookRating")}
                />
                <FilterAlphabetically Value={FilterValue}
                    OnChange={e => OnChange(e, "BookTitle")}
                />
            </div>
        </div>
    )
}


function BookTypeFilter({ Value, OnChange }) {
    const Options = ["Hard Copy", "Soft Copy", "Both"]

    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>
        <label htmlFor="Filter" className='font-normal text-4xs '>
            Filter by
        </label>
        <select name="" id="Filter" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={OnChange}>
            {Options.map(value => <option key={value} value={value}>{value}</option>)}


        </select>
    </div>

}

function SortByPrice({ Value, OnChange }) {
    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>

        <label htmlFor="Sort" className='font-normal text-4xs'>
            Sort By Price
        </label>

        <select name="" id="Sort" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={(e) => OnChange(e)}
        >
            <option value="ASC">Low to High</option>
            <option value="DESC">High to Low</option>
        </select>

    </div>
}
function SortByDate({ Value, OnChange }) {
    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>

        <label htmlFor="Sort" className='font-normal text-4xs'>
            Sort By Date
        </label>

        <select name="" id="Sort" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={(e) => OnChange(e)}
        >
            <option value="ASC">New to Old</option>
            <option value="DESC">Old to New</option>
        </select>
    </div>
}
function SortByRating({ Value, OnChange }) {
    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>

        <label htmlFor="Sort" className='font-normal text-4xs'>
            Sort By Rating
        </label>

        <select name="" id="Sort" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={(e) => OnChange(e)}
        >
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
        </select>
    </div>
}
function BookCategoryFilter({ Value, OnChange }) {
    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>

        <label htmlFor="Sort" className='font-normal text-4xs'>
            Sort By Book Category
        </label>

        <select name="" id="Sort" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={(e) => OnChange(e)}
        >
            <option value="ASC">Best Sellings</option>
            <option value="DESC">New Arrival</option>
        </select>
    </div>
}
function FilterAlphabetically({ Value, OnChange }) {
    return <div className='flex flex-col gap-2 w-full max-w-[275px] px-1 '>

        <label htmlFor="Sort" className='font-normal text-4xs'>
            Sort By Price
        </label>

        <select name="" id="Sort" className='text-5xs pr-5 w-full border-none outline-none DropDownBorder'
            value={Value}
            onChange={(e) => OnChange(e)}
        >
            <option value="ASC">Best Sellings</option>
            <option value="DESC">New Arrival</option>
        </select>
    </div>
}

export default BooksFilter