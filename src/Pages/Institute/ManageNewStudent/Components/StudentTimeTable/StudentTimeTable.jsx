import React from 'react'
import ClassScheduler from '../../../../../Components/Scheduler/Scheduler'
 

const StudentTimeTable = ({ StudentInfo, Events, setEvents, SubmitSchedule }) => {





    const SaveBtn = () =>
        <button type="button" className='BrandingButton rounded-[28px] text-base px-6 py-3 mb-5 hover:bg-white   hover:text-black hover:border-[#A1A3EF] hover:border-[2px] hover:border-solid duration-200' onClick={() => SubmitSchedule()}>
            Save & Continue
        </button>

    return (
        <div className='flex flex-col w-full'>
            <p className="text-center text-xl w-full py-5 border-4 bg-[#F6F5F5] text-black mt-7 SemiBoldItalic">
                Set Time Table
            </p>
            <ClassScheduler Name={StudentInfo?.FirstName + " " + StudentInfo?.LastName} BottomComp={SaveBtn}
                setEvents={setEvents}
                Events={Events}
            />
        </div>
    )
}



export default StudentTimeTable