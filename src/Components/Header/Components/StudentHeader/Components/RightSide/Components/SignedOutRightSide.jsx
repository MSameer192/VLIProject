import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutRightSide = ({ setShowSidebar }) => {
    return (
        <>
            <Link to='/Favourites' className="HeaderRightSide-LinkStyle SemiBold relative"
                onClick={() => setShowSidebar(false)}>
                PKR
                <sub style={{ fontSize: 30, position: "absolute", bottom: "-17px", right: "-18px" }}>&#8963;</sub>
            </Link>
            <Link to='/Favourites' className="HeaderRightSide-LinkStyle SemiBold relative"
                onClick={() => setShowSidebar(false)}>
                English
                <sub style={{ fontSize: 30, position: "absolute", bottom: "-17px", right: "-18px" }}>&#8963;</sub>
            </Link>
            <Link to='/Favourites' className="HeaderRightSide-LinkStyle SemiBold"
                onClick={() => setShowSidebar(false)}>
                Latest News
            </Link>
        </>
    )
}

export default SignedOutRightSide