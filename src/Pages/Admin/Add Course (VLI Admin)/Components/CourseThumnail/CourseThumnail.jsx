import React from 'react'
import './CourseThumnail.css';
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'
const CourseThumnail = ({ setCourseData, CourseData }) => {
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

            <div className='flex gap-6'>
 
                <ImagePreviewer Id="CourseThumbnail"
                    OnChange={e => setCourseData({ ...CourseData, "CourseThumbnail": e.target.files[0] })}
                />
            </div>
        </div>
    )
}

export default CourseThumnail