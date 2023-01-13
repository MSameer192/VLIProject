import React from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'
import { useState } from 'react';
import HeaderLeftSide from './Components/LeftSide';
import HeaderRightSide from './Components/RightSide';

import { useDispatch, useSelector } from 'react-redux';
import { OpenLoginSignUp } from '../../Actions/ToggleSignupA'; 


const Headers = ({ setAuthPageName }) => {

    const [ShowSidebar, setShowSidebar] = useState(false);
    const { UserInfo } = useSelector((store) => store.LoginSignupReducer);
 
    return (
        <>

            <header className="relative flex flex-col justify-between items-center z-30  border-[6px]">

                {UserInfo?.UserName ? null : <LoginRegister setAuthPageName={setAuthPageName} />}
                <div className='flex justify-between items-center fixed top-0 lg:bg-white  bg-[#321d6d] shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)] w-full min-h-[80px]'>
                    <HeaderLeftSide setShowSidebar={setShowSidebar} />
                    <HeaderRightSide setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} setAuthPageName={setAuthPageName} UserInfo={UserInfo} />
                </div>

            </header>

        </>
    )
}

function LoginRegister() {
    const Dispatch = useDispatch();

    return <nav id='RegisterPortion'
        className='w-auto hidden lg:flex justify-center items-center gap-9 absolute right-7 top-24'>
        <Link className='text-xs  xl:text-2xs no-underline Regularfont text-white'
            onClick={() => Dispatch(OpenLoginSignUp("Sign In", true))}
        >Login</Link>
        <Link className={` text-center no-underline Regularfont text-white bg-[#EA52C6] rounded-[25px]
                                            lg:py-3 xl:py-4     2xl:py-5
                                            lg:px-7 xl:px-10    2xl:px-12 
                                    text-xs         xl:text-2xs`}
            onClick={() => Dispatch(OpenLoginSignUp("Sign Up", true))}
        >
            Register
        </Link>
    </nav>

}

export default Headers