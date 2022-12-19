import { Link } from "react-router-dom"

function CourseAboutSide({ setButtonsParent,CourseInfo }) {
    let LinkStyle="no-underline text-black sm:text-white text-4xs sm:text-2xs p-1 py-3 sm:p-4"
    return <div className=' w-full'
        ref={(e) => { setButtonsParent(e) }}
    >
        <span className='flex justify-between px-1 gap-1 sm:gap-10 [&>*]:SemiBold [&>*]:bg-[#ffffff00] [&>*]:cursor-pointer Border'>
            <Link className={`${LinkStyle} CourseDetailsNavigateBtns ButtonBorder`}>About</Link>
            <Link className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>Instructors</Link>
            <Link className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>Syllabus</Link>
            <Link className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>Vehicle Details</Link>
            <Link className={`${LinkStyle} CourseDetailsNavigateBtns border-none `}>Reviews</Link>
        </span>

        <div className=' px-4 sm:p-10 w-full'>

            <h3 className='text-base text-black sm:text-white Boldfont'>Orem Ipsum Dolor Sit Amet, Consec</h3>
            <p className='max-w-[1150px] text-black sm:text-white text-4xs sm:text-[24px] break-words'>
             {CourseInfo?.Course?.Description}
            </p>
            
        </div>
    </div>
}

export default CourseAboutSide