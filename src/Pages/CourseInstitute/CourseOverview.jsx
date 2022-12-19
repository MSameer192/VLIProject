import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import CourseDetails from './CourseAbout/CourseAbout'
import './CourseOverview.css'
import CourseInstructors from './CourseInstructors/CourseInstructors'
import CourseIntro from './CourseIntro/CourseIntro'
import CourseSyllabus from './CourseSyllabus/CourseSyllabus'
import StudentReviews from './StudentReviews/StudentReviews'
import VehicleDetails from './VehicleDetails/VehicleDetails'
import { useDispatch, useSelector } from 'react-redux'
import { GetCourse } from '../../Actions/CourseA'
const CourseOverview = () => {
    const { InstituteCourseId } = useParams();
    const dispatch = useDispatch();
    const [DivElement, setDivElement] = useState(document.getElementById("PolygonDivHeight"));

    useEffect(() => {
        dispatch(GetCourse(InstituteCourseId))
    }, [InstituteCourseId, dispatch])


    const { loading, CourseInfo } = useSelector((Store) => Store.CourseReducer)
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setDivElement(document.getElementById("PolygonDivHeight"))
        })
        if (!DivElement) {
            setDivElement(document.getElementById("PolygonDivHeight"))
        }
    }, [DivElement])

    
    return (
        !loading? <div className='mt-[80px] relative '>

            <div>

            </div>
            <CourseIntro CourseInfo={CourseInfo} />

            <div id='PolygonDivHeight'
                className='bg-[#3F2663] pt-10'
            >
                <CourseDetails CourseInfo={CourseInfo}/>
                <CourseInstructors InstructorDetails={CourseInfo?.Instructors} />
                <CourseSyllabus />
                <VehicleDetails />
                <StudentReviews />
            </div>
            <Footer FooterBgColor={'#F1FAFF'} />
        </div>
        :<h1 className='mt-20'>Loading</h1>
    )
}

export default CourseOverview