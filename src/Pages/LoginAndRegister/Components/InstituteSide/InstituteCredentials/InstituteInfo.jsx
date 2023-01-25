import React from 'react'
import { SubmitButton } from '../../../LoginAndRegister';

const InstituteInfo = ({ OnClickFunction, Position, DocumentRef, UserInfoRef }) => {
    let InputBoxStyle = `w-full text-black bg-[#F3F6F7] border-none rounded-lg max-w-[650px] shadow-[3px_4px_4px_#00000040]
    text-4xs    lg:text-2xs     xl:text-xs      2xl:text-base
    py-[6px]                    xl:py-3
    px-[8px]                    xl:px-[22px]    2xl:px-7`;


    return (
        <div className=' w-1/2 flex flex-col items-center justify-around  self-stretch'>
            <div className='flex flex-col items-center gap-5 py-5 mb-24'>

                <input className={InputBoxStyle} type="text" name="" id="" placeholder='Partner Name' />
                <input className={InputBoxStyle} type="text" name="" id="" placeholder='Website if any' />
                <input className={InputBoxStyle} type="text" name="" id="" placeholder='Address' />
                <span className="flex w-full gap-12 max-w-[650px]">
                    <input className={InputBoxStyle} type="number" name="" id="" placeholder='Total Instructors' />
                    <input className={InputBoxStyle} type="number" name="" id="" placeholder='Total Vehicles' />
                </span>
            </div>
            <SubmitButton AuthPageName="Next" ButtonType="button" EleRef={UserInfoRef} OnClickFunction={OnClickFunction} Position={Position} />
        </div>
    )
}

export default InstituteInfo