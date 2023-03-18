import React from 'react'
import './TimeSlots.css'
import { useTimeSlotsHider } from '../../../Helpers/CustomHooks/Hide Elements/useTimeSlotsHidder';
import { useState } from 'react';
import { CheckSchedule } from '../Payment/Components/Helper/CheckSchedule';
import { DaysAndTimeSlot } from './Components/DaysAndTimeSlot';

const TimeSlots = ({ ShowTimeSlots, setShowTimeSlots, setEnrollmentData, EnrollmentData, Err, setErr }) => {
    let TimeSlotsArr = ["", "09:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "01:00 PM - 02:00 PM", "03:00 PM - 04:00 PM", "05:00 PM - 06:00 PM"];
    let Days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let BorderStyle = "border-[#E6E6E6] border-solid border-[2px] border-l-0 border-t-0";
    const [InsideReference, setInsideReference] = useState();
    const [OutsideReference, setOutsideReference] = useState();


    useTimeSlotsHider(OutsideReference, InsideReference, setShowTimeSlots, ShowTimeSlots)
    const SetSchedule = (day, TimeSlot) => {
        setEnrollmentData({ ...EnrollmentData, StudentData: { ...EnrollmentData.StudentData, Schedule: { ...EnrollmentData.StudentData.Schedule, [day]: TimeSlot } } })
    }
    const [FirstTimeAttempted, setFirstTimeAttempted] = useState(false);


    const OnSelectSchedule = () => {
        setFirstTimeAttempted(true)
        let CheckErr = CheckSchedule(EnrollmentData, Err, setErr, null, FirstTimeAttempted)
        if (Object.entries(CheckErr).length !== 0)
            return
        if (Err?.Schedule) {
            delete Err?.Schedule
            setErr({ ...Err })
        }
        setShowTimeSlots(false);
    }

    return (
        ShowTimeSlots
            ? <div
                ref={(e) => setOutsideReference(e)}
                className='flex flex-col fixed justify-center  items-center top-0 z-20 h-[calc(100vh_-_80px)] min-h-fit bg-[#00000040] w-full mt-20'
            >


                <div className='bg-white rounded-[40px] gap-6 flex flex-col justify-center items-center w-[95%] xl:w-fit mx-5 overflow-hidden px-2 md:px-14 py-14 '
                    ref={(e) => setInsideReference(e)}
                >

                    <div className='flex w-full h-fit overflow-x-scroll overflow-y-auto py-2 xl:justify-center'
                        id='TimeSlotScrollbar'
                    >
                        <div className='flex flex-col w-fit '>


                            {TimeSlotsArr.map((TimeSlot, TimeIndex, TimeArr) => {
                                return <div className='flex justify-end' key={TimeSlot}>
                                    <DaysAndTimeSlot Days={Days} TimeIndex={TimeIndex} TimeSlot={TimeSlot} BorderStyle={BorderStyle}
                                        TimeArr={TimeArr} SetSchedule={SetSchedule} Err={Err} setErr={setErr} EnrollmentData={EnrollmentData} FirstTimeAttempted={FirstTimeAttempted} />
                                </div>
                            })}

                        </div>


                    </div>


                    <button type='button' onClick={OnSelectSchedule} className='text-base text-white bg-[#A1A3EF] px-[18px] py-[9px]   rounded-xl cursor-pointer w-fit'>
                        Select Schedule
                    </button>
                </div>
            </div>
            : null
    )
}

export default TimeSlots