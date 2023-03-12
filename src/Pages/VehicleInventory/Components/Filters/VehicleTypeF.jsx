import React from 'react'
import { useSelector } from 'react-redux'

export const VehicleTypeF = ({ onChange }) => {
    const { VehicleTypes } = useSelector((Store) => Store.VehicleTypeReducer)
    return (
        <div className='flex flex-col gap-4 w-full'>
            <label className='text-4xs' htmlFor="VehicleType">Vehicle Types</label>
            <select name="VehicleType" defaultValue="" className='pb-2 DropDownBorder' id="VehicleType"
                onChange={onChange}
            >
            <option value="" disabled>select Vehicle type</option>

                {
                    VehicleTypes?.map((value) =>
                        <option key={value.VehicleTypeId}
                            value={value.VehicleTypeId} className='font-normal text-5xs '>
                            {value.VehicleTypeName}
                        </option>
                    )
                }
            </select>
        </div>
    )
}
export const LicenseTypeF = ({ onChange }) => {

    const { LicenseTypes } = useSelector((Store) => Store.LicenseTypeReducer)
    return (
        <div className='flex flex-col gap-4 w-full'>
            <label className='text-4xs' htmlFor="LicenseType">License Types</label>
            <select name="LicenseType" defaultValue="" className='pb-2 DropDownBorder' id="LicenseType"
                onCanPlay={onChange}>
                <option value="" disabled>select License Type</option>
                {
                    LicenseTypes.map((value) =>
                        <option key={value.LicenseTypeId} value={value.LicenseTypeId} className='font-normal text-5xs '>{value.LicenseTypeName}</option>
                    )
                }
            </select>
        </div>
    )
}


export const SortByDateF = ({ onChange }) => {
    const SortByDateValue = ["Old to New", "New to Old"]

    return <div className='flex flex-col gap-4 w-full'>
        <label className='text-4xs' htmlFor="SortByDate">Sort by Date</label>
        <select name="SortByDate" defaultValue="" className='pb-2 DropDownBorder' id="SortByDate"
            onChange={onChange}>
            <option value="" disabled>sort by date</option>
            {
                SortByDateValue.map((value) =>
                    <option key={value} value={value} className='font-normal text-5xs '>{value}</option>
                )
            }
        </select>
    </div>
}
export const AlphabeticalF = ({ onChange }) => {
    const SortAlphabeticalValue = ["A to Z", "Z to A"]

    return <div className='flex flex-col gap-4 w-full'>
        <label className='text-4xs' htmlFor="SortAlphabetically">Sort Alphabetically</label>
        <select name="SortAlphabetically" defaultValue="" className='pb-2 DropDownBorder' id="SortAlphabetically"
            onChange={onChange}>
            <option value="" disabled>sort alphabetically</option>
            {
                SortAlphabeticalValue.map((value) =>
                    <option key={value} value={value} className='font-normal text-5xs '>{value}</option>
                )
            }
        </select>
    </div>
}