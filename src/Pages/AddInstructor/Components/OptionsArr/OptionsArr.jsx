import React from 'react'
import { useSelector } from 'react-redux'

export const GenderOptions = () => {
    const Gender = [
        { value: "Male", Text: "Male" },
        { value: "Female", Text: "Female" },
        { value: "Female", Text: "Female" },
    ]
    return Gender?.map(({ value, Text }) => <option value={value} key={value + Math.random()}>{Text}</option>)

}
export const LicenseTypesOption = () => {
    const { LicenseTypes } = useSelector((Store) => Store.LicenseTypeReducer)
    return LicenseTypes?.map(value=> <option value={value.LicenseTypeId} key={value.LicenseTypeId}>{value.LicenseTypeName}</option>)

}
