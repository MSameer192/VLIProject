import React, { useEffect, useRef } from 'react'
import { SubmitButton } from '../../LoginAndRegister'

const InstituteUserInfo = ({ OnSuccess, TimingRef, InstituteData, setInstituteData, Success, Err, setErr }) => {
    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg max-w-[650px] shadow-[3px_4px_4px_#00000040]
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;
    const DivRef = useRef()

    useEffect(() => {
        if (Success === true) {
            const Arr = ["FirstName", "LastName", "EmailAddress", "Country", "State", "City", "PhoneNumber"]
            OnSuccess(200, TimingRef, Arr)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Success])

    const OnChange = (e, Name) => {
        setInstituteData({ ...InstituteData, [Name]: e.target.value });
        console.log(e.target.value === "")
        if (e.target.value === "")
            setErr({ ...Err, [Name]: true })
        else if (e.target.value !== "") {
            delete Err?.[Name]
            setErr({ ...Err })
        }

    }
    return (
        <div className='flex flex-col items-center w-full' ref={DivRef}>
            <div className='flex flex-col items-center gap-[6px] py-5 mb-24'>
                <span className="flex w-full gap-12 max-w-[650px]">

                    <InputTemplate type="text" value={InstituteData?.FirstName} id="FirstName"
                        OnChange={e => OnChange(e, "FirstName")} placeholder="First Name" Name="First Name"
                        InputBoxStyle={InputBoxStyle} Err={Err?.FirstName} />

                    <InputTemplate type="text" value={InstituteData?.LastName} id="LastName"
                        OnChange={e => OnChange(e, "LastName")} placeholder="Last Name" Name="Last Name"
                        InputBoxStyle={InputBoxStyle} Err={Err?.LastName} />
                </span>


                <InputTemplate type="email" value={InstituteData?.Email} id="Email"
                    OnChange={e => OnChange(e, "Email")} placeholder="Email Address" Name="Email Address"
                    InputBoxStyle={InputBoxStyle} Err={Err?.Email} />


                <InputTemplate type="text" value={InstituteData?.Country} id="Country"
                    OnChange={e => OnChange(e, "Country")} placeholder="Country" Name="Country"
                    InputBoxStyle={InputBoxStyle} Err={Err?.Country} />


                <span className="flex w-full gap-12 max-w-[650px]">
                    <InputTemplate type="text" value={InstituteData?.State} id="State"
                        OnChange={e => OnChange(e, "State")} placeholder="State" Name="State"
                        InputBoxStyle={InputBoxStyle} Err={Err?.State} />
                    <InputTemplate type="text" value={InstituteData?.City} id="City"
                        OnChange={e => OnChange(e, "City")} placeholder="City" Name="City"
                        InputBoxStyle={InputBoxStyle} Err={Err?.City} />

                </span>

                <InputTemplate type="text" value={InstituteData?.PhoneNumber} id="PhoneNumber"
                    OnChange={e => OnChange(e, "PhoneNumber")} placeholder="Phone Number" Name="Phone Number"
                    InputBoxStyle={InputBoxStyle} Err={Err?.PhoneNumber} />

                <InputTemplate type="password" value={InstituteData?.Password} id="PhoneNumber"
                    OnChange={e => OnChange(e, "Password")} placeholder="Password" Name="Password"
                    InputBoxStyle={InputBoxStyle} Err={Err?.Password} />
            </div>
            <SubmitButton AuthPageName="Register" ButtonType="submit" />
        </div>
    )
}


const InputTemplate = ({ value, OnChange, type, placeholder, id, InputBoxStyle, Err, Name }) => {
    return <div className='w-full outline-none border-none'>
        <h5 className='font-normal text-[#ff6a6a] h-5'>{Err ? Name + " is required" : null} </h5>
        <input className={InputBoxStyle} type={type} name="" id={id} placeholder={placeholder}
            onChange={OnChange}
            value={value}
        />
    </div>
}
export default InstituteUserInfo