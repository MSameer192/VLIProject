import React from 'react'
import { useNavigate } from 'react-router-dom'
import './InstructorPopup.css'
const InstructorPopup = () => {
    const Navigate = useNavigate()
    const OnClick = () => Navigate('/instructors/list')
    return (
        <div className='flex w-screen h-screen fixed left-0 top-0 justify-center items-center bg-[#00000029] z-30'>
            <div className='flex flex-col gap-[10px] w-full max-w-[360px] aspect-[353_/_221] h-fit bg-white px-8 py-5 rounded-[20px] relative'>
                <div className='flex flex-col gap-3 items-center'>
                    <h3 className='text-5xs font-normal HeadingBorder'>Congratulations !!</h3>
                    <h3 className='font-normal text-6xs'>An Instructor has been added to the Inventory</h3>
                </div>
                <div className='flex flex-col items-center gap-[6px]'>
                    <img className='h-20' src={require('./Assets/Instructor Success.svg').default} alt="" />
                    <button type='button' className='BrandingButton py-1 px-8 rounded-[14px] w-fit text-6xs cursor-pointer'
                        onClick={OnClick}>Done</button>
                </div>
                <img className='absolute right-3 top-[6px] cursor-pointer' src={require('./Assets/Cross.svg').default} alt=""
                    onClick={OnClick}
                />
            </div>
        </div>
    )
}

export default InstructorPopup