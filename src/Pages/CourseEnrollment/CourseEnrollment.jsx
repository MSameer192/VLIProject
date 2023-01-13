import React, { useEffect, useState } from 'react'
import './CourseEnrollment.css'
import EnrollmentSteps from './EnrollmentSteps/EnrollmentSteps'
import Packages from './Packages/Packages'
import Payment from './Payment/Payment'
import TopPart from './TopPart/TopPart'
import UserInfo from './UserInfo/UserInfo'
import Footer from '../../Components/Footer/Footer'
import TimeSlots from './TimeSlots/TimeSlots'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import { useDispatch } from 'react-redux';
import { useRef } from 'react'
import { SubmitForm } from './Helpers'
import { usePageLoadCheckers } from './Helpers/PageLoadCheckers'
import { useLocation, useNavigate } from 'react-router-dom'


const CourseEnrollment = () => {
    const location = useLocation();
    const Dispatch = useDispatch()

    const [ShowTimeSlots, setShowTimeSlots] = useState(false);
    const [EnrollmentData, setEnrollmentData] = useState({
        StudentData: {
            FirstName: "",
            LastName: "",
            Address: "",
            PostalCode: "",
            Province: "",
            City: "",
            DOB: "",
            PhoneNumber: "",
            Email: "",
            Gender: "",
            FreeHours: [{ Start: { hh: "", mm: "", AM: "" }, End: { hh: "", mm: "", AM: "" } }],
            Schedule: { Monday: undefined, Tuesday: undefined, Thursday: undefined, Wednesday: undefined, Friday: undefined },

        },
        Package: {},
    });
    const [Err, setErr] = useState({})

    useCheckLogin();
    const Navigate = useNavigate()
    const PackageRef = useRef(null);
    usePageLoadCheckers(location, EnrollmentData, setEnrollmentData)
 
    return (
        <div className='mt-20'>
            <TopPart />

            <TimeSlots ShowTimeSlots={ShowTimeSlots} setShowTimeSlots={setShowTimeSlots}
                setEnrollmentData={setEnrollmentData} EnrollmentData={EnrollmentData} Err={Err} setErr={setErr} />

            <EnrollmentSteps />

            <form onSubmit={(e) => SubmitForm(e, EnrollmentData, Err, setErr, Dispatch,Navigate)} >

                <UserInfo setEnrollmentData={setEnrollmentData} EnrollmentData={EnrollmentData} PackageRef={PackageRef}
                    Err={Err} setShowTimeSlots={setShowTimeSlots} />

                <Packages setEnrollmentData={setEnrollmentData} EnrollmentData={EnrollmentData} PackageRef={PackageRef} />

                <Payment />

            </form>
            <Footer FooterBgColor='#F6F5F5' />
        </div>
    )
}

export default CourseEnrollment