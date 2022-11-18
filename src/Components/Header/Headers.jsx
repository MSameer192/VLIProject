import React from 'react'
import { Link } from 'react-router-dom';
import './Headers.css'
import SearchIcon from './Assessts/SearchIcon.svg';
import Logo from './Assessts/Logo.svg';
import { useState } from 'react';

const Headers = ({ setAuthPageName }) => {
    const [ShowSidebar, setShowSidebar] = useState(false)

    return (
        <>

            <header className="w-full  fixed flex flex-col justify-between items-center z-30  border-[6px]">

                <nav className='w-auto hidden lg:flex justify-center items-center gap-9 absolute right-7 top-24'>
                    <Link className='text-xs  xl:text-2xs no-underline Regularfont text-white'
                        onClick={() => setAuthPageName("Sign In")}
                    >Login</Link>
                    <Link className={`text-xs xl:text-2xs text-center no-underline Regularfont text-white 
                    lg:py-3 xl:py-4  2xl:py-5
                    lg:px-7 xl:px-10 2xl:px-12 
                    bg-[#EA52C6] rounded-[25px]`}
                        onClick={() => setAuthPageName("Sign Up")}
                    >
                        Register
                    </Link>
                </nav>

                <div className='flex justify-between items-center fixed top-0 lg:bg-white  bg-[#321d6d] shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)] w-full min-h-[80px]'>
                    <HeaderLeftSide setShowSidebar={setShowSidebar} />
                    <HeaderRightSide />
                    <SideBarMobileView ShowSidebar={ShowSidebar} setShowSidebar={setShowSidebar} />
                </div>

            </header>

        </>
    )
}

function HeaderLeftSide({ setShowSidebar }) {
    return <nav
        className={`flex justify-between md:justify-around items-center w-full lg:w-auto 
                    ml-0  xl:ml-10  2xl:ml-36 py-2 pt-3 md:py-0
                    gap-0 sm:gap-10 lg:gap-10 xl:gap-10 2xl:gap-16`
        }
    >
        <img src={require("./Assessts/HamburgerIcon.svg").default}
            onClick={() => setShowSidebar(true)}
            className='lg:hidden mx-2'
            alt="" />
        <picture className='flex justify-center items-center'>
            <source media="(max-width:1023px)" srcset={require("./Assessts/SmallScreenlogo.svg").default} />
            <source media="(min-width:1024px)" srcset={Logo} />
            <img
                className="w-[180px] sm:w-[300px] lg:w-[275px] xl:w-auto"
                alt="Logo"
                id="Logo"
                src={Logo}
            />
        </picture>

        <img
            className="cursor-pointer mx-2 mr-4 xl:mx-7 text-xs "
            alt="SearchIcon"
            id="SearchIcon"
            src={SearchIcon}
        />
    </nav>
}
function HeaderRightSide() {
    let LinkStyle = "text-2xs text-white md:text-xs lg:text-3xs xl:text-2xs 2xl:text-[21px] header-font";

    return <nav className={`right-header hidden justify-around items-center h-full 
    mx-12    lg:mx-8  xl:mx-10  2xl:mx-16
    md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-10
    lg:flex flex-wrap`}
    >
        <Link className={LinkStyle} to='/Ebooks'>E-Books</Link>
        <Link className={LinkStyle} to='/Institutes'>Institutes</Link>
        <Link className={LinkStyle} to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>
            PKR
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>
            English
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>
            Latest News
        </Link>
    </nav>
}
function SideBarMobileView({ ShowSidebar, setShowSidebar }) {
    return <nav
        style={{ left: ShowSidebar ? "0px" : "-2000px" }}
        className={' absolute top-0 h-[100vh] flex flex-col justify-start items-start gap-10 bg-[#4e9320e3] w-[90%]'}>
        <Link className='mx-5 lg:mx-8 text-2xs header-font' to='/Ebooks'>E-Books</Link>
        <Link className='mx-5 lg:mx-8 text-2xs header-font' to='/Institutes'>Institutes</Link>
        <Link className='mx-5 lg:mx-8 text-2xs header-font' to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className='mx-5 lg:mx-8 text-2xs header-font'>PKR
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className='mx-5 lg:mx-8 text-2xs header-font'>English
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className='mx-5 lg:mx-8 text-2xs header-font'>Latest News</Link>
        <button className='h-6 w-6 rounded-[12px] absolute border-none text-xs  -right-4 top-0 cursor-pointer'
            onClick={() => setShowSidebar(false)}
        >
            X
        </button>
    </nav>
}
export default Headers