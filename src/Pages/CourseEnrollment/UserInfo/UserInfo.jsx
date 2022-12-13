import React from 'react'
import { Link } from 'react-router-dom';
import ContactAndOtherInfo from './Components/ContactAndOtherInfo';
import FreeHours from './Components/FreeHours';
import UserLocationInfo from './Components/UserLocationInfo';

const UserInfo = () => {
    const AddParentStyle = (e) => e.target.parentNode.style = "border:2px solid black";
    const RemoveParentStyle = (e) => e.target.parentNode.style = ""
    let InputTypeTextStyle = "w-full text-6xs  md:text-5xs lg:text-2xs xl:text-3xs px-5 py-2 rounded-[8px] border-[#E8E8E8] border-solid border-[2px]"
    let HeadingStyle = "text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-base text-[#404040] font-normal";
    let DivStyle = "w-full sm:w-[45%] flex flex-col justify-center items-start gap-4 max-w-[575px] "


    let ExceptionSpanStyle = "flex w-full rounded-[8px] bg-white px-5 border-[#E8E8E8] border-solid border-[2px]"
    let ExceptionInputStyle = "w-full text-6xs  md:text-5xs lg:text-2xs xl:text-3xs py-2 rounded-[8px] border-none focus:border-none focus:outline-none"
    let DivResponsive = "sm:w-[95%] md:w-11/12 lg:w-4/5 xl:w-[70%]"
    return (

        <div className='flex flex-col mt-[72px] justify-center items-center gap-10 mb-6 px-7'>
            <div className={`flex flex-col sm:flex-row flex-wrap gap-10 w-full justify-between items-center ${DivResponsive}`}>
                <UserName HeadingStyle={HeadingStyle} InputTypeTextStyle={InputTypeTextStyle} DivStyle={DivStyle} />

                <UserLocationInfo HeadingStyle={HeadingStyle} InputTypeTextStyle={InputTypeTextStyle} AddParentStyle={AddParentStyle} RemoveParentStyle={RemoveParentStyle} DivStyle={DivStyle} ExceptionSpanStyle={ExceptionSpanStyle} ExceptionInputStyle={ExceptionInputStyle}
                />

                <ContactAndOtherInfo HeadingStyle={HeadingStyle} InputTypeTextStyle={InputTypeTextStyle} AddParentStyle={AddParentStyle} RemoveParentStyle={RemoveParentStyle} DivStyle={DivStyle} ExceptionSpanStyle={ExceptionSpanStyle} ExceptionInputStyle={ExceptionInputStyle} />


                <FreeHours HeadingStyle={HeadingStyle} />
            </div>

            <div className={`flex gap-11 flex-col items-center justify-center w-full ${DivResponsive}`}>
                <div className='flex gap-5 flex-col w-full'>
                    <p className='text-4xs sm:text-xs text-[#0080FF]'>*Please note all information on the registration form will be kept confidential and will be disclosed only to VLI</p>
                    <span className='flex items-start sm:items-center gap-2 sm:gap-4'>
                        <input className='w-6 h-6' type="checkbox" name="" id="" />
                        <p className='texet-4xs sm:text-3xs lg:text-2xs xl:text-xs'>By clicking this box, you agree to the terms, conditions and policies</p>
                    </span>
                </div>

                <Link className='bg-[#A1A3EF] text-white px-6 py-[10px] w-fit no-underline rounded-2xl text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base'>Select Package</Link>
            </div>
        </div>

    )
}

export default UserInfo

function UserName({ HeadingStyle, InputTypeTextStyle, DivStyle }) {
    return (
        <>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>First Name</h3>
                <input className={InputTypeTextStyle} type="text" placeholder='John' />
            </div>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Last Name</h3>
                <input className={InputTypeTextStyle} type="text" placeholder='Smith' />
            </div>
        </>
    )
}
