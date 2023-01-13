import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from '../../../../Actions/UserA';
import { useHideOnClickOutside } from '../../../../Helpers/CustomHooks/Hide Elements/useOutsideChecker';


const UserDropDown = ({ setShowSidebar, ToggleClass, RefBtn }) => {
    let LinkStyle = "text-[#4D4F5C] whitespace-nowrap text-3xs no-underline SemiBold py-4 px-6 w-56 text-left hover:text-[#A1A3EF] DropDownBorder";
    const Dispatch = useDispatch();
    const Navigate = useNavigate()
    const [CheckLogout, setCheckLogout] = useState(false);
    const [DropDownRef, setDropDownRef] = useState(null);
    useHideOnClickOutside(DropDownRef, RefBtn, "active")

    const ClickMethod = (e, cb) => {
        setShowSidebar(false);
        ToggleClass(e.target.parentNode.parentNode.parentNode, "active")
        if (cb !== null) {
            cb(LogOut(setCheckLogout))
        }
    }

    useEffect(() => {
        if (CheckLogout) {
            setCheckLogout(false);
            Navigate('/')
        }
    }, [Navigate, CheckLogout])
    return (
        <div className='absolute -right-28 top-14 lg:right-5 lg:top-12 shadow-[0px_2px_10px_#00000030]  DropDown-Menu'
            ref={(e) => setDropDownRef(e)}>

            <img className=' absolute -top-2 left-5 lg:right-14 lg:left-auto drop-shadow z-10'
                src={require('../RightSideAssets/PointIcon.svg').default} alt="" />

            <div className='flex flex-col bg-white items-start w-fit z-20'>

                <Link className={LinkStyle}
                    onClick={(e) => ClickMethod(e, null)}
                >Profile</Link>

                <Link to='/mycourses/enrolledcourses' className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => ClickMethod(e, null)} >
                    My Courses
                    <img src={require('./Assets/MyCoursesIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => ClickMethod(e, null)}>
                    Help & Support
                    <img src={require('./Assets/HelpIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => ClickMethod(e, null)}>
                    English
                    <img src={require('./Assets/TranslationIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => ClickMethod(e, null)}>
                    USD
                    <img src={require('./Assets/DollarIcon.svg').default} alt="" />
                </Link>


                <Link className={LinkStyle}
                    onClick={(e) => ClickMethod(e, null)}>Settings</Link>


                <Link className={LinkStyle}
                    onClick={(e) => ClickMethod(e, Dispatch)}>
                    Logout
                </Link>

            </div>
        </div>
    )
}

export default UserDropDown