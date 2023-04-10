import React from 'react'
import './CourseThumnail.css';
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'
const CourseThumnail = ({ setCourseData, CourseData, setErr, Err }) => {
    const OnChange = e => {
        if (e.target.files.length > 0) {
            delete Err?.CourseThumbnail
            setErr(Err)
            setCourseData({ ...CourseData, "CourseThumbnail": e.target.files[0] })
        }
        else if (e.target.files.length <= 0)
            setErr({ ...Err, CourseThumbnail: "Course thumbnail is required" })
    }
    return (
        <div className='DataInputContainer'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Add a Course Thumbnail
                </h3>
                <p className='InputDetails'>
                    Thumbnail represents the first impression of the course
                </p>
            </span>

            <div className='flex flex-col gap-6'>

                <ImagePreviewer Id="CourseThumbnail"
                    OnChange={OnChange}
                    ImgUrl={CourseData.CourseThumbnail}
                />
                <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.CourseThumbnail} </p>
            </div>
        </div>
    )
}

export default CourseThumnail