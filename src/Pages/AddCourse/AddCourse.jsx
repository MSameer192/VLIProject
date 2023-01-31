import React from 'react'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';

import StepsIndicator from './Components/Steps Indicator/Steps Indicator';
import './ownBootstrap.css'
const AddCourse = () => {
    useCheckLogin(true, "Institute", ["Admin", "Staff"])
    return (
        <>
            <StepsIndicator />
        </>
    )
}

export default AddCourse