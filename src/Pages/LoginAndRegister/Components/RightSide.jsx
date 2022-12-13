import React from 'react'
import { OnLogin, OnRegister } from './Mini Components/MiniComponents';
const SigninRightSide = ({ AuthPageName, setAuthPageName, TopLoginRegisterBtns }) => {
    let SignInbtnColor = AuthPageName === "Sign Up" ? "bg-[#EAEFF4] text-black" : "bg-white text-[#A1A3EF]";

    let Gap = AuthPageName === "Sign Up" ? "gap-4 xl:gap-7" : "gap-2 xl:gap-4";

    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg
    text-4xs lg:text-2xs  xl:text-xs   2xl:text-base
    py-[6px] xl:py-3
    px-[8px] xl:px-[22px] 2xl:px-7`;



    return (
        <div className={`flex flex-col relative justify-start 
                        w-full md:w-1/2
                        px-10 xl:px-16 2xl:px-24
                        py-4  xl:py-8  2xl:py-14 pb-5
                        gap-2 xl:gap-4 `}
        >
            <h4 className=' font-normal w-full text-3xs md:text-xs lg:text-base xl:text-[30px] text-white md:text-black'>
                {AuthPageName === "Sign Up" ? "Register " : AuthPageName + " "}

                With E-Mail
            </h4>
            <button className={`${TopLoginRegisterBtns} ${SignInbtnColor} -left-[1px] `}
                onClick={() => setAuthPageName("Sign In")}
            >
                Sign In
            </button>


            <form>
                <div className={`flex flex-col justify-between items-start ${Gap}`}>
                    <div className='flex flex-col gap-3 sm:gap-6 w-full '>
                        {
                            AuthPageName === "Sign Up"
                                ? <span className='flex gap-12 w-full'>
                                    <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='First Name' />
                                    <input className={`${InputBoxStyle} max-w-[300px]`} type="text" placeholder='Last Name' />
                                </span>
                                : null
                        }
                        <input className={`${InputBoxStyle} max-w-[650px]`} type="email" placeholder='Email Address' />
                        <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Password' />
                        {
                            AuthPageName === "Sign Up"
                                ? <input className={`${InputBoxStyle} max-w-[650px]`} type="password" placeholder='Confirm Password' />
                                : null
                        }
                    </div>

                    <div className={`flex flex-col ${Gap}`}>
                        {
                            AuthPageName === "Sign Up"
                                ? <OnRegister MobileDisplay={"hidden"} DesktopDisplay={"inline"} TermsDisplay={"flex"} AuthPageName={AuthPageName} />
                                : <OnLogin />
                        }

                    </div>
                </div>
                <button type='submit' className='text-4xs mt-6 inline-block md:hidden Boldfont w-full py-3 rounded-[12px] border-none cursor-pointer text-[#521E9D]'>Sign Up
                </button>
            </form>
        </div>
    )
}
export default SigninRightSide