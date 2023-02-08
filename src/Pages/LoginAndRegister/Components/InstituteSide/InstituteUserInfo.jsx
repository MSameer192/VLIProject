import React, { useEffect, useRef } from 'react'
import { SubmitButton } from '../../LoginAndRegister'

const InstituteUserInfo = ({ OnSuccess, TimingRef, InstituteData, setInstituteData, Success }) => {
    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg max-w-[650px] shadow-[3px_4px_4px_#00000040]
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;
    const DivRef = useRef()

    useEffect(() => {
        if (Success === true) {
            const Arr = ["FirstName", "LastName", "EmailAddress", "Country", "State", "City", "PhoneNumber"]
            OnSuccess(200,TimingRef, Arr)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Success]) 
    const OnChange = (e, Name) => setInstituteData({ ...InstituteData, [Name]: e.target.value })
    return (
        <div className='flex flex-col items-center w-full' ref={DivRef}>
            <div className='flex flex-col items-center gap-5 py-5 mb-24'>
                <span className="flex w-full gap-12 max-w-[650px]">
                    <input className={InputBoxStyle} type="text" name="" id="FirstName" placeholder='First Name'
                        onChange={e => OnChange(e, "FirstName")}
                        value={InstituteData?.FirstName}
                    />
                    <input className={InputBoxStyle} type="text" name="" id="LastName" placeholder='Last Name'
                        onChange={e => OnChange(e, "LastName")}
                        value={InstituteData?.LastName}
                    />
                </span>
                <input className={InputBoxStyle} type="email" name="" id="Email" placeholder='Email Address'
                    onChange={e => OnChange(e, "Email")}
                    value={InstituteData?.Email}
                />

                <input className={InputBoxStyle} type="text" name="" id="Country" placeholder='Country'
                    onChange={e => OnChange(e, "Country")}
                    value={InstituteData?.Country}
                />
                <span className="flex w-full gap-12 max-w-[650px]">
                    <input className={InputBoxStyle} type="text" name="" id="State" placeholder='State'
                        onChange={e => OnChange(e, "State")}
                        value={InstituteData?.State}
                    />
                    <input className={InputBoxStyle} type="text" name="" id="City" placeholder='City'
                        onChange={e => OnChange(e, "City")}
                        value={InstituteData?.City}
                    />
                </span>
                <input className={InputBoxStyle} type="text" name="" id="PhoneNumber" placeholder='Phone Number'
                    onChange={e => OnChange(e, "PhoneNumber")}
                    value={InstituteData?.PhoneNumber}
                />
                <input className={InputBoxStyle} type="password" name="" id="Password" placeholder='Password'
                    onChange={e => OnChange(e, "Password")}
                    value={InstituteData?.Password}
                />
            </div>
            <SubmitButton AuthPageName="Register" ButtonType="submit" />
        </div>
    )
}

export default InstituteUserInfo