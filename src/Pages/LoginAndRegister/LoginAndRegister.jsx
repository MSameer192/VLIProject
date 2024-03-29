import React, { useState } from 'react'
import './LoginAndRegister.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { OpenLoginSignUp, ResetLoginSignUp } from '../../Actions/ToggleSignupA';
import UserSigning from './Components/UserSigning/UserSigning';
import InstituteSide from './Components/InstituteSide/InstituteSide';

let TopLoginRegisterBtns = `absolute border-none   rounded-t-[28px]  cursor-pointer Boldfont hidden md:inline-block 
            -top-9   lg:-top-11 xl:-top-14 2xl:-top-16
            py-[6px] lg:py-2 xl:py-3 2xl:py-4
            px-20    lg:px-24 xl:px-28 2xl:px-32 
            text-2xs lg:text-xs xl:text-base 2xl:text-[30px]`



const SignUp = () => {
    const { error, loading } = useSelector((Store) => Store.LoginSignupReducer);
    const { AuthPageName, Navigation, Done, } = useSelector((Store) => Store.ToggleSignupReducer)

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
            <div className='LightBg'
                onClick={e => { Dispatch(OpenLoginSignUp(false, false)) }}
            >


                <div className='MainParent bgGradient'
                    onClick={(e) => e.stopPropagation()}
                >


                    {!loading
                        ? <div className="ImageContainer BG_Image">
                            <div className='w-full h-80 bg-[#000000cc] ' > </div>
                        </div>
                        : null
                    }
                    <div className='FormParent'>

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

    return <span className='relative  flex justify-center w-[60%] xl:w-4/5 max-w-[575px] mt-16'>
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