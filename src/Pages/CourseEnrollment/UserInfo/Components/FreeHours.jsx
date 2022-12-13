import React from 'react'
import { useState } from 'react'
import { Arrows } from './FreeHoursComp/Arrows'

const FreeHours = () => {
    const [FreeTime, setFreeTime] = useState()

    const [GetFocused, setGetFocused] = useState({
        hh: 0,
        mm: 0,
        AM: false
    });
    const isBoolean = val => 'boolean' === typeof val;
    const CheckAm = () => {
        if (isBoolean(FreeTime?.AM) === false)
            setFreeTime({ ...FreeTime, AM: true })

    };

    const OnIncrease = () => {
        CheckAm()
        if (GetFocused === "hh") {
            if (FreeTime?.hh >= 12)
                return setFreeTime({ ...FreeTime, hh: 1 })

            if (isNaN(FreeTime?.hh))
                return setFreeTime({ ...FreeTime, hh: 1 })


            setFreeTime({ ...FreeTime, hh: ++FreeTime.hh })
        }



        else if (GetFocused === "mm") {
            if (FreeTime?.mm >= 59)
                return setFreeTime({ ...FreeTime, mm: 0 })

            if (isNaN(FreeTime?.mm))
                return setFreeTime({ ...FreeTime, mm: 1 })


            setFreeTime({ ...FreeTime, mm: ++FreeTime.mm })
        }




        else if (GetFocused === "AM" && (FreeTime?.AM !== "AM" || FreeTime?.AM !== "PM")) {
            setFreeTime({ ...FreeTime, AM: !FreeTime?.AM })
        }

    }
    const OnDecrease = () => {

        if (GetFocused === "hh") {
            if (FreeTime?.hh <= 1)
                return setFreeTime({ ...FreeTime, hh: 12 })

            if (isNaN(FreeTime?.hh))
                return setFreeTime({ ...FreeTime, hh: 12 })

            setFreeTime({ ...FreeTime, hh: --FreeTime.hh })
        }



        else if (GetFocused === "mm") {
            if (FreeTime?.mm >= 0) {
                return setFreeTime({ ...FreeTime, mm: 59 })
            }
            if (isNaN(FreeTime?.mm))
                return setFreeTime({ ...FreeTime, mm: 59 })

            setFreeTime({ ...FreeTime, mm: --FreeTime.mm })
        }




        else if (GetFocused === "AM" && (FreeTime?.AM !== "AM" || FreeTime?.AM !== "PM")) {
            setFreeTime({ ...FreeTime, AM: !FreeTime.AM })
        }


    }


    return (


        <div className='flex gap-1 border-[1px] border-solid border-[#E8E8E8] pl-1 pr-1 py-1 md:py-2 xl:py-3 rounded-lg bg-white'>
            <span className='flex gap-[2px] items-center'>
                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-7 md:w-9 text-center border-none outline-none' type="text" placeholder='hh'
                    value={!isNaN(FreeTime?.hh) ? FreeTime?.hh : ""}
                    onChange={(e) => {
                        if (!isNaN(e.target.value) && (e.target.value <= 12 && e.target.value >= 0)) {
                            CheckAm()
                            setFreeTime({ ...FreeTime, hh: e.target.value })
                        }
                    }}
                    onFocus={() => setGetFocused("hh")}
                />
                <h3 className='text-4xs md:text-3xs lg:text-2xs xl:text-xs text-[#A7A7A7] relative -top-[3px]'>:</h3>



                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-7 md:w-9text-center border-none outline-none' type="text" placeholder='mm'
                    value={!isNaN(FreeTime?.mm) ? FreeTime?.mm : ""}
                    onChange={(e) => {

                        if (!isNaN(e.target.value) && (e.target.value <= 59 && e.target.value >= 0)) {
                            CheckAm()
                            setFreeTime({ ...FreeTime, mm: e.target.value })
                        }
                    }}
                    onFocus={() => { setGetFocused("mm") }}
                />



                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-5 md:w-7 text-center border-none outline-none ' type="text" placeholder='AM' readOnly
                    onChange={(e) => setFreeTime({ ...FreeTime, AM: e.target.value })}
                    value={isBoolean(FreeTime?.AM) ? FreeTime?.AM ? "AM" : "PM" : ""}
                    onFocus={() => { setGetFocused("AM") }}
                />

            </span>
            <span className='flex flex-col relative items-center justify-center h-7 w-5'>
                <Arrows OnIncrease={OnIncrease} OnDecrease={OnDecrease} />
            </span>
        </div>


    )
}

function From_To({ HeadingStyle }) {
    return <div className='flex flex-col gap-2 w-full'>
        <h3 className={HeadingStyle}>Free Hours</h3> 
        <div className='flex items-center gap-1 lg:gap-2 text-xs'>
            <FreeHours />
            To
            <FreeHours />
        </div>
       
    </div>
}
export default From_To