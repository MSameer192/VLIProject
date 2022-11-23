import React from 'react'
import CourseDetails from './CourseDetails'
import './CourseInstitute.css'
const CourseInstitute = () => {

    return (
        <div className='mt-[80px]'>

            <div className='relative flex flex-col items-center'>
                <div className='absolute left-0 top-0 min-h-[758px] h-[80vh] w-full SchoolBackGroundImage -z-10'>
                    <div className='h-full w-full bg-[rgba(0,0,0,0.5)]'>

                    </div>

                </div>

                <h1 className='text-white text-[33px] Boldfont '>Course Name</h1>

                <div className='flex w-11/12 justify-center gap-6 mt-[120px]'>
                    <div>
                        <img src={require('./Assets/Course Image.png')} alt="" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-[40px] Blackfont'>Vehicle Mechanics</h2>
                        <span className='flex gap-16 items-center'>
                            <span className='flex gap-3 items-center text-white '>
                                <img src={require('./Assets/TimeIcon.svg').default} className='d' alt="" />
                                <h4 className=' text-xs SemiBold'> 2 - 3 weeks</h4>
                            </span>
                            <span className='flex gap-3 items-center text-white '>
                                <img src={require('./Assets/LaptopIcon.svg').default} alt="" />
                                <h4 className=' text-xs SemiBold'> 100% Online Registration</h4>
                            </span>
                        </span>
                        <span className='text-white'>
                            <p className='text-2xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.</p>
                            <p className=' text-2xs SemiBold'>22,000 Students already enrolled</p>
                        </span>
                        <span className='flex  gap-3'>
                            <span className=''>
                                <span >
                                    <img src={require('./Assets/StarIcon.svg').default} alt="" />
                                    <img src={require('./Assets/StarIcon.svg').default} alt="" />
                                    <img src={require('./Assets/StarIcon.svg').default} alt="" />
                                    <img src={require('./Assets/StarIcon.svg').default} alt="" />
                                    <img src={require('./Assets/StarIcon.svg').default} alt="" />
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <img className='h-5 cursor-pointer' src={require('./Assets/ThumbIcon.svg').default} alt="" />
                                    <h5 className='text-base SemiBold text-white'>
                                        %100
                                    </h5>
                                </span>

                            </span>
                            <h5 className='text-white text-4xs SemiBold' >(Reviewed by 2000 Students)</h5>
                        </span>

                        <h3 className='text-[33px] text-white Boldfont'>Orem Ipsum Dolor Sit Amet, Consec</h3>
                        <p className='text-white text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicul
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel
                        </p>
                    </div>


                    <div className=''>
                        <span className='flex items-center text-[#BBAEFF] relative'>
                            <img className='absolute -left-10 top-2' src={require('./Assets/TimeIcon.svg').default} alt="" />
                            <h3 className='text-xs font-normal whitespace-nowrap'>Opening Hours
                                <h5 className='font-normal text-5xs text-white'>( Click here to expand )</h5>
                            </h3>
                        </span>

                        <h2 className='text-white text-[33px] SemiBold'>Offered By</h2>
                        <img src={require('./Assets/Institute Logo.png')} alt="" />
                    </div>
                </div>


            </div>


            <CourseDetails />
        </div>
    )
}

export default CourseInstitute