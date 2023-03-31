import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OpenLoginSignUp } from '../../../../../../Actions/ToggleSignupA';
import { OnLogin, OnRegister } from '../MiniComponents';
import UserInput from './UserInput';


const SigninRightSide = ({ TopLoginRegisterBtns, Credentials, setCredentials }) => {
    const Dispatch = useDispatch()
    const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)
    let SignInbtnColor = AuthPageName === "Sign Up" ? "bg-[#EAEFF4] text-black" : "bg-white text-[#A1A3EF]";
    let Gap = AuthPageName === "Sign Up" ? "gap-4 xl:gap-7" : "gap-2 xl:gap-4";

    return (
        <div className={`flex flex-col relative justify-start 
                        w-full  md:w-1/2 pb-5
                        px-3 xs:px-6 sm:px-9 md:px-12 lg:px-14      xl:px-16    2xl:px-24
                        py-4                xl:py-8     2xl:py-14 
                        gap-2               xl:gap-4 `}
        >
            <h4 className=' font-normal w-full text-3xs md:text-xs lg:text-base xl:text-[30px] text-white md:text-black'>
                {AuthPageName === "Sign Up" ? "Register " : AuthPageName + " "}

                With E-Mail
            </h4>
            <button type='button' className={`${TopLoginRegisterBtns} ${SignInbtnColor} -left-[1px] `}
                onClick={() => Dispatch(OpenLoginSignUp("Sign In", true))}
            >
                Sign In
            </button>


            <div
            >
                <div className={`flex flex-col justify-between items-start ${Gap}`}>
                    <UserInput AuthPageName={AuthPageName} Credentials={Credentials} setCredentials={setCredentials} />

                    <div className={`flex flex-col ${Gap}`}>
                        {
                            AuthPageName === "Sign Up"
                                ? <>
                                    <OnRegister MobileDisplay={"hidden"} DesktopDisplay={"inline"}
                                        TermsDisplay={"flex"} AuthPageName={AuthPageName} />
                                </>
                                :
                                <>
                                    <OnLogin />
                                </>
                        }
                    </div>

                </div>

                <button type='submit' className='text-4xs mt-6 inline-block md:hidden Boldfont w-full py-3 rounded-[12px] border-none cursor-pointer text-[#521E9D]'>
                    {AuthPageName === "Sign Up" ? "Sign Up" : "Sign in"}
                </button>
            </div>
        </div>
    )
}
export default SigninRightSide