import React from 'react'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import InstructorInfo from './Components/InstructorInfo/InstructorInfo'
import InstructorTop from './Components/InstructorTop/InstructorTop'
import './AddInstructor.css'
import { useState } from 'react'
import { AddInstructorA, GetSInstructorA, UpdateInstructorA } from '../../../Actions/InstructorA'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetLicenseTypes } from '../../../Actions/CategoryA'
import InstructorPopup from './Components/Popup/InstructorPopup'
import { useParams } from 'react-router-dom'
import { BaseUrl } from '../../../Actions/Base'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'

const UpdateInstructorChild = () => {
    const { InstructorId } = useParams()
    const { error, loading, SInstructor } = useSelector(Store => Store.InstructorReducer)
    const [InstructorData, setInstructorData] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        PostalCode: "",
        Province: "",
        City: "",
        Email: "",
        PhoneNumber: "",
        GuardianPhoneNumber: "",
        Gender: "",
        DOB: "",
        Speciality: "",
        LicenseNumber: "",
        LicenseExpiry: "",
        SpecialLicenseNumber: "",
        SpecialLicenseExpiry: "",
        ProfileImage: "",
        LicenseImage: "",
        TrainerPermitImage: "",
        SpecialLicenseImage: "",
    });

    const [Success, setSuccess] = useState()
    const [Err, setErr] = useState()
    const Dispatch = useDispatch()


    useCheckLogin(true, ["Institute"], ["Staff", "Admin"])

    useEffect(() => {
        if (InstructorId)
            Dispatch(GetSInstructorA(InstructorId))
    }, [Dispatch, InstructorId])


    useEffect(() => {
        if (Object.entries(SInstructor).length > 0) {

            setInstructorData({
                ...InstructorData, ...SInstructor,
                ProfileImage: `${BaseUrl}/api/images/Instructors?url=${SInstructor?.ProfileImage}`,
                LicenseImage: `${BaseUrl}/api/images/Instructors?url=${SInstructor?.LicenseImage}`,
                TrainerPermitImage: `${BaseUrl}/aps/image/Instructors?url=${SInstructor?.TrainerPermitImage}`,
                SpecialLicenseImage: `${BaseUrl}/api/images/Instructors?url=${SInstructor?.SpecialLicenseImage}`,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SInstructor])

    useEffect(() => {
        Dispatch(GetLicenseTypes())
    }, [Dispatch])

    const SubmitForm = (e) => SubmitInstructorData(e, Dispatch, setSuccess, InstructorData, Err, setErr,)

    useEffect(() => {
        if (error?.response?.data)
            setErr(error?.response?.data)

    }, [error])

    return (
        !loading ?
            <form className='bg-[#F7F7F7] w-full flex flex-col items-center py-10 gap-10'
                onSubmit={SubmitForm}>
                <div className="Intsructor-InputContainer">
                    <InstructorTop />
                    <div className='flex w-full justify-center px-7'>
                        <InstructorInfo InstructorData={InstructorData} setInstructorData={setInstructorData} Err={Err} setErr={setErr} />
                    </div>
                </div>

                <button type='submit'
                    className="Instructor-SubmitBtn"
                >
                    Save and Continue
                </button>
                {Success ? <InstructorPopup /> : null}
            </form>
            : <LoadingSpinner />
    )
}


const SubmitInstructorData = (e, Dispatch, setSuccess, InstructorData, Err, setErr) => {
    e.preventDefault();
    delete InstructorData.Password

    let Errors = {}
    const InstructorFormData = new FormData();
    let InstructorDataNoImage = {}
    for (let [key, value] of Object.entries(InstructorData)) {
        if (!value || (value && `${value}`.trim() === ""))
            Errors[key] = true

        else delete Errors[key]
    }

    setErr({ ...Err, ...Errors })
    console.log({ ...Err, ...Errors })
    if (Object.entries(Errors).length > 0)
        return

    for (let [key, value] of Object.entries(InstructorData)) {
        if (key.indexOf("Image") > -1) InstructorFormData.append(key, value)
        else InstructorDataNoImage = { ...InstructorDataNoImage, [key]: value }
    }

    InstructorFormData.append("IntructorInfo", JSON.stringify(InstructorDataNoImage))

    Dispatch(UpdateInstructorA(InstructorFormData, setSuccess))
}

const UpdateInstructor = () => (<InstituteTemplate Element={UpdateInstructorChild} />)




export default UpdateInstructor