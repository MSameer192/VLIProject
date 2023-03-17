import React, { useState } from 'react'
import './LoginAndRegister.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { OpenLoginSignUp, ResetLoginSignUp } from '../../Actions/ToggleSignupA';
import UserSigning from './Components/UserSigning';
import InstituteSide from './Components/InstituteSide';

let TopLoginRegisterBtns = `absolute border-none   rounded-t-[28px]  cursor-pointer Boldfont hidden md:inline-block 
            -top-9   lg:-top-11 xl:-top-14 2xl:-top-16
            py-[6px] lg:py-2 xl:py-3 2xl:py-4
            px-20    lg:px-24 xl:px-28 2xl:px-32 
            text-2xs lg:text-xs xl:text-base 2xl:text-[30px]`



const SignUp = () => {
    const { error } = useSelector((Store) => Store.LoginSignupReducer);
    const { AuthPageName, Navigation, Done } = useSelector((Store) => Store.ToggleSignupReducer)

    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [ScreenSize, setScreenSize] = useState();



    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(Number(window.innerWidth))
        })
    }, [])


    useEffect(() => {
        if (Object.keys(error).length === 0 && Done && Navigation) {

            Dispatch(ResetLoginSignUp(false))
            Navigate('/')
        } else if (Object.keys(error).length === 0 && Done && !Navigation)
            Dispatch(ResetLoginSignUp(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Navigate, error, Done, Navigation])

    return (

        AuthPageName ?
            <div className='bg-[#00000037] max-h-screen  fixed top-0 w-full z-50 overflow-scroll flex md:justify-center'
                onClick={e => { Dispatch(OpenLoginSignUp(false, false)) }}
            >

                <div className='h-fit bgGradient md:min-h-[auto] min-h-screen w-full md:w-[95%] flex flex-col justify-start items-start md:mt-28'
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className={`overflow-hidden w-full
                                    hidden         md:block 
                                    min-h-[100px]  md:min-h-[144px] lg:min-h-[224px] xl:min-h-[320px]
                                    BG_Image`}>
                        <div className='w-full h-80 bg-[#00000070]' > </div>
                    </div>
                    <div className='relative lg:bg-white w-full flex flex-col justify-start  lg:justify-between lg:items-center h-fit min-h-full md:min-h-[auto] md:h-auto'>
                     
                        {
                            AuthPageName === "Register"
                                ? <InstituteSide />
                                : <UserSigning ScreenSize={ScreenSize} TopLoginRegisterBtns={TopLoginRegisterBtns} />
                        }


                    </div>
                </div>

            </div>
            : null



    )
}

export function SubmitButton({ AuthPageName, ButtonType, OnClickFun }) {

    return <span className='relative  flex justify-center w-[60%] xl:w-4/5 max-w-[575px] md:mt-5 lg:mt-9 2xl:mt-0'>
        <img
            className='absolute w-[150px] lg:w-[180px] xl:w-auto -top-[90px] lg:-top-[109px] xl:-top-[111px] left-[50%] -translate-x-1/2 pointer-events-none'
            src={require("./Assets/Sign up Avater.png")} alt="" />
        <button className={`bg-[#A1A3EF] text-white cursor-pointer border-none rounded-[42px]  w-full
                            text-xs  xl:text-base 
                            py-4     xl:py-6`}

            type={ButtonType}
            onClick={OnClickFun}
        >
            {AuthPageName}
        </button>
    </span>
}
export default SignUp