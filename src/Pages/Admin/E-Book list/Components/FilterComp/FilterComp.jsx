import React from 'react'
import SideFilters from '../../../../../Components/SideFilter/SideFilters'
import BookTypeList from './DropDown/BookType'
import FilterDropDownTemplate from './Template/Template'
import './FilterComp.css'
const FiltersList = () => {
    return <>
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Book Type" Label="Select Book Type" />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Book Category" Label="Select Book Category" />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="New to Old" Label="Sort by Date Created " />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="A to Z" Label="Filter by Alphabetic Order" />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Ascending" Label="Filter by Rating" />
        <FilterDropDownTemplate DropDownOptions={BookTypeList} Title="Low to High" Label="Filter by Price" />

    </>
}


const FilterComp = () => {
    return (
        <div>
            <SideFilters Title="Filter Books" TitleStyle="SemiBold text-center text-xs text-[#163235]"
                FiltersArr={FiltersList}

            />
        </div>
    )
}

export default FilterComp