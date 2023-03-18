import React from 'react'
import SideFilters from '../../../../Components/SideFilter/SideFilters'
import StudentFilterArr from './FilterArr'


const StudentFilter = ({ MaxHeight }) => {
    return (
        <SideFilters
            WidthStyle={`${MaxHeight} h-fit w-full`}
            PositionAndIndex="absolute z-30 top-12"
            CustomStyle
            Title="Filter Teachers" FiltersArr={StudentFilterArr} />
    )
}

export default StudentFilter