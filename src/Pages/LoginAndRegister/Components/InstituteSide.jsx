import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterInstituteA } from '../../../Actions/UserA'
import { SubmitButton } from '../LoginAndRegister'
import InstituteDocuments from './InstituteSide/InstituteDocuments'
import InstituteInfo from './InstituteSide/InstituteInfo'
import InstituteTimings from './InstituteSide/InstituteTimings'
import InstituteUserInfo from './InstituteSide/InstituteUserInfo'
import { CenterORline } from './UserSigning'

const InstituteSide = () => {
    const [LeftPosition, setLeftPosition] = useState();
    const { error } = useSelector((Store) => Store.LoginSignupReducer)
    const [InstituteData, setInstituteData] = useState({
        InstituteName: "",
        WebsiteUrl: "",
        Address: "",
        TotalInstructors: "",
        TotalVehicles: "",
        MOTR_Slip: "",
        InstituteLogo: "",
        LR_Slip: "",
        Institute_Banner: "",

        FirstName: "",
        LastName: "",
        Email: "",
        Country: "",
        State: "",
        City: "",
        PhoneNumber: "",
        Password: ""
    });
    const [Success, setSuccess] = useState()
    const Dispatch = useDispatch();
    const [Err, setErr] = useState({});
    const CheckNext = (Arr) => {
        let Check = true;

        Arr.forEach((value) => {
            if (InstituteData[value] === "" && value !== "WebsiteUrl")
                Check = false

        })
        return Check
    }

    const OnClick = (Pos, EleRef, Arr) => {
        if (CheckNext(Arr)) {
            setLeftPosition(Pos)
            // EleRef.current.style.display = "flex"
        }
    }
    useEffect(() => {
        setErr(error)
    }, [error])
    const DocumentRef = useRef();
    const UserInfoRef = useRef();
    const TimingRef = useRef()
    const OnSubmit = e => SubmitFormData(e, Dispatch, InstituteData, setSuccess)
    return (
        <div className='w-full h-fit flex items-start overflow-hidden'>
            <form
                style={{ left: `-${LeftPosition}%` }}
                className='min-w-[300%] flex items-start relative left-0 duration-300'
                onSubmit={OnSubmit}>

                <div className='w-[33.33%] flex items-center justify-center flex-col xl:flex-row ' ref={DocumentRef} >
                    <InstituteDocuments InstituteData={InstituteData} setInstituteData={setInstituteData} />
                    <CenterORline Visible={false} />
                    <InstituteInfo
                        InstituteData={InstituteData} setInstituteData={setInstituteData} UserInfoRef={UserInfoRef} OnClick={OnClick}
                        Err={Err} setErr={setErr}
                    />
                    <span className='xl:hidden order-7 flex w-full items-center justify-center mt-10'>
                        <SubmitButton AuthPageName="Next" ButtonType="button" OnClick={() => OnClick(100, UserInfoRef, "Arr")}
                        />
                    </span>
                </div>


                <div className='w-[33.33%] items-center justify-center' ref={UserInfoRef}>
                    <InstituteUserInfo OnSuccess={OnClick} TimingRef={TimingRef} Success={Success} setInstituteData={setInstituteData} InstituteData={InstituteData} />
                </div>


                <div className='w-[33.33%]  items-center justify-center hidden' ref={TimingRef}>
                    <InstituteTimings OnClick={OnClick} />
                </div>
            </form>

        </div>


    )
}
const SubmitFormData = (e, Dispatch, InstituteData, setSuccess) => {
    e.preventDefault();
    let InstituteDataNoImage = {};
    let Errors = {};
    let Images = ["MOTR_Slip", "InstituteLogo", "LR_Slip", "Institute_Banner"]
    const InstituteFormData = new FormData()
    for (let [key, value] of Object.entries(InstituteData)) {
        if (!value || (value && `${value}`.trim() === ""))
            Errors[key] = true

        else delete Errors[key]
    }

    for (let [key, value] of Object.entries(InstituteData)) {
        if (Images.indexOf(key) > -1) {
            InstituteFormData.append(key, value)
        }
        else
            InstituteDataNoImage = { ...InstituteDataNoImage, [key]: value }
    }
    InstituteFormData.append("InstituteData", JSON.stringify(InstituteDataNoImage))
    console.log(InstituteDataNoImage)
    Dispatch(RegisterInstituteA(InstituteFormData, () => setSuccess(true)))

}
export default InstituteSide