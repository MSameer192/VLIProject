import React from 'react'
import { OtherOption } from './Mini Components/MiniComponents';

const SignInLeftSide = ({ AuthPageName, setAuthPageName, TopLoginRegisterBtns, ScreenSize }) => {
    let SignUpbtnColor = AuthPageName === "Sign Up" ? " bg-white text-[#A1A3EF] " : " bg-[#EAEFF4] text-black ";
    let ContinueHeading = ScreenSize > 768 ? `Client ${AuthPageName}` : `or ${AuthPageName} with`
    let ButtonStyle = `flex items-center gap-5 justify-center
    border-[1px] border-[#FEFEFE]
  
    cursor-pointer  lg:min-w-[400px]  max-w-[625px]
    font-normal rounded-lg
    md:py-2          xl:py-3 
    md:px-6 lg:px-10 xl:px-16 2xl:px-20 
    DropShadow`
    // DropShadow
    let h4Style = `text-left font-normal  whitespace-nowrap 
        text-4xs md:text-[19px] lg:text-xs   xl:text-base  2xl:text-[30px]
        w-auto   md:w-[220px]   lg:w-[250px] xl:w-[290px]  2xl:w-[350px]`;


    return (
        <div className={`flex flex-col
                        w-full md:w-[50%]
                        gap-4 md:gap-8 lg:gap-10 xl:gap-16 2xl:gap-24
                        px-4  lg:px-16  xl:px-20  2xl:px-24
                        py-3  lg:py-4   xl:py-8   2xl:py-14
                        justify-between items-start relative`}
        >
            <button className={`${TopLoginRegisterBtns} ${SignUpbtnColor}  -right-[1px] `}
                onClick={() => setAuthPageName("Sign Up")}
            >
                Sign Up
            </button>


            <div className='flex flex-col gap-[6px] md:gap-3 xl:gap-[18px] w-full '>
                <h4 className='font-normal text-4xs md:text-base xl:text-[30px] text-center md:text-left text-white md:text-black'>
                    {ContinueHeading}
                </h4>
                <div className='flex flex-row md:flex-col gap-3 xl:gap-[18px] w-full justify-center md:justify-start'>
                    <button className={`${ButtonStyle} border-none md:border-solid bg-[#ff000000] md:bg-white   w-auto md:w-full `}>
                        <picture>
                            <source media="(min-width:768px)" srcset={require("../Assets/Google Icon.png")} />
                            <img
                                className='w-9 md:w-7 xl:w-10'
                                src={require("../Assets/Google Icon @mobile.png")} alt="" />
                        </picture>
                        <h5 className={`${h4Style} hidden md:inline-block`}>Continue With Google</h5>
                    </button>
                    <button className={`${ButtonStyle} border-none md:border-solid bg-[#ff000000] md:bg-white   w-auto md:w-full `}>

                        <picture>
                            <source media="(min-width:768)" srcset={require("../Assets/Facebook Icon.png")} />
                            <img
                                className='w-9 md:w-7 xl:w-10'
                                src={require("../Assets/Facebook Icon @mobile.png")} alt="" />
                        </picture>
                        <h5 className={`${h4Style} hidden md:inline-block`}>Continue With Facebook</h5>
                    </button>
                </div>

            </div>

            <div className='w-full flex flex-col gap-2 md:gap-3 xl:gap-6 mb-4 md:mb-20 items-center '>

                {
                   <OtherOption MobileDisplay={"inline"} DesktopDisplay={"hidden"} AuthPageName={AuthPageName} />
                }
                <h4 className='text-3xs md:text-base xl:text-[30px] font-normal text-white md:text-black w-full text-center md:text-left'> Partner {AuthPageName} </h4>
                <button className={` w-full ${ButtonStyle} justify-start py-2 px-0 bg-white `}>
                    <img
                        className='w-6 xl:w-10'
                        src={require('../Assets/Institute Icon.png')} alt="" />
                    <h5 className={` ${h4Style} inline-block`}>{AuthPageName === "Sign Up" ? "Register" : "Continue"} as a Partner</h5>
                </button>
            </div>

        </div>)
}
export default SignInLeftSide