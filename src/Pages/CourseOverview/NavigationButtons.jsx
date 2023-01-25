import React from 'react'

const NavigationButtons = ({ InstructorRef, CourseSyllabusRef, VehicleDetailRef, StudentReviewRef, CourseDetailRef }) => {
    let LinkStyle = "no-underline text-black text-4xs sm:text-2xs p-1 py-3 sm:p-4 SemiBold whitespace-nowrap";

    const MoveToOnClick = (Part) => window.scrollTo({ top: Part.current?.offsetTop - 70, behavior: 'smooth' })


    return (
        <div className='flex w-full justify-center sticky top-20 z-10 bg-white'>
            <span className='flex items-start justify-around px-1 gap-1 sm:gap-10 [&>*]:SemiBold [&>*]:bg-[#ffffff00] [&>*]:cursor-pointer w-11/12 md:w-1/2 Border' >
                <button onClick={() => MoveToOnClick(CourseDetailRef)} className={`${LinkStyle} CourseDetailsNavigateBtns NavigateButtonBorder`}>
                    About
                </button>

                <button onClick={() => MoveToOnClick(InstructorRef)} className={`${LinkStyle}  CourseDetailsNavigateBtns border-none `}>
                    Instructors
                </button>

                <button onClick={() => MoveToOnClick(CourseSyllabusRef)} className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>
                    Syllabus
                </button>

                <button onClick={() => MoveToOnClick(VehicleDetailRef)} className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>
                    Vehicle Details
                </button>

                {/* <button onClick={() => MoveToOnClick(StudentReviewRef,80)} className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>
                    Reviews
                </button> */}

            </span>
        </div>
    )
}

export default NavigationButtons