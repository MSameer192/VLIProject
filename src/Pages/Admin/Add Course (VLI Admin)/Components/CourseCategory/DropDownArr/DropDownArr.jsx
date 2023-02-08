import React from 'react'
import { useSelector } from 'react-redux'
import DropDownOptions from '../../../../../../Components/CustomDropdown/DropDownOption'

export const VehicleTypeOptions = ({ Name, onChange, StateValue }) => {
    const { VehicleTypes } = useSelector((Store) => Store.VehicleTypeReducer)
    return VehicleTypes.map((value) =>
        <DropDownOptions ID={value.VehicleTypeId} key={value.VehicleTypeId} Text={value.VehicleTypeName} Name={Name} onChange={onChange} StateValue={StateValue} />)
}
export const LicenseTypeOptions = ({ Name, onChange, StateValue }) => {
    const { LicenseTypes } = useSelector((Store) => Store.LicenseTypeReducer)

    return LicenseTypes.map((value) =>
        <DropDownOptions ID={value.LicenseTypeId} key={value.LicenseTypeId} Text={value.LicenseTypeName} Name={Name} onChange={onChange} StateValue={StateValue} />)
}

