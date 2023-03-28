import React from 'react'

const ShortDescription = ({ setCourseData, CourseData, Err, setErr }) => {
    const OnChange = e => {
        if (e.target.value === "") {
            setErr({ ...Err, Description: "Course description is required" })
            setCourseData({ ...CourseData, Description: e.target.value })
        }
        else if (e.target.value.length < 100) {
            delete Err.Description
            setErr(Err)
            setCourseData({ ...CourseData, Description: e.target.value })
        } else if (e.target.value.length >= 100) {
            setCourseData({ ...CourseData, Description: e.target.value })
            setErr({ ...Err, Description: "Course description cannot be more than 100 characters" })
        }

    }

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
                    onChange={OnChange}></textarea>
                <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.Description} </p>
                <p className='text-[12px] text-[#070707] text-right'>100 characters</p>
            </span>
        </div>
    )
}

export default ShortDescription