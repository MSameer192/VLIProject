import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LogOut } from '../../../../../../../Actions/UserA';

const DropDownOptions = ({ HideOnClick }) => {
    let LinkStyle = "text-[#4D4F5C] whitespace-nowrap text-3xs no-underline SemiBold py-4 px-6 w-56 text-left hover:text-[#A1A3EF] DropDownBorder";
    const Dispatch = useDispatch();
    const ClickMethod = (e, cb) => {
        HideOnClick(e, cb)
    }
    const LogOutUser = () => Dispatch(LogOut())

    return (
        <div className='flex flex-col bg-white items-start w-fit z-20'>

            <Link to="/" className={LinkStyle}
                onClick={(e) => ClickMethod(e, null)}
            >Profile</Link>

            <Link to='/mycourses/enrolledcourses' className={`${LinkStyle} flex gap-2 justify-between w-full`}
                onClick={(e) => ClickMethod(e, null)} >
                My Courses
                <img src={require('../../../Assets/MyCoursesIcon.svg').default} alt="" />
            </Link>

            <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                onClick={(e) => ClickMethod(e, null)}>
                Help & Support
                <img src={require('../../../Assets/HelpIcon.svg').default} alt="" />
            </Link>

            <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                onClick={(e) => ClickMethod(e, null)}>
                English
                <img src={require('../../../Assets/TranslationIcon.svg').default} alt="" />
            </Link>

            <Link className={`${LinkStyle} flex gap-2 justify-between w-full`}
                onClick={(e) => ClickMethod(e, null)}>
                USD
                <img src={require('../../../Assets/DollarIcon.svg').default} alt="" />
            </Link>


            <Link className={LinkStyle}
                onClick={(e) => ClickMethod(e, null)}>Settings</Link>


            <Link className={LinkStyle}
                onClick={(e) => ClickMethod(e, LogOutUser)}>
                Logout
            </Link>

        </div>
    )
}

export default DropDownOptions