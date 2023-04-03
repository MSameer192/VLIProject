import React from 'react'
import DropDown from '../../../../../../../Components/CustomDropdown/DropDown'
import { AlphabeticalOrderList, DateModifiedArr, LicenseTypeArr, VehicleTypeArr } from './DropdownArr'

const FilterArr = ({ FiltersObj, setFiltersObj, Filters, setFilters }) => {

    const OnChange = (target, Text, key) => {

        setFilters({ ...Filters, [key]: target.value })
        setFiltersObj({ ...FiltersObj, [key]: Text })
    }
    return (
        <>
            <span className='flex flex-col gap-[18px]'>
                <h3 className='font-normal text-4xs border-[#0000001a]'>Vehicle Type</h3>
                <DropDown Label="Type L" TextStyle="text-5xs" styles="VehicleFilterBorder"
                    DropDownOptions={VehicleTypeArr}
                    StateValue={FiltersObj?.VehicleTypeFK}
                    onChange={(target, Text) => OnChange(target, Text, "VehicleTypeFK")}
                />
            </span>
            <span className='flex flex-col gap-[18px]'>
                <h3 className='font-normal text-4xs border-[#0000001a]'>License Type</h3>
                <DropDown Label="License Type G" TextStyle="text-5xs" styles="VehicleFilterBorder"
                    DropDownOptions={LicenseTypeArr}
                    StateValue={FiltersObj?.LicenseTypeFK}
                    onChange={(target, Text) => OnChange(target, Text, "LicenseTypeFK")}
                />
            </span>
            <span className='flex flex-col gap-[18px]'>
                <h3 className='font-normal text-4xs border-[#0000001a]'>Sort by Date Modified</h3>
                <DropDown
                    Label="New to Old"
                    TextStyle="text-5xs"
                    styles="VehicleFilterBorder"
                    DropDownOptions={DateModifiedArr}
                    StateValue={FiltersObj?.createdAt}
                    onChange={(target, Text) => OnChange(target, Text, "createdAt")}
                />
            </span>
            <span className='flex flex-col gap-[18px]'>
                <h3 className='font-normal text-4xs border-[#0000001a]'>Filter by Alphabetic Order</h3>
                <DropDown Label="A to Z" TextStyle="text-5xs" styles="VehicleFilterBorder"
                    DropDownOptions={AlphabeticalOrderList}
                    StateValue={FiltersObj?.CourseName}
                    onChange={(target, Text) => OnChange(target, Text, "CourseName")}
                />
            </span>

        </>
    )
}

export default FilterArr