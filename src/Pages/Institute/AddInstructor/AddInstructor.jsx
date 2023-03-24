import React from 'react'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import InstructorInfo from './Components/InstructorInfo/InstructorInfo'
import InstructorTop from './Components/InstructorTop/InstructorTop'
import './AddInstructor.css'
import { useState } from 'react'
import { AddInstructorA } from '../../../Actions/InstructorA'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetLicenseTypes } from '../../../Actions/CategoryA'
import InstructorPopup from './Components/Popup/InstructorPopup'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'

const AddInstructorChild = () => {
    const { error, loading } = useSelector(Store => Store.InstructorReducer)
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
        Gender: "Gender",
        DOB: "",
        Speciality: "License Type",
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
        Dispatch(GetLicenseTypes())
    }, [Dispatch])
    const SubmitForm = (e) => SubmitInstructorData(e, Dispatch, setSuccess, InstructorData, Err, setErr,)

    useEffect(() => {
        if (error?.response?.data)
            setErr(error?.response?.data)

    }, [error])
    console.log(Success)
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
    console.log("Success Start")
    InstructorFormData.append("IntructorInfo", JSON.stringify(InstructorDataNoImage))

    Dispatch(AddInstructorA(InstructorFormData, setSuccess))
}

const AddInstructor = () => (<InstituteTemplate Element={AddInstructorChild} />)




export default AddInstructor