import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate'
import EnrolledCourseInfo from '../EnrolledCourses/Component/EnrolledCourseInfo/EnrolledCourseInfo'
import SEnrolledCourseInfo from '../SingleEnrolledCourse/Components/EnrolledCourseInfo/EnrolledCourseInfo'


const EnrolledCourseInsChild = () => {
    return ( 
        <div className='flex flex-col items-center gap-24'>
            <div className='flex flex-col w-11/12 2xl:w-4/5'>
                <EnrolledCourseInfo />
            </div> 
            <div className='flex items-center justify-center'>
                <SEnrolledCourseInfo />
            </div>
        </div>
    )
}
const EnrolledCourseIns = () => {
    return (<InstituteTemplate Element={EnrolledCourseInsChild} />)
}

export default EnrolledCourseIns