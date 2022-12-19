import { Link } from "react-router-dom";
import SignedOutRightSide from "./RightSideComp/SignedOutRightSide";
import SignedUpRightSide from "./RightSideComp/SignedUpRightSide";

function HeaderRightSide({ UserInfo, setShowSidebar, ShowSidebar }) {
    let LinkStyle = "text-2xs text-white lg:text-black md:text-xs lg:text-3xs xl:text-2xs 2xl:text-[21px] hover:text-[#A1A3EF]  no-underline SemiBold ";



    const ToggleClass = (e, ClassName) => {

        e.classList.toggle(ClassName);
    }
    let MobileViewSideBar = `mx-12 gap-7 flex-col absolute p-10 justify-start rounded-b-[60px] items-start h-[80vh] w-[95%] top-0 -left-12`
    let DesktopRightSide = `right-header flex flex-wrap  min-h-fit
    lg:mx-5     xl:mx-10    2xl:mx-16
    lg:gap-7    xl:gap-8    2xl:gap-11 

    lg:flex-row lg:static lg:p-0 lg:justify-end lg:rounded-none lg:items-center lg:h-full lg:w-auto`
    return <nav
        style={{ left: ShowSidebar ? "-48px" : "-2000px" }}
        className={`${MobileViewSideBar} ${DesktopRightSide} SideBarBG`}
    >
        {/* Common */}
        <Link className={LinkStyle} to='/Ebooks'>E-Books</Link>
        <Link className={LinkStyle} to='/Institutes'>Institutes</Link>
        <Link className={`${LinkStyle} relative`} to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-17px", right: "-18px" }}>&#8963;</sub>
        </Link>


        {UserInfo && UserInfo.User === "Student"
            ? <SignedUpRightSide ToggleClass={ToggleClass} LinkStyle={LinkStyle} setShowSidebar={setShowSidebar} UserInfo={UserInfo} />
            : <SignedOutRightSide setShowSidebar={setShowSidebar} LinkStyle={LinkStyle} />
        }

        <button className='p-3 rounded-xl border-none cursor-pointer bg-[#A1A3EF] flex items-center justify-center lg:hidden absolute -right-2 top-2'
            onClick={() => setShowSidebar(false)}
        >
            <img src={require('./RightSideAssets/CrossIcon.svg').default} alt="" />
        </button>
    </nav>
}

export default HeaderRightSide