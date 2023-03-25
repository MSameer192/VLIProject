import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Arrows } from './FreeHoursComp/Arrows'

const FreeHours = ({ EnrollmentData, setEnrollmentData, Duration, INDEX }) => {
    const [FreeTime, setFreeTime] = useState({
        [Duration]: {
            hh: 0,
            mm: 0,
            AM: false
        }
    })

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

    const UpdateArr = (FreeHours) => {
        let Free = FreeHours.map((value, index) => {
            if (index === INDEX) {
                console.log()
                value[`${Duration}`] = FreeTime[`${Duration}`]
                return value
            }
            return { ...value }

        })

        setEnrollmentData({
            ...EnrollmentData, StudentData: {
                ...EnrollmentData.StudentData,
                FreeHours: [...Free]
            }
        })

    }
    const OnIncrease = () => {
        CheckAm()

        if (GetFocused === "hh") {
            if (FreeTime[`${Duration}`]?.hh >= 12)
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: 1 } })

            if (isNaN(FreeTime[`${Duration}`]?.hh))
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: 1 } })

            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: ++FreeTime[`${Duration}`].hh } })
        }



        else if (GetFocused === "mm") {
            if (FreeTime[`${Duration}`].mm >= 59)
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: 0 } })

            if (isNaN(FreeTime[`${Duration}`].mm))
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: 1 } })


            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: ++FreeTime[`${Duration}`].mm } })
        }




        else if (GetFocused === "AM" && (FreeTime[`${Duration}`]?.AM !== "AM" || FreeTime[`${Duration}`]?.AM !== "PM")) {
            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], AM: !FreeTime[`${Duration}`]?.AM } })

        }


    }
    const OnDecrease = () => {
        // console.log(FreeTime[`${Duration}`]?.hh)
        if (GetFocused === "hh") {
            if (FreeTime[`${Duration}`].hh <= 1)
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: 12 } })

            if (isNaN(FreeTime[`${Duration}`].hh))
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: 12 } })


            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], hh: --FreeTime[`${Duration}`].hh } })
        }



        else if (GetFocused === "mm") {
            if (FreeTime[`${Duration}`].mm <= 0) {
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: 59 } })
            }
            if (isNaN(FreeTime[`${Duration}`].mm))
                return setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: 0 } })

            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], mm: --FreeTime[`${Duration}`].mm } })
        }




        else if (GetFocused === "AM" && (FreeTime[`${Duration}`].AM !== "AM" || FreeTime[`${Duration}`].AM !== "PM")) {
            setFreeTime({ ...FreeTime, [Duration]: { ...FreeTime[`${Duration}`], AM: !FreeTime[`${Duration}`].AM } })
        }

    }
    // console.log(EnrollmentData?.FreeHours, FreeTime)
    useEffect(() => {
        UpdateArr(EnrollmentData?.StudentData?.FreeHours)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [FreeTime])
    return (


        <div className='flex gap-1 border-[1px] border-solid border-[#E8E8E8] pl-1 pr-1 py-1 md:py-2 xl:py-3 rounded-lg bg-white'>
            <span className='flex gap-[2px] items-center'>
                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-7 md:w-9 text-center border-none outline-none' type="text" placeholder='hh'
                    value={!isNaN(FreeTime[`${Duration}`].hh) ? FreeTime[`${Duration}`].hh : ""}
                    onChange={(e) => {
                        if (!isNaN(e.target.value) && (e.target.value <= 12 && e.target.value >= 0)) {
                            CheckAm()
                            setFreeTime({ ...FreeTime, hh: e.target.value })
                        }
                    }}
                    onFocus={() => setGetFocused("hh")}
                />
                <h3 className='text-4xs md:text-3xs lg:text-2xs xl:text-xs text-[#A7A7A7] relative -top-[3px]'>:</h3>



                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-7 md:w-9 text-center border-none outline-none' type="text" placeholder='mm'
                    value={!isNaN(FreeTime[`${Duration}`].mm) ? FreeTime[`${Duration}`].mm : ""}
                    onChange={(e) => {

                        if (!isNaN(e.target.value) && (e.target.value <= 59 && e.target.value >= 0)) {
                            CheckAm()
                            setFreeTime({ ...FreeTime, mm: e.target.value })
                        }
                    }}
                    onFocus={() => { setGetFocused("mm") }}
                />



                <input className='text-6xs md:text-5xs lg:text-4xs xl:text-3xs w-5 md:w-7 text-center border-none outline-none ' type="text" placeholder='AM' readOnly
                    onChange={(e) => {
                        setFreeTime({ ...FreeTime, AM: e.target.value })
                        setEnrollmentData({ ...EnrollmentData, FreeHours: [...EnrollmentData.FreeHours, { ...FreeTime, Duration }] })
                    }}
                    value={isBoolean(FreeTime[`${Duration}`].AM) ? FreeTime[`${Duration}`].AM ? "AM" : "PM" : ""}
                    onFocus={() => { setGetFocused("AM") }}
                />

            </span>
            <span className='flex flex-col relative items-center justify-center h-7 w-5'>
                <Arrows OnIncrease={OnIncrease} OnDecrease={OnDecrease} />
            </span>
        </div>


    )
}

function From_To({ Styling, EnrollmentData, setEnrollmentData }) {
    let { HeadingStyle, DivStyle } = Styling
    return <div className={DivStyle}>
        <h3 className={HeadingStyle}>Free Hours</h3>
        <div className='flex items-center gap-1 lg:gap-2 text-xs'>
            <FreeHours EnrollmentData={EnrollmentData} setEnrollmentData={setEnrollmentData} Duration="Start" INDEX={0} />
            To
            <FreeHours EnrollmentData={EnrollmentData} setEnrollmentData={setEnrollmentData} Duration="End" INDEX={0} />
        </div>

    </div>
}
export default From_To