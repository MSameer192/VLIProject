import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResetLoginSignUp } from '../../../../Actions/ToggleSignupA'
import { RegisterInstituteA } from '../../../../Actions/UserA'
import { SubmitButton } from '../../LoginAndRegister'
import InstituteDocuments from './Components/InstituteDocuments'
import InstituteTimings from './Components/InstituteTimings'
import InstituteUserInfo from './Components/InstituteUserInfo'
import { CenterORline } from '../UserSigning/UserSigning'
import InstituteInfo from './Components/InstituteInfo';
import './InstituteSide.css'
import { SubmitFormData } from './Helpers/SubmitForm'
import { ValidateInstituteInfo } from './Helpers/FieldsValidations'
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner'
const InstituteSide = () => {
    const [LeftPosition, setLeftPosition] = useState();
    const { error, loading } = useSelector((Store) => Store.LoginSignupReducer)
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

    const DocumentRef = useRef();
    const UserInfoRef = useRef();
    const TimingRef = useRef();



    useEffect(() => {
        if (Success)
            Dispatch(ResetLoginSignUp(false))
    }, [Dispatch, Success])


    useEffect(() => {
        setErr({ ...error, ...Err })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])


    const OnSubmit = e => SubmitFormData(e, Dispatch, InstituteData, setSuccess, setErr, Err);

    const OnClick = (Pos, EleRef) => {
        const KeyNamesArr = [
            { key: "InstituteName", Name: "Institute Name" },
            { key: "Address", Name: "Address", },
            { key: "TotalInstructors", Name: "Total Instructors", },
            { key: "TotalVehicles", Name: "Total Vehicles", },
            { key: "MOTR_Slip", Name: "Ministry of Transportation Registration Slip", },
            { key: "InstituteLogo", Name: "Institute Logo", },
            { key: "LR_Slip", Name: "Local Registration Slip", },
            { key: "Institute_Banner", Name: "Institute Banner", },
        ];

        let CheckErrs = ValidateInstituteInfo(InstituteData, setErr, Err, KeyNamesArr)
        if (!CheckErrs) {
            EleRef.current.style.display = "flex"
            setLeftPosition(Pos)
        }
    }

    useEffect(() => {
        if (Err.InstituteName) {
            setLeftPosition(0)
        }
    }, [Err])
   
    return (
        !loading
            ? <div className='InstituteSideParent'>
                <button type="button" className='p-3 md:hidden cursor-pointer rounded-xl border-none bg-[#A1A3EF] flex items-center justify-center absolute right-6 top-2 z-10'
                    onClick={() => Dispatch(ResetLoginSignUp(false))}
                >
                    <img className=' cursor-pointer' src={require('../../Assets/CrossIcon.svg').default} alt="" />
                </button>
                <form
                    style={{ left: `-${LeftPosition}%` }}
                    className='min-w-[300%] flex items-start relative left-0 duration-300'
                    onSubmit={OnSubmit}>

                    <div className='w-[33.33%] flex flex-col xl:flex-row' ref={DocumentRef} >


                        <InstituteDocuments
                            InstituteData={InstituteData}
                            setInstituteData={setInstituteData}
                            setErr={setErr} Err={Err}
                        />
                        <CenterORline Visible={false} />
                        <InstituteInfo
                            InstituteData={InstituteData} setInstituteData={setInstituteData}
                            UserInfoRef={UserInfoRef} OnClick={OnClick}
                            Err={Err} setErr={setErr}

                        />


                        <span className='xl:hidden order-7 flex w-full items-center justify-center mt-20'>
                            <SubmitButton AuthPageName="Next" ButtonType="button" OnClickFun={() => {
                                OnClick(100, UserInfoRef);
                                DocumentRef.current.style.height = "0px";
                            }} />

                        </span>

                    </div>



                    <div className='w-[33.33%] items-start justify-start px-5' ref={UserInfoRef}>
                        <InstituteUserInfo OnSuccess={OnClick} TimingRef={TimingRef} Success={Success} setInstituteData={setInstituteData} InstituteData={InstituteData} Err={Err} setErr={setErr} />
                    </div>




                    <div className='w-[33.33%]  items-center justify-center hidden' ref={TimingRef}>
                        <InstituteTimings OnClick={OnClick} />
                    </div>



                </form>

            </div>
            : <LoadingSpinner />

    )
}

export default InstituteSide