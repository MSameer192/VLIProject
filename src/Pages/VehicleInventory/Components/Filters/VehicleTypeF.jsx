import React from 'react'
import { useSelector } from 'react-redux'

export const VehicleTypeF = () => {
    const { VehicleTypes } = useSelector((Store) => Store.VehicleTypeReducer)
    return (
        <div className='flex flex-col gap-4 w-full'>
            <label className='text-4xs' htmlFor="VehicleType">Vehicle Types</label>
            <select name="VehicleType" defaultValue="VehicleType" className='pb-2 DropDownBorder' id="VehicleType">

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
export const LicenseTypeF = () => {

    const { LicenseTypes } = useSelector((Store) => Store.LicenseTypeReducer)
    return (
        <div className='flex flex-col gap-4 w-full'>
            <label className='text-4xs' htmlFor="LicenseType">License Types</label>
            <select name="LicenseType" defaultValue="LicenseType" className='pb-2 DropDownBorder' id="LicenseType">
                {
                    LicenseTypes.map((value) =>
                        <option key={value.LicenseTypeId} value={value.LicenseTypeId} className='font-normal text-5xs '>{value.LicenseTypeName}</option>
                    )
                }
            </select>
        </div>
    )
}
