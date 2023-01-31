import React from 'react'

const Dropdown = ({ HeadingName, ID }) => {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <label className='text-4xs' htmlFor={ID}>{HeadingName}</label>
            <select name="VehicleType" className='pb-2 DropDownBorder' id={ID}>
                <option value="Type A" className='font-normal text-5xs '>Type A</option>
            </select>
        </div>
    )
}

export default Dropdown