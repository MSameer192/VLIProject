import React from 'react'

import './CourseEnrollment.css'
import EnrollmentSteps from './EnrollmentSteps/EnrollmentSteps'
import Packages from './Packages/Packages'
import Payment from './Payment/Payment'
import TopPart from './TopPart/TopPart'
import UserInfo from './UserInfo/UserInfo'
import Footer from '../../Components/Footer/Footer'
import TimeSlots from './TimeSlots/TimeSlots'
import { useState } from 'react'
const CourseEnrollment = () => {
    const [ShowTimeSlots, setShowTimeSlots] = useState(false);
    const SubmitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className='mt-20'>
            <TimeSlots ShowTimeSlots={ShowTimeSlots} setShowTimeSlots={setShowTimeSlots} />
            <TopPart />
            <EnrollmentSteps />
            <form onSubmit={SubmitForm} >
                <UserInfo />
                <Packages />
                <button onClick={() => { setShowTimeSlots(true) }}>Show Time Slots</button>
                <Payment />
            </form>
            <Footer FooterBgColor='#F6F5F5' />
        </div>
    )
}

export default CourseEnrollment