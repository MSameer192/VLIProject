import React from 'react'
import { Link } from 'react-router-dom'
import { GetLocalStorage } from '../../../../../../Helpers/LocalStorage/LocalStorage'
import './LeftCards.css';

const LeftCards = () => {
    return (
        <div className='LeftCardsContainer'>
            <div>
                <Link to='/students/list' className='StaffCards bg-white no-underline'>
                    <img className="w-[65px]" src={require('../Assets/Students.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-3xs lg:text-4xs text-[#6DBCDB] text-center'>Students</h4>
                        <p className='text-xs sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl font-normal text-black'>56</p>
                    </div>

                    <p className="text-center text-4xs max-w-[200px] text-[#707070]">
                        10% More students have enrolled this month
                    </p>
                </Link>
                {
                    GetLocalStorage("UserInfo").InstituteUserType === "Staff"

                        ? <div className='StaffCards ClickNoCard'>
                            <img className="w-[30px]" src={require('../Assets/Cursor.svg').default} alt="" />
                            <div className='flex flex-col gap-5 items-center'>
                                <h4 className='Boldfont text-5xs lg:text-4xs text-white text-center'>
                                    No of Clicks
                                </h4>
                                <p className='text-xs sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl font-normal text-white'>1250</p>
                            </div>

                            <p className="text-center text-3xs lg:text-4xs max-w-[200px] text-white">
                                25% increase in number
                                of clicks
                            </p>
                        </div>
                        : GetLocalStorage("UserInfo").InstituteUserType === "Admin" ||
                            GetLocalStorage("UserInfo").User === "Admin"
                            ? <Link className='StaffCards ClickNoCard no-underline' to='/Admin/sales'>

                                <img className="w-[30px]" src={require('../Assets/Dollar.svg').default} alt="" />
                                <div className='flex flex-col gap-5 items-center'>
                                    <h4 className='Boldfont text-3xs lg:text-4xs text-white text-center'>Sales</h4>
                                    <p className='text-xs sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl font-normal text-white'>$ 30,400</p>
                                </div>

                                <p className="text-center text-3xs lg:text-4xs max-w-[200px] text-white">
                                    16 % increase in sales
                                </p>
                            </Link>
                            : null
                }
            </div>

            <div>

                <Link to={'/vehicle/inventory'} className='StaffCards CarCard no-underline text-white'>
                    <img className="w-[60px]" src={require('../Assets/Car.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-3xs lg:text-4xs text-white text-center'>Vehicle Inventory</h4>
                        <p className='text-xs sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl font-normal text-white'>27</p>
                    </div>

                    <p className="text-center text-3xs lg:text-4xs max-w-[200px] text-white">
                        In Use = 5 <br />
                        Broke Down = 2 <br />
                        Available = 20
                    </p>
                </Link>

                <Link to={'/Instructors/list'} className='StaffCards InstructorCard no-underline'>
                    <img className="w-[60px]" src={require('../Assets/Instructor.svg').default} alt="" />
                    <div className='flex flex-col gap-5 items-center'>
                        <h4 className='Boldfont text-3xs lg:text-4xs text-white text-center'>Instructors</h4>
                        <p className='text-xs sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl font-normal text-white'>23</p>
                    </div>

                    <p className="text-center text-3xs lg:text-4xs max-w-[200px] text-white">
                        In Class = 5 <br />
                        Un available = 2 <br />
                        Available = 20
                    </p>
                </Link>
            </div>
        </div>
    )
}






export default LeftCards