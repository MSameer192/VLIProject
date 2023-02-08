import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import CourseSelection from './Components/CourseSelection/CourseSelection';

import StepsIndicator from './Components/Steps Indicator/Steps Indicator';
import VehicalInventory from './Components/vehicalInventory/VehicalInventory'
import './ownBootstrap.css'
const AddCourseChild = () => {

    return (
        <>
            <CourseSelection />
            <VehicalInventory />
            <StepsIndicator />
        </>
    )
}

const AddCourse = () => {
    useCheckLogin(true, ["Institute"], ["Admin", "Staff"])
    return (
        <InstituteTemplate Element={AddCourseChild} />
    )
}

export default AddCourse