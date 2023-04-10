import React from 'react'
const CourseTitle = ({ setCourseData, CourseData, setErr, Err }) => {
    const OnChange = e => {
        if (e.target.value === "") {
            setErr({ ...Err, CourseName: "Course Title is required" })
            setCourseData({ ...CourseData, CourseName: e.target.value })
        }
        else if (e.target.value.length < 100) {
            delete Err?.CourseName
            setErr(Err)
            setCourseData({ ...CourseData, CourseName: e.target.value })
        } else if (e.target.value.length >= 100) {
            setCourseData({ ...CourseData, CourseName: e.target.value })
            setErr({ ...Err, CourseName: "Course Title cannot be more than 100 characters" })
        }

    }

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
                <textarea className='Add_C_BTextArea' name="" id="" cols="30" rows=""
                    onChange={OnChange}
                    value={CourseData.CourseName}
                ></textarea>
                <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.CourseName} </p>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 100 Characters</p>
            </span>
        </div>
    )
}

export default CourseTitle