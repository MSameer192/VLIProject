import React from 'react'
import { Link } from 'react-router-dom';
import UserDropDown from './UserDropDown';

const SignedUpRightSide = ({ setShowSidebar, LinkStyle, ToggleClass, User }) => {
    return (
        <>

            <Link to='/Favourites' className={LinkStyle}
                onClick={() => setShowSidebar(false)}>
                <img src={require("../RightSideAssets/NotificationIcon.svg").default} alt="" srcSet="" />
            </Link>
            <Link to='/mycourses/Wishlist' className={`${LinkStyle} flex items-center gap-1`}
                onClick={() => setShowSidebar(false)}>
                <h4 className="lg:hidden fontStyle">WishList</h4>  <img src={require("../RightSideAssets/FavouriteIcon.svg").default} alt="" srcSet="" />
            </Link>
            <Link to='/Favourites' className={`${LinkStyle} flex items-center gap-1`}
                onClick={() => setShowSidebar(false)}>
                <h4 className="lg:hidden fontStyle">My Cart </h4><img src={require("../RightSideAssets/CartIcon.svg").default} alt="" srcSet="" />
            </Link>
            <span className={`flex ${LinkStyle} gap-5 relative  DropDown cursor-pointer -order-1 lg:order-[0]`}
                onClick={(e) => { ToggleClass(e.target, "active"); }}
            >
                <hr className="hidden lg:block absolute -left-5 h-full pointer-events-none" />
                <span className="flex gap-2 xl:gap-4 pointer-events-none justify-start">
                    <img src={require("../RightSideAssets/AvatarIcon.svg").default} alt="" srcSet="" />
                    <h4 className="SemiBold">Arslan {User?.UserName}</h4>
                </span>
                <UserDropDown setShowSidebar={setShowSidebar} ToggleClass={ToggleClass} />
            </span>
        </>
    )
}

export default SignedUpRightSide