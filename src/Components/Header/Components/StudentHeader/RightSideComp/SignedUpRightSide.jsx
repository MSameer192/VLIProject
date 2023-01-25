import React from 'react'
import { Link } from 'react-router-dom';
import ProfileDropDown from '../../ProfileDropDown';
import DropDownOptions from './DropDownOptions';

const SignedUpRightSide = ({ setShowSidebar, LinkStyle }) => {
   
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
            <ProfileDropDown setShowSidebar={setShowSidebar} DropDownOptions={DropDownOptions} LinkStyle={LinkStyle} />
        </>
    )
}



export default SignedUpRightSide