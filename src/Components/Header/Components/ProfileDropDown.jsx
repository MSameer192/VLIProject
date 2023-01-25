import React,{ useState } from 'react'
import { useSelector } from 'react-redux';


import { useHideOnClickOutside } from '../../../Helpers/CustomHooks/Hide Elements/useOutsideChecker';


function ProfileDropDown({ LinkStyle, DropDownOptions, setShowSidebar }) {
    const [DropDownRef, setDropDownRef] = useState(null);
    const [RefBtn, setRefBtn] = useState(null);
    const { UserInfo } = useSelector((store) => store.LoginSignupReducer);



    const ToggleClass = (e, ClassName) => e.classList.toggle(ClassName);
    const HideOnClick = (e, cb) => {

        setShowSidebar(false);
        ToggleClass(e.target.parentNode.parentNode.parentNode, "active");
        if (cb !== null) {
            cb()
        }

    }

    useHideOnClickOutside(DropDownRef, RefBtn, "active")
    return (
        <span className={`flex ${LinkStyle} gap-5 relative cursor-pointer -order-1 lg:order-[0] DropDown`}
            onClick={(e) => ToggleClass(e.target, "active")}
            ref={(e) => { setRefBtn(e) }}
        >
            <hr className="hidden lg:block absolute -left-3 h-full pointer-events-none" />
            <span className="flex gap-2 xl:gap-4 pointer-events-none justify-start items-center">
                <img src={require("./Assets/AvatarIcon.svg").default} alt="" srcSet="" />
                <h4 className="SemiBold text-3xs">{UserInfo?.FirstName}</h4>
            </span>

            <div className='absolute -right-28 top-14 lg:right-5 lg:top-12 shadow-[0px_2px_10px_#00000030]  DropDown-Menu'
                ref={(e) => setDropDownRef(e)}>

                <img className=' absolute -top-2 left-5 lg:right-14 lg:left-auto drop-shadow z-10'
                    src={require('./Assets/PointIcon.svg').default} alt="" />


                <DropDownOptions HideOnClick={HideOnClick} />

            </div>
        </span>)
}

export default ProfileDropDown