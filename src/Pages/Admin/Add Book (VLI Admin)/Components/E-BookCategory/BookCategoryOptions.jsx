import React from 'react'
import DropDownOptions from '../../../../../Components/CustomDropdown/DropDownOption'

const BookCategoryOptions = ({ Name, onChange, StateValue }) => {
    const Options = ["Type 1", "Type 2"]
    return (
        Options.map(value =>
            <DropDownOptions ID={value} key={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}

export default BookCategoryOptions