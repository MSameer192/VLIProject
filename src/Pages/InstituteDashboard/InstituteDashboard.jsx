import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import { GetLocalStorage } from '../../Helpers/LocalStorage/LocalStorage'
import InsStaffAdminDashboard from './Institute Admin'
import TeacherDashboard from './Teacher Dashboard/TeacherDashboard'

const InstituteDashboardChild = () => {
  useCheckLogin(false, ["Institute", "Admin"], ["Staff", "Admin", "Instructor"])

  return (
    <div className='mt-20 flex justify-center min-h-screen w-full'>
      {GetLocalStorage("UserInfo").InstituteUserType === "Instructor" ? <TeacherDashboard /> : null}

      {
        GetLocalStorage("UserInfo").InstituteUserType === "Staff" || GetLocalStorage("UserInfo").InstituteUserType === "Admin" || GetLocalStorage("UserInfo").User === "Admin"
          ? <InsStaffAdminDashboard />
          : null
      }
    </div> 
  )
}
const InstituteDashboard = () =>
  <InstituteTemplate Element={InstituteDashboardChild} bg={"bg-[#F7F7F7]"} />




export default InstituteDashboard