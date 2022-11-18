import React from 'react'
import { Link } from 'react-router-dom'
const SigninRightSide = ({ AuthPageName, setAuthPageName }) => {
    let SignInbtnColor = AuthPageName === "Sign Up" ? "bg-[#EAEFF4] text-black" : "bg-white text-[#A1A3EF]";

    let Gap = AuthPageName === "Sign Up" ? "gap-7" : "gap-4";

    let InputBoxStyle = "text-base bg-[#F3F6F7] py-3 px-7 rounded-lg text-black border-none Regularfont w-full";

    return (
        <div className={`flex flex-col relative justify-start px-24 py-14 gap-4 w-[50%]`}>
            <h4 className='text-[30px] Regularfont font-normal w-full'>
                {AuthPageName === "Sign Up" ? "Register" : AuthPageName}
                With E-Mail
            </h4>
            <button className={` 
            px-32 py-4
            absolute -top-16 -left-[1px] 
            border-none text-[30px] 
            rounded-t-[28px] cursor-pointer 
            Boldfont ${SignInbtnColor}`
            }
                onClick={() => setAuthPageName("Sign In")}
            >
                Sign In
            </button>
            <div className={`flex flex-col justify-between items-start ${Gap}`}>
                <div className='flex flex-col gap-6 w-full'>
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



                <div className={`flex flex-col ${Gap} Regularfont`}>
                    {
                        AuthPageName === "Sign Up"
                            ? <OnSignUp />
                            : <OnSignIn />
                    }

                </div>
            </div>
        </div>
    )
}
function OnSignUp() {
    return <>
        <p className='text-xs'>
            Already have an account?<Link className='no-underline text-[#0800E2]'>Log in</Link>
        </p>
        <span className='flex items-center gap-4'>
            <input className='border-[#707070] border-[1px] border-solid h-6 w-6' type="checkbox" name="" id="" />
            <p className='text-base '>
                I agree to the Terms and Conditions
            </p>
        </span>
    </>
}

function OnSignIn() {
    return <>
        <Link className='no-underline text-[#3B5998] text-[18px] '>Forgot Password?</Link>
        <p className='text-xs'>
            Don't have an account yet? <Link className='no-underline text-[#0800E2]'> Sign Up</Link>
        </p>
    </>
}
export default SigninRightSide