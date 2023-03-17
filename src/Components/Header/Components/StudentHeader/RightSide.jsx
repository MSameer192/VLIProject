import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OpenLoginSignUp } from "../../../../Actions/ToggleSignupA";
import SignedOutRightSide from "./RightSideComp/SignedOutRightSide";
import SignedUpRightSide from "./RightSideComp/SignedUpRightSide";

function StudentRightSide({ setShowSidebar, ShowSidebar }) {
    let LinkStyle = "text-2xs text-white lg:text-black md:text-xs lg:text-3xs xl:text-2xs 2xl:text-[21px] hover:text-[#A1A3EF]  no-underline SemiBold  bg-[#ffffff00] border-none cursor-pointer";



    let DesktopRightSide = `right-header flex flex-wrap  min-h-fit top-0 -left-12
    mx-12               lg:mx-5     xl:mx-10    2xl:mx-16
    gap-7               lg:gap-7    xl:gap-8    2xl:gap-11
    p-10                lg:p-0
    flex-col            lg:flex-row 
    absolute            lg:static  
    justify-start       lg:justify-end
    rounded-b-[60px]    lg:rounded-none 
    items-start         lg:items-center 
    h-[80vh]            lg:h-full 
    w-full              lg:w-auto`;
    const Dispatch = useDispatch()
    const { UserInfo } = useSelector((store) => store.LoginSignupReducer);
    return <nav
        style={{ left: ShowSidebar ? "-48px" : "-2000px" }}
        className={`${DesktopRightSide} SideBarBG`}
    >
        {/* Common */}
        <Link className={LinkStyle} to='/Ebooks'>E-Books</Link>
        <Link className={LinkStyle} to='/Institutes'>Institutes</Link>
        <Link className={`${LinkStyle} relative`} to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-17px", right: "-18px" }}>&#8963;</sub>
        </Link>

        {UserInfo && UserInfo.User === "Student"
            ? <SignedUpRightSide setShowSidebar={setShowSidebar} LinkStyle={LinkStyle} />
            : <SignedOutRightSide setShowSidebar={setShowSidebar} LinkStyle={LinkStyle} />
        }
        {
            !UserInfo?.UserName ?
                <>
                    <button className={`${LinkStyle}  lg:hidden`} type="button" onClick={() => Dispatch(OpenLoginSignUp("Sign In", true))} >Login</button>
                    <button className={`${LinkStyle} lg:hidden`} type="button" onClick={() => Dispatch(OpenLoginSignUp("Sign Up", true))} >Sign up</button>
                </>
                : null

        }
        <button type="button" className='p-3 rounded-xl border-none cursor-pointer bg-[#A1A3EF] flex items-center justify-center lg:hidden absolute right-2 top-2'
            onClick={() => setShowSidebar(false)}
        >
            <img src={require('./RightSideAssets/CrossIcon.svg').default} alt="" />
        </button>


    </nav>
}

export default StudentRightSide