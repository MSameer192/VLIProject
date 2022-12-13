import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import CourseDetails from './CourseAbout/CourseAbout'
import './CourseInstitute.css'
import CourseInstructors from './CourseInstructors/CourseInstructors'
import CourseIntro from './CourseIntro/CourseIntro'
import CourseSyllabus from './CourseSyllabus/CourseSyllabus'
import StudentReviews from './StudentReviews/StudentReviews'
import VehicleDetails from './VehicleDetails/VehicleDetails'
const CourseInstitute = () => {
    const { CoursePackagePK } = useParams();

    const [DivElement, setDivElement] = useState(document.getElementById("PolygonDivHeight"));
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setDivElement(document.getElementById("PolygonDivHeight"))
        })
        if (!DivElement) {
            setDivElement(document.getElementById("PolygonDivHeight"))
        }
    }, [DivElement])

    useEffect(() => {
        // console.log(window.location.pathname ==="/course/" + CoursePackagePK)
        // if (window.location.pathname === "/course/" + CoursePackagePK)
        //     document.body.style.backgroundColor = "white"
        // else
        //     document.body.style.backgroundColor = "#4e00eb16"

    }, [CoursePackagePK])
    return (
        <div className='mt-[80px] relative '>
            {/* <div
                style={{ height: (DivElement?.offsetWidth * 3 + (DivElement?.offsetWidth * 3) / 10) + "px" }}
                className='w-full -z-10 absolute bg-[#4B2A7945] overflow-hidden  border-black border-solid'>

                <img
                    style={{ left: (-DivElement?.offsetWidth / 0.85) + "px" }}
                    className='absolute  -left-0 h-full blur-[20px]' src={require('./Assets/Polygon7.svg').default} alt="" />
            </div> */}
            <div>

            </div>
            <CourseIntro />

            <div id='PolygonDivHeight'
            className='bg-[#3F2663] pt-10'
            >
                <CourseDetails />
                <CourseInstructors />
                <CourseSyllabus />
                <VehicleDetails />
                <StudentReviews />
            </div>
            <Footer FooterBgColor={'#F1FAFF'} />
        </div>
    )
}

export default CourseInstitute