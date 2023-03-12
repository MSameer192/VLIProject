import React from 'react'

const ShortDescription = ({ setCourseData, CourseData }) => {
    return (
        <div className='DataInputContainer'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Short Description
                </h3>
                <p className='InputDetails'>
                    Add a short detail about the course in here
                </p>
            </span>

            <span className='max-w-[780px] Add_C_B_InputSideContainer'>
                <textarea className='h-28 Add_C_BTextArea' name="" id="" cols="30" rows="10"
                    onChange={e => setCourseData({ ...CourseData, "Description": e.target.value })}></textarea>
                <p className='text-[12px] text-[#070707] text-right'>100 characters</p>
            </span>
        </div>
    )
}

export default ShortDescription