import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddCoursePopup = () => {
    const Navigate = useNavigate()
    return (
        <div className='OnAddPopup-BG'>
            <div className='OnAddPopup-Container'>
                <img className='absolute right-3 top-[6px] cursor-pointer' src={require('./Assets/Cross.svg').default} alt=""
                    onClick={() => Navigate('/')}

                />

                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-4xs font-normal text-center'>Congratulations !!</h2>
                    <p className='text-6xs text-center max-w-[260px]'>
                        You have successfully added a new course
                        in the Library
                    </p>
                </div>

                <img className='absolute bottom-6 w-[124px]' src={require('./Assets/SuccessImage.svg').default} alt="" />
                <button className='BrandingButton text-6xs px-9 py-1 rounded-2xl z-10' type='button'
                    onClick={() => Navigate('/')}
                >
                    Okay
                </button>
            </div>
        </div>
    )
}

export default AddCoursePopup