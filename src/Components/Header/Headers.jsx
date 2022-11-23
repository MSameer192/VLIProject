import React from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'

import { useState } from 'react';
import SideBarMobileView from './SideBarMobileView';
import HeaderLeftSide from './LeftSide';
import HeaderRightSide from './RightSide';

const Headers = ({ setAuthPageName }) => {

    const [ShowSidebar, setShowSidebar] = useState(false)

    return (
        <>

            <header className="relative flex flex-col justify-between items-center z-30  border-[6px]">

                <LoginRegister setAuthPageName={setAuthPageName} />
                <div className='flex justify-between items-center fixed top-0 lg:bg-white  bg-[#321d6d] shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)] w-full min-h-[80px]'>
                    <HeaderLeftSide setShowSidebar={setShowSidebar} />
                    <HeaderRightSide />
                    <SideBarMobileView ShowSidebar={ShowSidebar} setShowSidebar={setShowSidebar} setAuthPageName={setAuthPageName} />
                </div>

            </header>

        </>
    )
}

function LoginRegister({ setAuthPageName }) {
    return <nav id='RegisterPortion'
        className='w-auto hidden lg:flex justify-center items-center gap-9 absolute right-7 top-24'>
        <Link className='text-xs  xl:text-2xs no-underline Regularfont text-white'
            onClick={() => setAuthPageName("Sign In")}
        >Login</Link>
        <Link className={`text-xs xl:text-2xs text-center no-underline Regularfont text-white 
    lg:py-3 xl:py-4  2xl:py-5
    lg:px-7 xl:px-10 2xl:px-12 
    bg-[#EA52C6] rounded-[25px]`
    }
            onClick={() => setAuthPageName("Sign Up")}
        >
            Register
        </Link>
    </nav>

}

export default Headers