import React from 'react'
import DropDownOptions from '../../../../../../Components/CustomDropdown/DropDownOption'

const BookTypeList = ({ Name, onChange, StateValue }) => {
    const arr = ["Soft Copy", "Hard Copy", "Both"]
    return (
        arr.map((value) =>
            <DropDownOptions key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}


export default BookTypeList