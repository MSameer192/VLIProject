import React from 'react'
import { Link } from 'react-router-dom';

function PInput() {
    let pStyle = "text-6xs md:text-4xs xl:text-3xs";

    return <div className='flex gap-5 flex-col '>
        <p className={`${pStyle}`}>
            By checking the checkbox below, you agree to our
            <Link className='text-[#52A9FF] no-underline'> Terms of Use </Link> ,
            <Link className='text-[#52A9FF] no-underline'> Privacy Statement</Link> ,
            and that you are over 18.Your payments will be processed internationally. Additional bank fees may apply.
        </p>
        <span className='flex items-center gap-2 md:gap-3 xl:gap-4'>
            <input className='h-6 w-6 border-[#707070] border-solid border-[2px]' type="checkbox" name="" id="" />
            <p className={`${pStyle} text-[#52A9FF]`}>I Agree</p>
        </span>
    </div>
}

export default PInput