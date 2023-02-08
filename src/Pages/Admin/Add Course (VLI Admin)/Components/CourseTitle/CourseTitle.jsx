import React from 'react'
const CourseTitle = ({ setCourseData, CourseData }) => {
    return (

        <div className='DataInputContainer mb-14'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Add a Course Title
                </h3>
                <p className='InputDetails'>
                    your title is the most important place the title should be Unique and Clear
                </p>
            </span>

            <span className='max-w-[730px] h-28 Add_C_B_InputSideContainer'>
                <textarea className='Add_C_BTextArea' resi name="" id="" cols="30" rows="10"
                    onChange={e => setCourseData({ ...CourseData, "CourseName": e.target.value })}
                ></textarea>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 180 Characters</p>
            </span>
        </div>
    )
}

export default CourseTitle