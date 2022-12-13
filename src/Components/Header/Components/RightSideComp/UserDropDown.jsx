import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useHideOnClickOutside } from '../../../../Helpers/CustomHooks/useOutsideChecker';
 

const UserDropDown = ({ setShowSidebar, ToggleClass }) => {
    let LinkStyle = "text-[#4D4F5C] whitespace-nowrap text-3xs no-underline SemiBold py-4 px-6 w-56 text-left hover:text-[#A1A3EF] DropDownBorder";
    const [Ref, setRef] = useState(null);

    useHideOnClickOutside(Ref, null, "active")
    return (
        <div className='absolute -right-28 top-14 lg:right-5 lg:top-12 shadow-[0px_2px_10px_#00000030]  DropDown-Menu'
            ref={(e) => setRef(e)}>

            <img className=' absolute -top-2 left-5 lg:right-14 lg:left-auto drop-shadow z-10'
                src={require('../RightSideAssets/PointIcon.svg').default} alt="" />

            <div className='flex flex-col bg-white items-start w-fit z-20'>

                <Link className={LinkStyle}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}
                >Profile</Link>

                <Link to='/mycourses' className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }} >
                    My Courses
                    <img src={require('./Assets/MyCoursesIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}>
                    Help & Support
                    <img src={require('./Assets/HelpIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}>
                    English
                    <img src={require('./Assets/TranslationIcon.svg').default} alt="" />
                </Link>

                <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}>
                    USD
                    <img src={require('./Assets/DollarIcon.svg').default} alt="" />
                </Link>


                <Link className={LinkStyle}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}>Settings</Link>
                <Link className={LinkStyle}
                    onClick={(e) => { setShowSidebar(false); ToggleClass(e.target.parentNode.parentNode.parentNode, "active") }}>
                    Logout
                </Link>

            </div>
        </div>
    )
}

export default UserDropDown