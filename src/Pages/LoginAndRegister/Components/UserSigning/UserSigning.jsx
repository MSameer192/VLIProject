import React, { createContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResetLoginSignUp } from '../../../../Actions/ToggleSignupA'
import { GoogleReCapthcaLoading, LoginUser, SignUpUser } from '../../../../Actions/UserA'
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner'
import { SubmitButton } from '../../LoginAndRegister'
import SignInLeftSide from './Components/LeftSide/LeftSide'
import SigninRightSide from './Components/RightSide/RightSide'

export const TermsContext = createContext()
const UserSigning = ({ ScreenSize, TopLoginRegisterBtns }) => {
    const [Credentials, setCredentials] = useState({
        Email: "",
        Password: "",
        ConfirmPassword: "",
        FirstName: "",
        LastName: ""
    });
    const [TermsAgreed, setTermsAgreed] = useState(false);
    const CheckBoxRef = useRef()
    const Dispatch = useDispatch()

    const { loading } = useSelector((Store) => Store.LoginSignupReducer);
    const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer);

    console.log(TermsAgreed)

    const SubmitForm = (e) => {

        const CheckErrorLabel = CheckBoxRef.current.classList.contains("outline-[red]");
        e.preventDefault();
        if (AuthPageName === "Sign Up" && TermsAgreed && CheckErrorLabel) {
            CheckBoxRef.current.classList.remove("outline-[red]");
            CheckBoxRef.current.classList.add("outline-[#707070]");

        }
        else if (AuthPageName === "Sign Up" && !TermsAgreed && !CheckErrorLabel) {
            CheckBoxRef.current.classList.add("outline-[red]");
            CheckBoxRef.current.classList.remove("outline-[#707070]");
            return
        }
        console.log(AuthPageName === "Sign Up", !TermsAgreed, !CheckErrorLabel)
        window.grecaptcha?.ready(function () {
            if ((AuthPageName === "Sign Up" && TermsAgreed) || AuthPageName === "Sign In")
                Dispatch(GoogleReCapthcaLoading(AuthPageName))
            window.grecaptcha.execute(process.env.REACT_APP_GOOGLE_CAPTCHA_KEY).then(function (token) {
                Credentials.Token = token
                if (AuthPageName === "Sign Up" && TermsAgreed)
                    Dispatch(SignUpUser(Credentials, Dispatch, AuthPageName))


                else if (AuthPageName === "Sign In")
                    Dispatch(LoginUser(Credentials, Dispatch, AuthPageName))

            });
        });

        return false
    }

    return (
        <TermsContext.Provider value={[TermsAgreed, setTermsAgreed, CheckBoxRef]}>

            {!loading ?
                <form className='flex w-full flex-col items-center h-fit md:bg-white pb-5 relative' onSubmit={SubmitForm}>
                    <button type="button" className='p-3 md:hidden cursor-pointer rounded-xl border-none bg-[#A1A3EF] flex items-center justify-center absolute right-6 top-2 z-10'
                        onClick={() => Dispatch(ResetLoginSignUp(false))}
                    >
                        <img className=' cursor-pointer' src={require('../../Assets/CrossIcon.svg').default} alt="" />
                    </button>
                    <div className={`flex
            w-[99%]             md:w-full 
            min-h-fit           md:min-h-[auto]
            h-fit               md:h-auto
            justify-around      md:justify-start
            flex-col-reverse    md:flex-row  
                                 `}>

                        <SignInLeftSide
                            TopLoginRegisterBtns={TopLoginRegisterBtns}
                            ScreenSize={ScreenSize} />

                        <CenterORline />
                        <SigninRightSide
                            TopLoginRegisterBtns={TopLoginRegisterBtns}
                            setCredentials={setCredentials}
                            Credentials={Credentials}
                        />

                        {/* For Mobile View only */}
                        <div className='flex md:hidden mt-16  h-[12%]  flex-col text-white Boldfont justify-between items-center '>
                            <h2>Sign Up For Free</h2>
                            <p className='text-center'>"Lorem Ipsum is simply  dummy <br />text
                                of the printing" </p>
                        </div>
                    </div>
                    <SubmitButton ButtonType="submit" AuthPageName={AuthPageName} />
                </form>
                : <LoadingSpinner Position="static" Height="[80vh]" Width="[99%]" Top="20" Left="0" Bg="white" />}
        </TermsContext.Provider>
    )
}

export function CenterORline({ Visible }) {
    if (Visible === undefined)
        Visible = true
    const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)

    let Order = AuthPageName === "Register" ? "order-2" : ""
    return (
        <span className={`relative justify-center items-center  hidden md:flex self-stretch ${Order}`}>
            <hr className='h-[70%] relative -top-[2%]' />
            {
                Visible
                    ? <span className={`absolute top-1/2 -translate-y-1/2 text-center border-[#707070] border-[1px] border-solid bg-[#A1A3EF]  
           text-white  rounded-[32px] p-2 
             text-2xs       xl:text-base        2xl:text-[30px]
             w-11           xl:w-14             2xl:w-16 
             h-11           xl:h-14             2xl:h-16  
             Regularfont`}
                    >
                        OR
                    </span>
                    : null
            }

        </span>
    )
}


export default UserSigning