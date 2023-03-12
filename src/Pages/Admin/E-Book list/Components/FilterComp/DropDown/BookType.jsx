import React from 'react'
import DropDownOptions from '../../../../../../Components/CustomDropdown/DropDownOption'

export  const BookTypeList = ({ Name, onChange, StateValue }) => {
    const arr = ["Soft Copy", "Hard Copy", "Both"]
    return (
        arr.map(value =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}
export  const DateCreatedList = ({ Name, onChange, StateValue }) => {
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
export  const RatingList = ({ Name, onChange, StateValue }) => {
    const arr = ["Descending", "Ascending"]
    return (
        arr.map(value =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}
export  const PriceList = ({ Name, onChange, StateValue }) => {
    const arr = ["low to high", "high to low"]
    return (
        arr.map(value =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}

 