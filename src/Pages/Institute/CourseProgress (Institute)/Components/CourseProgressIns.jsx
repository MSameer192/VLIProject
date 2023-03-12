import React from 'react'

import CoursesProgresReport from '../../../../Components/CourseProgressReport/CoursesProgresReport'

const CourseProgressIns = ({ CoursePackage, CourseProgress }) => {

    const { OnlineHours, InClassHours, DrivingHours } = CoursePackage;
 
    return (
        <div className='w-full sm:w-11/12 xl:w-4/5'>
            <h3 className='text-[30px] pb-6 Boldfont px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16'>Client Progress</h3>
            <div className='w-full flex flex-col gap-14'>

                <CoursesProgresReport ClassType={"Overall Course Completion"}
                    TotalClasses={DrivingHours + InClassHours + OnlineHours}
                    ClassesTaken={CourseProgress?.length}
                    Index={1}
                />
                <CoursesProgresReport ClassType={"Online Course Completion"} 
                    TotalClasses={OnlineHours}
                    ClassesTaken={CourseProgress?.OnlineHours?.length || 0}
                    Index={2}
                    Color={"#FE6B1E"} />

                <CoursesProgresReport ClassType={"In Class Course Completion"}
                    TotalClasses={InClassHours}
                    ClassesTaken={CourseProgress?.InClassHours?.length || 0}
                    Index={3}
                    Color={"#2FD535"} />

                <CoursesProgresReport ClassType={"Driving Course Completion"}
                    TotalClasses={DrivingHours}
                    ClassesTaken={CourseProgress?.DrivingHours?.length || 0}
                    Index={4}
                    Color={"#A1A3EF"} />
            </div>
        </div>
    )
}

export default CourseProgressIns