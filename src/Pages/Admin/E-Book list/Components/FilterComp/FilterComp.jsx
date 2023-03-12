import React, { useContext, useState, useEffect } from 'react'
import SideFilters from '../../../../../Components/SideFilter/SideFilters'
import { BookTypeList, DateCreatedList, AlphabeticalOrderList, RatingList, PriceList } from './DropDown/BookType'
import FilterDropDownTemplate from './FilterDropDownTemplate/FilterDropDownTemplate'
import './FilterComp.css'
import { SocketContext } from '../../../../../App'
import { useDispatch } from 'react-redux'
import { FilterCourses } from '../../../../../Actions/Events/FilterA'
const FiltersList = ({ Filters, setFilters, FiltersObj, setFiltersObj }) => {

    const OnChange = (Name, target) => {
        setFiltersObj({ ...FiltersObj, [Name]: target.value })
        setFilters({ ...Filters, [Name]: target.value })
    }

    return <>
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Book Type" Label="Select Book Type" Price
            onChange={target => OnChange("BookType", target)} StateValue={FiltersObj?.BookType}
        />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Book Category" Label="Select Book Category"
            onChange={target => OnChange("E_BookCategory", target)} StateValue={FiltersObj?.E_BookCategory}
        />
        <FilterDropDownTemplate DropDownOptions={DateCreatedList} Title="Sort by Date Created " Label="New to Old"
            onChange={target => OnChange("createdAt", target)} StateValue={FiltersObj?.createdAt}
        />
        <FilterDropDownTemplate DropDownOptions={AlphabeticalOrderList} Title="Filter Alphabeticaly" Label="A to Z"
            onChange={target => OnChange("BookTitle", target)} StateValue={FiltersObj?.BookTitle}

        />
        <FilterDropDownTemplate DropDownOptions={RatingList} Title="Filter by Rating" Label="Ascending"
            onChange={target => OnChange("BookRating", target)} StateValue={FiltersObj?.BookRating}
        />
        <FilterDropDownTemplate DropDownOptions={PriceList} Title="Filter by Price" Label="Low to High"
            onChange={target => OnChange("Price", target)} StateValue={FiltersObj?.Price}
        />

    </>
}


const FilterComp = () => {
    const [Filters, setFilters] = useState([])
    const [FiltersObj, setFiltersObj] = useState({})
    const Dispatch = useDispatch()
    const FilterListPar = () => <FiltersList Filters={Filters} setFilters={setFilters}
        setFiltersObj={setFiltersObj} FiltersObj={FiltersObj} />
    const Socket = useContext(SocketContext);
    const FilterBooks = () => { Socket?.emit("FilterBooks", Filters); Dispatch(FilterCourses(null, "FilterBooksRequest")) }



    useEffect(() => {
        Socket?.on("FilteredBooks", (books) => {
            console.log(books)
            Dispatch(FilterCourses(books, "FilterBooksSuccess"))
        })
    }, [Socket, Dispatch])
    return (
        <div className='flex w-full'>
            <SideFilters Title="Filter Books" TitleStyle="SemiBold text-center text-xs text-[#163235]"
                FiltersArr={FilterListPar}
                WidthStyle="w-full lg:w-[95%] xl:w-11/12"
                OnClick={FilterBooks}
            />
        </div>
    )
}

export default FilterComp