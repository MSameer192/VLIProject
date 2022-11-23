import { Link } from "react-router-dom"

function SideBarMobileView({ ShowSidebar, setShowSidebar, setAuthPageName }) {

    let LinkStyle = "mx-5 lg:mx-8 text-2xs header-font"
    return <nav
        style={{ left: ShowSidebar ? "0px" : "-2000px" }}
        className={'absolute top-0 h-[100vh] flex flex-col lg:hidden justify-start items-start gap-10 bg-[#4e9320e3] w-[90%]'}>
        <Link className={LinkStyle} to='/Institutes'>Institutes</Link>
        <Link className={LinkStyle} to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>PKR
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>English
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-20px" }}>&#8963;</sub>
        </Link>
        <Link to='/Favourites' className={LinkStyle}>Latest News</Link>
        <Link className={LinkStyle}
            onClick={() => setAuthPageName("Sign In")}
        >login</Link>
        <Link className={LinkStyle}
            onClick={() => setAuthPageName("Sign Up")}
        >Register</Link>
        <button className='h-6 w-6 rounded-[12px] absolute border-none text-xs  -right-4 top-0 cursor-pointer'
            onClick={() => setShowSidebar(false)}
        >
            X
        </button>
    </nav>
}

export default SideBarMobileView