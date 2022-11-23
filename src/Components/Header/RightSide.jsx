import { Link } from "react-router-dom";

function HeaderRightSide({ User }) {
    let LinkStyle = "text-2xs text-white md:text-xs lg:text-3xs xl:text-2xs 2xl:text-[21px] header-font";
    User = "Student"
    return <nav className={`right-header hidden justify-around items-center h-full 
    mx-12    lg:mx-8  xl:mx-10  2xl:mx-16
    md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-11
    lg:flex flex-wrap`}
    >
        <Link className={LinkStyle} to='/Ebooks'>E-Books</Link>
        <Link className={LinkStyle} to='/Institutes'>Institutes</Link>
        <Link className={LinkStyle} to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>


        {User && User.User === "Student"
            ? <>
                <Link to='/Favourites' className={LinkStyle}>
                    PKR
                    <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
                </Link>
                <Link to='/Favourites' className={LinkStyle}>
                    English
                    <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
                </Link>
                <Link to='/Favourites' className={LinkStyle}>
                    Latest News
                </Link>
            </>
            : <>

                <Link to='/Favourites' className={LinkStyle}>
                    <img src={require("./Assessts/NotificationIcon.svg").default} alt="" srcset="" />
                </Link>
                <Link to='/Favourites' className={LinkStyle}>
                    <img src={require("./Assessts/FavouriteIcon.svg").default} alt="" srcset="" />
                </Link>
                <Link to='/Favourites' className={LinkStyle}>
                    <img src={require("./Assessts/CartIcon.svg").default} alt="" srcset="" />
                </Link>
                <Link to='/Favourites' className={`flex ${LinkStyle} gap-8 `}>
                    <hr />
                    <span className="flex gap-4">
                        <img src={require("./Assessts/AvatarIcon.svg").default} alt="" srcset="" />
                        <h4 className="SemiBold">Arslan {User?.UserName}</h4>
                    </span>
                </Link>
            </>
        }
    </nav>
}

export default HeaderRightSide