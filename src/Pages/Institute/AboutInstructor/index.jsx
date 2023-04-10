import React from 'react'
import EnrolledCourseInfo from '../../EnrolledCourses/Component/EnrolledCourseInfo/EnrolledCourseInfo'
import { useParams } from 'react-router-dom'
import MyCourses from '../../../Components/MyCourses/MyCourses'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import { TeacherInfoButtons } from '../../../PageNames'

const CoursesTeachingChild = () => {

    return (
        <div className='flex flex-col items-center gap-24 relative mb-20'>
            <div className='flex flex-col w-11/12 2xl:w-4/5' >
                <EnrolledCourseInfo />
            </div>
        </div>
    )
}
const CoursesTeachingPage = () => {
    const { InstructorId } = useParams();
    return <MyCourses Component={CoursesTeachingChild} ButtonsInfo={TeacherInfoButtons}
        PageName="CoursesTeaching" Param={InstructorId} HideFooter={true} />
}
const CoursesTeaching = () => {

    return <InstituteTemplate Element={CoursesTeachingPage} BG="white" mt="0" />
}
export default CoursesTeaching