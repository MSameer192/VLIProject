import React, { useEffect, useRef } from 'react'
import { SubmitButton } from '../../../LoginAndRegister'

const InstituteUserInfo = ({ OnSuccess, TimingRef, InstituteData, setInstituteData, Success, Err, setErr, setPrevious }) => {

    const DivRef = useRef()

    useEffect(() => {
        if (Success === true) {
            const Arr = ["FirstName", "LastName", "EmailAddress", "Country", "State", "City", "PhoneNumber"]
            OnSuccess(200, TimingRef, Arr)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Success])

    const OnChange = (e, Key, Name) => {
        setInstituteData({ ...InstituteData, [Key]: e.target.value });
        if (e.target.value === "")
            setErr({ ...Err, [Key]: `${Name} is required` })

        else if (e.target.value !== "") {
            delete Err?.[Key]
            setErr({ ...Err });
        }

    }
    return (
        <div className='flex flex-col items-center w-full' ref={DivRef}>
            <div className='flex flex-col items-center gap-[6px] py-5 mb-24 '>
                <span className="flex w-full gap-12 max-w-[650px]">

                    <InputTemplate type="text" value={InstituteData?.FirstName} id="FirstName"
                        OnChange={e => OnChange(e, "FirstName", "First Name")} placeholder="First Name"
                        Err={Err?.FirstName} />

                    <InputTemplate type="text" value={InstituteData?.LastName} id="LastName"
                        OnChange={e => OnChange(e, "LastName", "Last Name")}
                        placeholder="Last Name"
                        Err={Err?.LastName} />
                </span>


                <InputTemplate type="email"
                    value={InstituteData?.Email}
                    id="Email"
                    OnChange={e => OnChange(e, "Email", "Email Address")}
                    placeholder="Email Address"
                    Err={Err?.Email} />


                <InputTemplate type="text"
                    id="Country"
                    OnChange={e => OnChange(e, "Country", "Country")}
                    placeholder="Country"
                    Err={Err?.Country}
                    value={InstituteData?.Country}
                />


                <span className="flex w-full gap-12 max-w-[650px]">
                    <InputTemplate type="text"
                        value={InstituteData?.State}
                        id="State"
                        OnChange={e => OnChange(e, "State", "State")}
                        placeholder="State"
                        Err={Err?.State}
                    />
                    <InputTemplate type="text"
                        value={InstituteData?.City} id="City"
                        OnChange={e => OnChange(e, "City", "City")}
                        placeholder="City"
                        Err={Err?.City}
                    />

                </span>

                <InputTemplate type="text"
                    value={InstituteData?.PhoneNumber}
                    id="PhoneNumber"
                    OnChange={e => OnChange(e, "PhoneNumber", "Phone Number")}
                    placeholder="Phone Number"
                    Err={Err?.PhoneNumber}
                />

                <InputTemplate type="password"
                    value={InstituteData?.Password}
                    id="Password"
                    OnChange={e => OnChange(e, "Password", "Password")}
                    placeholder="Password"
                    Err={Err?.Password}
                />
            </div>
            <SubmitButton AuthPageName="Register" ButtonType="submit" />
            <div className='mt-5' onClick={()=>{setPrevious(false)}} style={{cursor: 'pointer' }}>Back</div>
        </div>
    )
}

const InputTemplate = ({ value, OnChange, type, placeholder, id, Err }) => {
    return <div className='w-full outline-none'>
        <h5 className='font-normal text-[#ff6a6a] text-6xs h-[14px]'>{Err} </h5>
        <input className="InstituteSide_InputStyles" type={type} name="" id={id} placeholder={placeholder}
            onChange={OnChange}
            value={value}
        />
    </div>
}
export default InstituteUserInfo;