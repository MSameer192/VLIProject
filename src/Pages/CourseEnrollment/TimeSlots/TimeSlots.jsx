import React, { useState } from 'react'
import { useRef } from 'react';
import { useHideOnClickOutside } from '../../../Helpers/CustomHooks/useOutsideChecker';

const TimeSlots = ({ ShowTimeSlots, setShowTimeSlots }) => {
    let TimeSlots = ["", "09:00 AM - 10:00AM", "11:00 AM - 12:00PM", "01:00 AM - 02:00PM", "03:00 AM - 04:00PM", "05:00 AM - 06:00PM"];
    let Days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let BorderStyle = "border-[#E6E6E6] border-solid border-[2px] border-l-0 border-t-0";
    const OutsideReference = useRef(null);

    useHideOnClickOutside(OutsideReference.current, setShowTimeSlots)

    return (
        ShowTimeSlots ? <div className='flex flex-col fixed justify-center  items-center top-0 z-20 h-screen bg-[#00000040] w-full'
        >


            <div className='bg-white rounded-[40px] gap-6 flex flex-col items-center w-[95%] xl:w-fit mx-5 overflow-hidden px-2 md:px-14 py-14 '
                ref={OutsideReference}
            >

                <div className='flex w-full xl:justify-center overflow-x-scroll py-2'
                    id='TimeSlotScrollbar'
                >
                    <div className='flex flex-col justify-center w-fit '>


                        {TimeSlots.map((Times, TimeIndex, TimeArr) => {

                            return <div className='flex justify-end'>

                                {Days.map((days, DaysIndex) => {
                                    let Width = "w-52"
                                    if (DaysIndex === 0) Width = "w-28"; else Width = 'w-52';

                                    if (TimeIndex === 0) return <h4 className={`text-6xs md:text-5xs lg:text-4xs xl:text-3xs text-[#A1A3EF] text-center ${Width} Blackfont border-l-0 border-t-0 ${BorderStyle}`}>{TimeArr[DaysIndex]} </h4>


                                    if (DaysIndex === 0)
                                        return <div className={`flex justify-center items-center w-28 border-l-0 ${BorderStyle}`}>
                                            <h4 className='text-3xs Blackfont'>{Days[TimeIndex]}</h4>
                                        </div>

                                    return (
                                        <span className={`w-52 flex justify-center py-5 ${BorderStyle}`}>
                                            <label className='Radio-Btn'>
                                                <input className='relative left-1/2 -translate-x-1/2' value={`${Days[TimeIndex]} + ${Times}`} type="radio" name={`${Times}`} id="" />
                                                <span className='CheckMark'>
                                                </span>
                                            </label>
                                        </span>
                                    )
                                })}
                            </div>
                        })}

                    </div>


                </div>


                <button className='text-base text-white bg-[#A1A3EF] px-[18px] py-[9px]   rounded-xl cursor-pointer w-fit'>
                    Select Schedule
                </button>
            </div>
        </div>
            : null
    )
}

export default TimeSlots