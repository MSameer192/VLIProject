import React from 'react'
import ClassColorAndDetail from './Components/ClassColorAndDetail';
import ClassDetails from './Components/ClassDetails';

const SingleEnrolledCourse = () => {


  let divWidth = "w-full sm:w-11/12 md:w-[89%] lg:w-[86%] xl:w-[83%] 2xl:w-4/5"
  return (
    <div className='mt-20 flex flex-col items-center'>
      <div className='w-11/12 md:w-4/5 flex items-start flex-col gap-5'>
        <h2 className='text-xs sm:text-sm md:text-base lg:text-[28px] xl:text-[30px] 2xl:text-lg Blackfont'>Module 1</h2>
        <div className='bg-[#F0F0F7] flex flex-col gap-10 items-center  px-3 py-20'>
          <div className={`flex flex-col items-center gap-6 ${divWidth}`}>
            <ClassColorAndDetail />
          </div>



          <div className={`relative mt-20 flex flex-col gap-4 ${divWidth}`}>
            <h4 className={`absolute 
                            text-3xs  sm:text-2xs   md:text-xs  lg:text-sm    xl:text-base  2xl:text-[30px]  
                            -top-10   sm:-top-11    md:-top-12  lg:-top-14    xl:-top-16
                            left-0    sm:-left-4    md:-left-8  lg:-left-12   xl:-left-16   2xl:-left-20
                            SemiBold`}>Week 1</h4>
            <ClassDetails />
            <ClassDetails />

          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleEnrolledCourse