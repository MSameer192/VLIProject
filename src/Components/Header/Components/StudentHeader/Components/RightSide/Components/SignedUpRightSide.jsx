import React from 'react'
import { Link } from 'react-router-dom';
import ProfileDropDown from '../../../../ProfileDropDown';
import DropDownOptions from './DropDownOptions';

const SignedUpRightSide = ({ setShowSidebar }) => {

    return (
        <>

            <Link to='/Favourites' className="HeaderRightSide-LinkStyle SemiBold"
                onClick={() => setShowSidebar(false)}>
                <img src={require("../Assets/NotificationIcon.svg").default} alt="" srcSet="" />
            </Link>
            <Link to='/mycourses/Wishlist' className={`HeaderRightSide-LinkStyle SemiBold flex items-center gap-1`}
                onClick={() => setShowSidebar(false)}>
                <h4 className="lg:hidden fontStyle">WishList</h4>  <img src={require("../Assets/FavouriteIcon.svg").default} alt="" srcSet="" />
            </Link>
            <Link to='/Favourites' className={`HeaderRightSide-LinkStyle SemiBold flex items-center gap-1`}
                onClick={() => setShowSidebar(false)}>
                <h4 className="lg:hidden fontStyle">My Cart </h4><img src={require("../Assets/CartIcon.svg").default} alt="" srcSet="" />
            </Link>
            <ProfileDropDown setShowSidebar={setShowSidebar} DropDownOptions={DropDownOptions} />
        </>
    )
}



export default SignedUpRightSide