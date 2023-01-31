import React, { useState } from 'react'
import { HrsChange, MinsChange, KeyDown } from './Events.js'
const TimeSelectorComp = ({ CheckOpened }) => {
    const TextColor = CheckOpened ? "#B5B5B5" : "#707070"
    const [TimeValue, setTimeValue] = useState({ Hrs: 0, Mins: 0, Period: "AM" });
    const [Period, setPeriod] = useState(false)

    return (
        <span className='shadow-[3px_4px_6px_#00000029] '>
            <span className='bg-[#F5F5F5] cursor-pointer px-5 py-2 rounded shadow-[-3px_-3px_6px_white] w-fit flex'>
                <input type="number" disabled={!CheckOpened} onChange={(e) => HrsChange(e, TimeValue, setTimeValue)}
                    value={TimeValue.Hrs} className={`w-6 outline-none text-[${TextColor}] text-4xs h-fit bg-[#00000000] border-none InstituteTimeSelector`} />:
                <input type="number" disabled={!CheckOpened} onChange={(e) => MinsChange(e, TimeValue, setTimeValue)}
                    value={TimeValue.Mins} className={`w-6 outline-none text-[${TextColor}] text-4xs h-fit bg-[#00000000] border-none InstituteTimeSelector`} />:
                <input type="text" disabled={!CheckOpened} onKeyDown={(e) => KeyDown(e, Period, setPeriod, TimeValue, setTimeValue)}
                    value={Period ? "AM" : "PM"} className={`w-7 outline-none text-[${TextColor}] text-4xs h-fit bg-[#00000000] border-none InstituteTimeSelector`} />
            </span>
        </span>
    )
}
function TimeSelector({ CheckOpened }) {
    return (
        <span className='flex gap-2 items-center'>
            <TimeSelectorComp CheckOpened={CheckOpened} />
            <span className='w-4 Dash'></span>
            <TimeSelectorComp CheckOpened={CheckOpened} />
        </span>
    )
}

export default TimeSelector