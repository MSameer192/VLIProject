import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetLicenseTypes, GetVehicleTypes } from '../../../../../../../Actions/CategoryA'
import DropDownOptions from '../../../../../../../Components/CustomDropdown/DropDownOption'

export const VehicleTypeArr = ({ Name, onChange, StateValue }) => {
    const { VehicleTypes } = useSelector((Store) => Store.VehicleTypeReducer)
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(GetVehicleTypes())
    }, [Dispatch])
    return (
        VehicleTypes?.map((value) =>
            <DropDownOptions key={value.VehicleTypeId} ID={value.VehicleTypeId} Text={value.VehicleTypeName} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}
export const LicenseTypeArr = ({ Name, onChange, StateValue }) => {
    const { LicenseTypes } = useSelector((Store) => Store.LicenseTypeReducer)
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(GetLicenseTypes())
    }, [Dispatch])

    return (
        LicenseTypes?.map((value) =>
            <DropDownOptions key={value.LicenseTypeId} ID={value.LicenseTypeId} Text={value.LicenseTypeName} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}


export const DateModifiedArr = ({ Name, onChange, StateValue }) => {
    const arr = ["new to old", "old to new"]
    return (
        arr.map(value =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}

export  const AlphabeticalOrderList = ({ Name, onChange, StateValue }) => {
    const arr = ["A to Z", "Z to A"]
    return (
        arr.map(value =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}