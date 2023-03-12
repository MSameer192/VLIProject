import React from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OpenLoginSignUp } from '../../Actions/ToggleSignupA';
import OtherHeader from './Components/Others Header/Others Header';
import StudentHeader from './Components/StudentHeader/StudentHeader';
import { GetLocalStorage } from '../../Helpers/LocalStorage/LocalStorage';


const Headers = ({ setAuthPageName }) => {
    const [ShowSidebar, setShowSidebar] = useState(false);
    const { UserInfo } = useSelector((store) => store.LoginSignupReducer);
    return (
        <>

            <header className="relative flex flex-col justify-between items-center z-30  border-[6px]" onClick={(e)=>e.stopPropagation()}>

                
                <div className='flex justify-between items-center fixed top-0 lg:bg-white  bg-[#321d6d]  w-full h-[80px]  '>
                    {
                        !GetLocalStorage("UserInfo")?.User || UserInfo?.User === "Student" ?
                            <>
                                <StudentHeader ShowSidebar={ShowSidebar} setShowSidebar={setShowSidebar} />
                            </>
                            : null
                    }
                    {
                        UserInfo?.User === "Institute" || UserInfo?.User === "Admin" ?
                            <OtherHeader setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} />
                            : null
                    }
                </div>

            </header>

        </>
    )
}

export function LoginRegister() {
    const Dispatch = useDispatch();

    return <nav id='RegisterPortion'
        className='w-auto hidden lg:flex justify-center items-center gap-9 absolute right-7 top-24 z-20'>
        <Link className='text-xs  xl:text-2xs no-underline Regularfont text-white'
            onClick={() => Dispatch(OpenLoginSignUp("Sign In", true))}
        >Login</Link>
        <Link className={` text-center no-underline Regularfont text-white bg-[#EA52C6] rounded-[25px]
                                    lg:py-3     xl:py-4         2xl:py-5
                                    lg:px-7     xl:px-10        2xl:px-12 
                        text-xs                 xl:text-2xs       `}
            onClick={() => Dispatch(OpenLoginSignUp("Sign Up", true))}
        >
            Register
        </Link>
    </nav>

}

export default Headers