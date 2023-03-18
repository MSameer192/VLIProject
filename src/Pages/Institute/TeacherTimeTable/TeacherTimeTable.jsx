import React, { useState } from 'react'
import ClassScheduler from '../../../Components/Scheduler/Scheduler'

const TeacherTimeTable = () => {
  const [Events, setEvents] = useState([])
  const AddLeaveBtn = () => <button className={`bg-[#A1A3EF] shadow-[3px_3px_6px_#00000029] px-4 py-[14px] border-none  text-white cursor-pointer h-fit whitespace-nowrap w-fit
  rounded-3xl md:rounded-2xl             xl:rounded-3xl
  text-6xs    md:text-5xs     lg:text4xs xl:text-[17px]
  `}>
    Add a Leave/Break
  </button>
  return (
    <div className='bg-[#F7F7F7] min-h-screen pt-28 '>
      <ClassScheduler TopBtn={AddLeaveBtn} Events={Events} setEvents={setEvents} />
    </div>
  )
}
// const TeacherTimetablePage = () => <MyCourses ButtonsInfo={TeacherButtons} PageName="UpcomingClasses" Component={TeacherTimeTable} />

// const TeacherTimetable = () => <InstituteTemplate Element={TeacherTimetablePage} m_top="mt-0"  />
export default TeacherTimeTable