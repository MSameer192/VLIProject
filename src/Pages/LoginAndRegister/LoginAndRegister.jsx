import React, { useRef, useState } from 'react'
import './LoginAndRegister.css';
import SignInLeftSide from './Components/LeftSide';
import SigninRightSide from './Components/RightSide';
import { useHideOnClickOutside } from '../../Helpers/CustomHooks/useOutsideChecker';
import { useEffect } from 'react';

const SignUp = ({ AuthPageName, setAuthPageName }) => {
    const wrapperRef = useRef(null);
    useHideOnClickOutside(wrapperRef, setAuthPageName);
    const [ScreenSize, setScreenSize] = useState()
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(Number(window.innerWidth))
        })
    }, [])
 
    let TopLoginRegisterBtns = `absolute border-none   rounded-t-[28px]  cursor-pointer Boldfont hidden md:inline-block 
                -top-9   lg:-top-11 xl:-top-14 2xl:-top-16
                py-[6px] lg:py-2 xl:py-3 2xl:py-4
                px-20    lg:px-24 xl:px-28 2xl:px-32 
                text-2xs lg:text-xs xl:text-base 2xl:text-[30px]`

    return (
        
            <div className='bg-[#00000037] min-h-fit h-[100%] bgGradient  fixed top-0 w-full z-50 overflow-scroll overflow-x-hidden flex justify-center items-center '>
                <div className='min-h-fit bgGradient  md:min-h-[auto] h-screen w-full md:w-[95%] flex flex-col justify-center items-center md:mt-28 '
                    ref={wrapperRef}
                >
                    <div className=' hidden md:block w-full BG_Image md:min-h-[144px] lg:min-h-[224px] xl:min-h-[320px] overflow-hidden '>

                        <div
                            className='w-full h-80 bg-[#00000070]'
                        >

                        </div>
                    </div>

                    <div className='bg-white w-full flex bgGradient flex-col justify-around md:justify-between items-center h-fit min-h-full md:min-h-[auto] md:h-auto pb-16 md:pb-4 xl:pb-8  '>
                        <div className='w-[97%] md:w-full h-fit min-h-full md:min-h-[auto] md:h-auto flex  flex-col-reverse justify-around   md:justify-start md:flex-row  md:bg-white '>

                            <SignInLeftSide
                                AuthPageName={AuthPageName}
                                setAuthPageName={setAuthPageName}
                                TopLoginRegisterBtns={TopLoginRegisterBtns}
                                ScreenSize={ScreenSize} />

                            <CenterORline />
                            <SigninRightSide AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} TopLoginRegisterBtns={TopLoginRegisterBtns} />
                            {/* For Mobile View only */}
                            <div className='flex md:hidden mt-16  h-[12%]  flex-col text-white Boldfont justify-between items-center '>
                                <h2>Sign Up For Free</h2>
                                <p className='text-center'>"Lorem Ipsum is simply  dummy <br />text
                                    of the printing" </p>
                            </div>
                        </div>

                        <SubmitButton AuthPageName={AuthPageName} />
                    </div>

                </div>
            </div>
    
    )
}

function CenterORline() {
    return <span className='h-full relative justify-center items-center  hidden md:flex'>
        <hr className=' h-[70%] relative -top-[2%]' />
        <span className={`absolute top-1/2 -translate-y-1/2 text-center border-[#707070] border-[1px] border-solid bg-[#A1A3EF]  
           text-white Regularfont rounded-[32px] p-2 
             text-2xs xl:text-base   2xl:text-[30px]
             w-11     xl:w-14        2xl:w-16 
             h-11     xl:h-14        2xl:h-16 
        `}
        >
            OR
        </span>
    </span>
}

function SubmitButton({ AuthPageName }) {
    return <span className='relative hidden md:flex justify-center w-[60%] xl:w-4/5 max-w-[575px] md:mt-5 lg:mt-9 2xl:mt-0'>
        <img
            className='absolute w-[150px] lg:w-[180px] xl:w-auto -top-[90px] lg:-top-[109px] xl:-top-[111px] left-[50%] -translate-x-1/2'
            src={require("./Assets/Sign up Avater.png")} alt="" />
        <button className={`bg-[#A1A3EF] text-white cursor-pointer border-none rounded-[42px]  w-full
                            text-xs  xl:text-base 
                            py-4     xl:py-6`
        }
            type="submit">
            {AuthPageName}
        </button>
    </span>
}
export default SignUp