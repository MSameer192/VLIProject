import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogOut } from '../../../../../Actions/UserA'

const DropDownOptions = ({ HideOnClick }) => {
    const Dispatch = useDispatch()
    const LougOutUser = () => Dispatch(LogOut())

    const ClickMethod = (e, cb) => HideOnClick(e, cb)
    let LinkStyle = "text-2xs text-white lg:text-black md:text-xs lg:text-3xs xl:text-2xs 2xl:text-[21px] hover:text-[#A1A3EF]  no-underline SemiBold ";
    return (
        <div  className='flex flex-col bg-white items-start w-fit z-20 px-3 py-2'>
            <Link className={`${LinkStyle} font-normal`}
                onClick={(e) => ClickMethod(e, LougOutUser)}>
                Logout
            </Link>
        </div>
    )
}

export default DropDownOptions