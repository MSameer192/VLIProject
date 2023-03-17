import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, SignUpUser } from '../../../Actions/UserA'
import { SubmitButton } from '../LoginAndRegister'
import SignInLeftSide from './UserSigning/LeftSide'
import SigninRightSide from './UserSigning/RightSide'


const UserSigning = ({ ScreenSize, TopLoginRegisterBtns }) => {
    const [Credentials, setCredentials] = useState({
        Email: "",
        Password: "",
        ConfirmPassword: "",
        FirstName: "",
        LastName: ""
    });
    const { AuthPageName } = useSelector((Store) => Store.ToggleSignupReducer)
    const Dispatch = useDispatch()

    const SubmitForm = (e) => {
        e.preventDefault();

        if (AuthPageName === "Sign Up")
            Dispatch(SignUpUser(Credentials, Dispatch, AuthPageName))
        else
            Dispatch(LoginUser(Credentials, Dispatch, AuthPageName))

        return false
    }
    return (

        <form className='flex w-full flex-col items-center h-fit' onSubmit={SubmitForm}>

            <div className={`flex
            w-[97%]             md:w-full
            min-h-fit           md:min-h-[auto]
            h-fit               md:h-auto
            justify-around      md:justify-start
            flex-col-reverse    md:flex-row  
                                md:bg-white `}>

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