import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OpenLoginSignUp } from "../../../../../../Actions/ToggleSignupA";
import SignedOutRightSide from "./Components/SignedOutRightSide";
import SignedUpRightSide from "./Components/SignedUpRightSide";
import './RightSide.css'
function StudentRightSide({ setShowSidebar, ShowSidebar }) {

    const Dispatch = useDispatch()
    const { UserInfo } = useSelector((store) => store.LoginSignupReducer);

    return <nav
        style={{ left: ShowSidebar ? "-48px" : "-2000px" }}
        className={`RightSideAndSideBar SideBarBG`}
    >
        {/* Common */}
        <Link className="HeaderRightSide-LinkStyle SemiBold" to='/Ebooks'>E-Books</Link>
        <Link className="HeaderRightSide-LinkStyle SemiBold" to='/Institutes'>Institutes</Link>
        <Link className="HeaderRightSide-LinkStyle SemiBold relative" to='/Courses'> Courses
            <sub style={{ fontSize: 30, position: "absolute", bottom: "-17px", right: "-18px" }}>&#8963;</sub>
        </Link>

        {UserInfo && UserInfo.User === "Student"
            ? <SignedUpRightSide setShowSidebar={setShowSidebar} />
            : <SignedOutRightSide setShowSidebar={setShowSidebar} />
        }
        {
            !UserInfo?.UserName ?
                <>
                    <button className="HeaderRightSide-LinkStyle SemiBold lg:hidden" type="button" onClick={() => Dispatch(OpenLoginSignUp("Sign In", true))} >Login</button>
                    <button className="HeaderRightSide-LinkStyle SemiBold lg:hidden" type="button" onClick={() => Dispatch(OpenLoginSignUp("Sign Up", true))} >Sign up</button>
                </>
                : null

        }
        <button type="button" className='CrossButton'
            onClick={() => setShowSidebar(false)}
        >
            <img src={require('./Assets/CrossIcon.svg').default} alt="" />
        </button>


    </nav>
}

export default StudentRightSide