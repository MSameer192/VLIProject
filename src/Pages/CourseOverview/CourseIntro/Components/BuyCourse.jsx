import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { OpenLoginSignUp } from '../../../../Actions/ToggleSignupA';


export function BuyCourse({ CourseInfo }) {
    let ButtonStyle = `text-white text-center w-fit min-w-[250px] py-6 rounded-[9px] whitespace-nowrap border-none px-10 cursor-pointer SemiBold
    text-3xs md:text-3xs lg:text-2xs xl:text-sm 
    `
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer)
    const Navigate = useNavigate()
    const Dispatch = useDispatch();

    const NavigateToEnrollment = () => {

        if (Authenticated && CourseInfo?.Enrolled)
            Navigate('/mycourses/enrolledcourses')

        else if (Authenticated)
            Navigate('/Enrollment/Course', { state: { InstituteCourseId: CourseInfo?.InstituteCourseId } })

        else
            Dispatch(OpenLoginSignUp("Sign In", false))

    }

    return <span className="flex gap-5 mt-10 flex-col items-center sm:flex-row">
        <button onClick={NavigateToEnrollment} className={`${ButtonStyle} bg-[#A1A3EF]`}>
            {CourseInfo?.Enrolled ? "Enrolled" : `Enroll for ${CourseInfo?.CoursePackages[0]?.TotalFee}`}

        </button>
        <button className={`${ButtonStyle} text-white sm:text-[#A1A3EF] bg-[#A1A3EF] sm:bg-white`}>

            Download Curriculum
        </button>
    </span>
}