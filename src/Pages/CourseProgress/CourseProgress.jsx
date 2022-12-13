import React from 'react'

import './CourseProgress.css'
import CoursesProgresReport from './CoursesProgresReport';
const CourseProgress = () => {


    return (
        <div className='flex justify-start items-center mt-20 flex-col'>

            <div className='w-4/5'>
                <h3 className='text-[30px] px-16 pb-6 Boldfont '>Your Progress</h3>
                <div className='w-full flex flex-col gap-14'>

                    <CoursesProgresReport TotalClasses={10} ClassesTaken={5} Index={1}  />
                    <CoursesProgresReport TotalClasses={10} ClassesTaken={10} Index={2} Color={"#FE6B1E"} />
                    <CoursesProgresReport TotalClasses={10} ClassesTaken={5} Index={3} Color={"#2FD535"}/>

                </div>
            </div>
        </div>
    )
}

export default CourseProgress