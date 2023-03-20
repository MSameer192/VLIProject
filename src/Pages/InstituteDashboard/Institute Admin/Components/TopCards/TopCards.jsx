import React from 'react'
import { Link } from 'react-router-dom'
import { GetLocalStorage } from '../../../../../Helpers/LocalStorage/LocalStorage'
import './TopCards.css'
const TopCards = () => {
    let AddCourse = `/addcourse`;
    let RecommendCourse = `/Admin/course/recommend`;
    let AdminCourse = `/admin/addcourse`;
    let CourseRoute = GetLocalStorage("UserInfo").User === "Admin"
        ? AdminCourse :
        GetLocalStorage("UserInfo").InstituteUserType === "Admin"
            ? RecommendCourse
            : AddCourse;
    return (
        <div className='flex w-full gap-5'>
            <div className='flex w-[68%] gap-10'>

                <Link to='/students/list' className='StaffCards bg-white no-underline'>
                    <img className="w-[65px]" src={require('./Assets/Students.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-[#6DBCDB] text-center'>Students</h4>
                        <p className='text-[38px] font-normal text-black'>56</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-[#707070]">
                        10% More students have enrolled this month
                    </p>
                </Link>

                {GetLocalStorage("UserInfo").InstituteUserType === "Staff"

                    ? <div className='StaffCards ClickNoCard'>
                        <img className="w-[30px]" src={require('./Assets/Cursor.svg').default} alt="" />
                        <div className='flex flex-col gap-5 items-center'>
                            <h4 className='Boldfont text-4xs text-white text-center'>No of Clicks</h4>
                            <p className='text-[38px] font-normal text-white'>1250</p>
                        </div>

                        <p className="text-center text-4xs max-w-[200px] text-white">
                            25% increase in number
                            of clicks
                        </p>
                    </div>

                    : GetLocalStorage("UserInfo").InstituteUserType === "Admin" ||
                        GetLocalStorage("UserInfo").User === "Admin"
                        ? <Link className='StaffCards ClickNoCard no-underline' to='/Admin/sales'>

                            <img className="w-[30px]" src={require('./Assets/Dollar.svg').default} alt="" />
                            <div className='flex flex-col gap-5 items-center'>
                                <h4 className='Boldfont text-4xs text-white text-center'>Sales</h4>
                                <p className='text-[38px] font-normal text-white'>$ 30,400</p>
                            </div>

                            <p className="text-center text-4xs max-w-[200px] text-white">
                                16 % increase in sales
                            </p>
                        </Link>
                        : null
                }





                <Link to={'/vehicle/inventory'} className='StaffCards CarCard no-underline text-white'>
                    <img className="w-[60px]" src={require('./Assets/Car.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-white text-center'>Vehicle Inventory</h4>
                        <p className='text-[38px] font-normal text-white'>27</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        In Use = 5 <br />
                        Broke Down = 2 <br />
                        Available = 20
                    </p>
                </Link>
                <Link to={'/Instructors/list'} className='StaffCards InstructorCard no-underline'>
                    <img className="w-[60px]" src={require('./Assets/Instructor.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-4xs text-white text-center'>Instructors</h4>
                        <p className='text-[38px] font-normal text-white'>23</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-white">
                        In Class = 5 <br />
                        Un available = 2 <br />
                        Available = 20
                    </p>
                </Link>
            </div>
            <div className='w-[29%] flex flex-col gap-7'>

                <div className='w-full AddCourseCard h-fit '>
                    <div className='w-full text-white text-4xs py-4 px-10 AddCourseDiv '>Add a New Course</div>
                    <div className='text-white px-10 py-5 pb-10 relative'>
                        Want to publish a Vehicle Learning course?
                        click on Create Course to publish
                        <Link className='absolute bottom-2 right-3 flex items-center justify-center gap-4 no-underline text-white'
                            to={CourseRoute}>
                            <span className='text-6xs'>Create Course</span>
                            <span className='rounded-full bg-white shadow-[4px_6px_12px_#4e373a80] flex items-center justify-center    p-[10px] w-fit'>
                                <img src={require('./Assets/Add.svg').default} alt="" />
                            </span>
                        </Link>

                    </div>
                </div>
                {
                    GetLocalStorage("UserInfo").User === "Admin" ?
                        <div className='w-full AddCourseCard h-fit '>
                            <div className='w-full text-white text-4xs py-4 px-10 AddCourseDiv '>Add a New E-Book</div>
                            <div className='text-white px-10 py-5 pb-10 relative'>
                                Want to publish an E-Book to Vehicle
                                Learning innovation click on Create
                                Course to publish
                                <Link className='absolute bottom-2 right-3 flex items-center justify-center gap-4 no-underline text-white'
                                    to={'/admin/Book/add'}>
                                    <span className='text-6xs'>Publish e-book</span>
                                    <span className='rounded-full bg-white shadow-[4px_6px_12px_#4e373a80] flex items-center justify-center    p-[10px] w-fit'>
                                        <img src={require('./Assets/Add.svg').default} alt="" />
                                    </span>
                                </Link>

                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default TopCards