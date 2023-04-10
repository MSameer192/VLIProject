import React, { useState, useEffect } from 'react'
import ClassScheduler from '../../../Components/Scheduler/Scheduler'
import MyCourses from '../../../Components/MyCourses/MyCourses'
import { TeacherButtons, TeacherInfoButtons } from '../../../PageNames'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import useAxios from '../../../Helpers/CustomHooks/useAxios'
import { BaseUrl } from '../../../Actions/Base'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
const TeacherTimeTableChild = () => {
  const [Events, setEvents] = useState([])
  const { InstructorId } = useParams()
  const [res, Errors, loading] = useAxios("get", `${BaseUrl}/api/teacher/schedule/${InstructorId}`)
  const AddLeaveBtn = () => <button className={`bg-[#A1A3EF] shadow-[3px_3px_6px_#00000029] px-4 py-[14px] border-none  text-white cursor-pointer h-fit whitespace-nowrap w-fit
  rounded-3xl md:rounded-2xl             xl:rounded-3xl
  text-6xs    md:text-5xs     lg:text4xs xl:text-[17px]
  `}>
    Add a Leave/Break
  </button>
  useEffect(() => {
    if (res?.data)
      setEvents(res?.data.map(value => {
        value.endDate = new Date(value.endDate)
        value.startDate = new Date(value.startDate)
        return value
      }))
  }, [res])
  return (
    !loading
      ? <div className='bg-[#F7F7F7] min-h-screen pt-28 '>
        <ClassScheduler Edit={false} TopBtn={AddLeaveBtn} Events={Events} setEvents={setEvents} />
      </div>
      : <LoadingSpinner Bg="white" Position="fixed" Height="screen" Width="full" Left="0" Top="0" />
  )
}
const TeacherTimetablePage = () => {
  const { InstructorId } = useParams()
  return <MyCourses ButtonsInfo={TeacherInfoButtons}
    PageName="AboutInstructor" Component={TeacherTimeTableChild} Param={InstructorId} HideFooter={true} />
}
const TeacherTimetable = () => <InstituteTemplate Element={TeacherTimetablePage} mt="0" />
export default TeacherTimetable