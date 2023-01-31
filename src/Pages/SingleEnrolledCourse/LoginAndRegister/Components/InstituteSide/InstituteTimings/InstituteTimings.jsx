import React from 'react'
import ToggleStatus from './InstituteTimingsComps/ToggleStatus';
import './InstituteTimings.css'
import TimeSelector from './InstituteTimingsComps/TimeSelector';
import { useState } from 'react';
const InstituteTimings = () => {
    const DaysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className='w-1/2 flex flex-col gap-9 bg-[#F5F5F5] py-3 mt-14'>
            {
                DaysArr.map((Day, index) =>
                    <InstituteTime Day={Day} index={index} />
                )
            }

        </div>
    )
}
function InstituteTime({ Day, index }) {
    const [CheckOpened, setCheckOpened] = useState(false);
    return <div className='flex justify-around w-full' key={index + .5}>
        <h4 className='font-normal text-xs w-1/4 min-w-[115px] max-w-[125px]'>{Day}</h4>
        <ToggleStatus index={index} setCheckOpened={setCheckOpened} />
        <TimeSelector CheckOpened={CheckOpened} />
    </div>
}
export default InstituteTimings