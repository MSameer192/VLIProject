import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../../ProfileDropDown'
import DropDownOptions from './DropDownOptions'
const RightSide = ({ setShowSidebar, ShowSidebar, setAuthPageName }) => {
    return (
        <div className='flex w-1/2 justify-end px-11 gap-10'>
            <Link>
                <img className='h-[30px] cursor-pointer' src={require('../Assets/Notification.svg').default} alt="" />
            </Link>

            <ProfileDropdown setShowSidebar={setShowSidebar} DropDownOptions={DropDownOptions} />
        </div>
    )
}

export default RightSide