import React from 'react'
import { useRef } from 'react';
import { SubmitButton } from '../../../LoginAndRegister'

const InstituteUserInfo = ({ Position, OnClickFunction }) => {
    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg max-w-[650px] shadow-[3px_4px_4px_#00000040]
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;
    const DivRef = useRef()
    return (
        <div className='flex flex-col items-center' ref={DivRef}>
            <div className='flex flex-col items-center gap-5 py-5 mb-24'>
                <span className="flex w-full gap-12 max-w-[650px]">
                    <input className={InputBoxStyle} type="text" name="" id="" placeholder='First Name' />
                    <input className={InputBoxStyle} type="text" name="" id="" placeholder='Last Name' />
                </span>
                <input className={InputBoxStyle} type="email" name="" id="" placeholder='Email Address' />

                <input className={InputBoxStyle} type="text" name="" id="" placeholder='Country' />
                <span className="flex w-full gap-12 max-w-[650px]">
                    <input className={InputBoxStyle} type="text" name="" id="" placeholder='State' />
                    <input className={InputBoxStyle} type="text" name="" id="" placeholder='City' />
                </span>
                <input className={InputBoxStyle} type="text" name="" id="" placeholder='Phone Number' />
            </div>
            <SubmitButton AuthPageName="Next" ButtonType="button" EleRef={DivRef} OnClickFunction={OnClickFunction} Position={Position} />
        </div>
    )
}

export default InstituteUserInfo