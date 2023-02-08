import React from 'react'
import DropDownOptions from '../../../../../Components/CustomDropdown/DropDownOption'

const BookTypeOptions = ({ Name, onChange, StateValue }) => {
    const Options = ["Hard Copy", "Soft Copy", "Both"]
    return (
        Options.map(value =>
            <DropDownOptions ID={value} key={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}

export default BookTypeOptions