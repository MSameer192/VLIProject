import React, { useEffect, useState } from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import CoursePricing from './Components/CourseSelection/CourseSelection';
import StepsIndicator from './Components/Steps Indicator/Steps Indicator';
import CourseSelection from './Components/vehicalInventory/CourseSelection'
import CourseDetails from './Components/CourseDetails/CourseDetails'
import SelectVehicle from './Components/Description/SelectVehicle'
import InstructorsSelection from './Components/Instructors Selection/Instructors Selection'
// import AdminApprovedCourses from './Components/adminApprovedCourses/AdminApprovedCourses'

import './ownBootstrap.css'
import { useDispatch } from 'react-redux';
import { CreateCoursesA } from '../../Actions/CourseA';
import { useLocation } from 'react-router-dom';
const AddCourseChild = () => {
    const [Success, setSuccess] = useState()
    const [CourseData, setCourseData] = useState({
        CourseSyllabus: [{ CourseDescription: "" }],
        ClassSchedule: [{ ClassDescription: "", ClassNumber: "", WeekNumber: "" }],
        Instructors: [],
        Possible_FAQs: [""]
    });

    const [Err, setErr] = useState();
    const [Steps, setSteps] = useState(1);

    const Dispatch = useDispatch()
    useCheckLogin(true, ["Institute"], ["Admin", "Staff"])

    const SubmitForm = (e) => SubmitCourseData(e, Dispatch, CourseData, setSuccess)

    const location = useLocation();


    useEffect(() => {
        if (typeof location?.state?.CoursePK === "string" && location?.state?.CoursePK !== undefined) {
            setCourseData({ ...CourseData, CourseFK: location?.state?.CoursePK })
            setSteps(2)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])
    useEffect(() => {
        window.scroll(0, 0)
    }, [Steps])


    return (

        <form onSubmit={SubmitForm} onClick={e => e.stopPropagation()}>
            <CourseSelection Steps={Steps} CourseData={CourseData} setCourseData={setCourseData} setSteps={setSteps} StepsIndicator={StepsIndicator} PageNo={1} />

            <CoursePricing
                Steps={Steps} setSteps={setSteps}
                CourseData={CourseData} setCourseData={setCourseData}
                Err={Err} setErr={setErr}
                StepsIndicator={StepsIndicator} PageNo={2}
            />



            <CourseDetails
                Steps={Steps} setSteps={setSteps}
                CourseData={CourseData} setCourseData={setCourseData}
                Err={Err} setErr={setErr}
                StepsIndicator={StepsIndicator} PageNo={3}
            />

            <SelectVehicle
                Steps={Steps} setSteps={setSteps}
                CourseData={CourseData} setCourseData={setCourseData}
                StepsIndicator={StepsIndicator} PageNo={4}
            />

            <InstructorsSelection Steps={Steps} CourseData={CourseData} setCourseData={setCourseData} setSteps={setSteps} StepsIndicator={StepsIndicator} PageNo={5} Success={Success}
            />
        </form>
    )
}


const SubmitCourseData = (e, Dispatch, CourseData, setSuccess) => {
    e.preventDefault();
    const CourseFormData = new FormData()
    CourseFormData.append("CourseData", JSON.stringify(CourseData))
    Dispatch(CreateCoursesA(CourseFormData, setSuccess))
}





const AddCourse = () => <InstituteTemplate Element={AddCourseChild} />



export default AddCourse