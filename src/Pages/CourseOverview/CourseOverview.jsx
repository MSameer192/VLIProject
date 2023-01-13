import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import CourseAbout from './CourseAbout/CourseAbout'
import './CourseOverview.css'
import CourseInstructors from './CourseInstructors/CourseInstructors'
import CourseIntro from './CourseIntro/CourseIntro'
import CourseSyllabus from './CourseSyllabus/CourseSyllabus'
import StudentReviews from './StudentReviews/StudentReviews'
import VehicleDetails from './VehicleDetails/VehicleDetails'
import { useDispatch, useSelector } from 'react-redux'
import { GetCourse } from '../../Actions/CourseA'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import useGetWishList from '../../Helpers/CustomHooks/useGetWishList'
import { useRef } from 'react'
import NavigationButtons from './NavigationButtons'
import { SelectInView } from './Helpers/SelectInView'
const CourseOverview = () => {
    const { InstituteCourseId } = useParams();
    const { loading, CourseInfo } = useSelector((Store) => Store.CourseReducer)
    const [DivElement, setDivElement] = useState(document.getElementById("PolygonDivHeight"));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCourse(InstituteCourseId))
    }, [InstituteCourseId, dispatch])


    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setDivElement(document.getElementById("PolygonDivHeight"))
        })
        if (!DivElement)
            setDivElement(document.getElementById("PolygonDivHeight"))

    }, [DivElement])
    useGetWishList()
    useCheckLogin();
    const InstructorRef = useRef();
    const CourseSyllabusRef = useRef();
    const VehicleDetailRef = useRef();
    const StudentReviewRef = useRef();
    const CourseDetailRef = useRef();

    const GetInView = () => SelectInView([CourseDetailRef, InstructorRef, CourseSyllabusRef, VehicleDetailRef])

    window.addEventListener('scroll', GetInView, false);
    window.addEventListener('resize', GetInView, false);

    return (
        !loading ? <div className='mt-[80px] relative'>


            <CourseIntro CourseInfo={CourseInfo} />

            <div id='PolygonDivHeight' className='pt-10' >
                <NavigationButtons InstructorRef={InstructorRef} CourseSyllabusRef={CourseSyllabusRef} CourseDetailRef={CourseDetailRef}
                    VehicleDetailRef={VehicleDetailRef} StudentReviewRef={StudentReviewRef} />

                <CourseAbout CourseInfo={CourseInfo} CourseDetailRef={CourseDetailRef} />
                <CourseInstructors InstructorRef={InstructorRef} InstructorDetails={CourseInfo?.Instructors} />
                <CourseSyllabus CourseSyllabusRef={CourseSyllabusRef} CourseSyllabusArr={CourseInfo?.CourseSyllabuses} />
                <VehicleDetails VehicleDetailRef={VehicleDetailRef} />
                {/* <StudentReviews StudentReviewRef={StudentReviewRef} /> */}
                <Footer />
            </div>
        </div>
            : <h1 className='mt-20'>Loading</h1>
    )
}

export default CourseOverview