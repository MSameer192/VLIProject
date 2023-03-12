import React from 'react'
import top from './Assets/Path 293.svg'
import img1 from './Assets/image.svg'
import './Notification.css'
import { Link } from 'react-router-dom'
function Notification({ Notifications, setShowNotifications }) {


  return (

    <div className="bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.15)] w-full max-w-[460px] h-[425px]">
      <div><img src={top} alt="img" className='float-right h-[18px] w-[18] mt-[-9px] mr-[67px]'></img></div>
      <div className='w-full pt-4 pb-[22px] text-center bg-white mt- '>
        <p className="flex flex-col justify-center items-center text-[17px] font-normal text-[#4D4F5C] w-full text-center">
          Notification
        </p>
      </div>

      {Notifications?.map(value => {
        if (value !== null) {
          let to = ""
          if (value?.NotificationType === "New Enrollment")
            to = `/enrolledcourse/manage/${value?.RelatedFK}`
          if (value?.NotificationType === "Add new course to Inventory")
            to = `/courses/recommended`

          return <div className='px-10' key={value?.NotificationId}
            onClick={() => setShowNotifications(false)}>
            <Link to={to} className='no-underline SNotification' on>
              <span className='w-[15%] max-w-[45px] flex justify-center items-center'>
                <img src={img1} alt="img" className=' h-[44px] w-[44]'></img>
              </span>

              <div className='w-4/5'>
                <p className='text-[#4D4F5C] text-[13px] font-bold  font-[source sans pro] mt-[9px] leading-[13px]'>{value?.NotificationType}</p>
                <p className='text-[#43425D] mt-[9px] opacity-50 leading-[13px] text-[11px] font-[source sans pro]  font-normal'>
                  {value.Message}
                </p>
              </div>

            </Link>
          </div>
        }
        return null
      })}



      <div className='w-[460px] h-[0px] text-center border-solid border-[1px] border-[#F1F1F3] mt-[8px]'></div>


      <p className=' absolute inset-x-0 bottom-[23px] text-center text-[12px] font-normal font-[source sans pro] leading-[18px] text-[#3B86FF]'>See all</p>
    </div>





  )
}

export default Notification
