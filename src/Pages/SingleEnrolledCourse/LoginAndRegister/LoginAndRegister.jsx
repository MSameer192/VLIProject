import React, { useState } from 'react'
import './LoginAndRegister.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, SignUpUser } from '../../../Actions/UserA';
import { useNavigate } from 'react-router-dom';
import { OpenLoginSignUp, ResetLoginSignUp } from '../../../Actions/ToggleSignupA';
import UserSigning from './Components/UserSigning';
import InstituteSide from './Components/InstituteSide';

let TopLoginRegisterBtns = `absolute border-none   rounded-t-[28px]  cursor-pointer Boldfont hidden md:inline-block 
            -top-9   lg:-top-11 xl:-top-14 2xl:-top-16
            py-[6px] lg:py-2 xl:py-3 2xl:py-4
            px-20    lg:px-24 xl:px-28 2xl:px-32 
            text-2xs lg:text-xs xl:text-base 2xl:text-[30px]`



const SignUp = () => {
    const { loading, error } = useSelector((Store) => Store.LoginSignupReducer);
    const { AuthPageName, Navigation, Done } = useSelector((Store) => Store.ToggleSignupReducer)

    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [ScreenSize, setScreenSize] = useState();

    const [Credentials, setCredentials] = useState({
        Email: "",
        Password: "",
        ConfirmPassword: "",
        FirstName: "",
        LastName: ""
    });


    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(Number(window.innerWidth))
        })
    }, [])

    const SubmitForm = (e) => {
        e.preventDefault();

        if (AuthPageName === "Sign Up")
            Dispatch(SignUpUser(Credentials, Dispatch, AuthPageName))
        else
            Dispatch(LoginUser(Credentials, Dispatch, AuthPageName))

        return false
    }
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
            <div className='bg-[#00000037] min-h-fit h-[100%] bgGradient  fixed top-0 w-full z-50 overflow-scroll overflow-x-hidden flex justify-center items-center '
                onClick={(e) => { Dispatch(OpenLoginSignUp(false, false)) }}
            >
                {!loading
                    ? <form className='min-h-fit bgGradient  md:min-h-[auto] h-screen w-full md:w-[95%] flex flex-col justify-center items-center md:mt-28'
                        onClick={(e) => { e.stopPropagation() }}
                        onSubmit={SubmitForm}
                    >
                        <div className={`overflow-hidden w-full
                                    hidden      md:block 
                                                md:min-h-[144px]    lg:min-h-[224px]    xl:min-h-[320px]
                                    BG_Image`}>
                            <div className='w-full h-80 bg-[#00000070]' > </div>
                        </div>
                        <div className='bg-white w-full flex  bgGradient flex-col justify-around md:justify-between items-center h-fit min-h-full md:min-h-[auto] md:h-auto pb-16 md:pb-4 xl:pb-8'>

                            {
                                AuthPageName === "Register"
                                    ? <InstituteSide />
                                    : <UserSigning ScreenSize={ScreenSize} TopLoginRegisterBtns={TopLoginRegisterBtns} setCredentials={setCredentials} Credentials={Credentials} AuthPageName={AuthPageName} />
                            }


                        </div>
                    </form>
                    : <h1 className='mt-40 text-[red]'>loading</h1>}
            </div>
            : null



    )
}

export function SubmitButton({ AuthPageName, ButtonType, OnClickFunction, Position, EleRef }) {
    const OnClick = () => {
        if (OnClickFunction !== undefined) {
            OnClickFunction(Position)
            EleRef.current.style.display = "flex"
        }
    }
    return <span className='relative hidden md:flex justify-center w-[60%] xl:w-4/5 max-w-[575px] md:mt-5 lg:mt-9 2xl:mt-0'>
        <img
            className='absolute w-[150px] lg:w-[180px] xl:w-auto -top-[90px] lg:-top-[109px] xl:-top-[111px] left-[50%] -translate-x-1/2 pointer-events-none'
            src={require("./Assets/Sign up Avater.png")} alt="" />
        <button className={`bg-[#A1A3EF] text-white cursor-pointer border-none rounded-[42px]  w-full
                            text-xs  xl:text-base 
                            py-4     xl:py-6`}

            type={ButtonType}
            onClick={OnClick}
        >
            {AuthPageName}
        </button>
    </span>
}
export default SignUp