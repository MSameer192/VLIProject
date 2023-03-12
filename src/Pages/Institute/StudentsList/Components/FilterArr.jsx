import React from 'react'
import DropDown from '../../../../Components/CustomDropdown/DropDown'

const StudentFilterArr = () => {
    const IconSrc = require('../../Instructors/Assets/DropDown.svg').default
    return (
        <>
            <div className=''>
                <h4 className='text-[#22232B] text-4xs font-normal text-left'>Status</h4>
                <input type="text" placeholder='name' className='text-5xs TeacherFilterFieldsBorder w-full' />
            </div>
            <span className='flex flex-col w-full'>
                <h4 className=' text-[#22232B] text-4xs font-normal text-left'>Status</h4>
                <DropDown Label="In Progress" Name="AlphabeticalOrder" TextStyle="text-left text-[#22232B] text-5xs TeacherFilterFieldsBorder" styles="w-full min-w-[275px]"
                    IconSrc={IconSrc}
                />
            </span>
            <span className='flex flex-col w-full'>
                <h4 className=' text-[#22232B] text-4xs font-normal text-left'>Sort by Date Modified</h4>
                <DropDown Label="New to Old" Name="DateModified" TextStyle="text-left text-[#22232B] text-5xs TeacherFilterFieldsBorder"
                    styles="w-full min-w-[275px]"
                    IconSrc={IconSrc}
                />
            </span>
            <span className='flex flex-col w-full'>
                <h4 className='text-[#22232B] text-4xs font-normal text-left'>Filter by Alphabetic Order</h4>
                <DropDown Label="A to Z" Name="AlphabeticalOrder" TextStyle="text-left text-[#22232B] text-5xs TeacherFilterFieldsBorder"
                    styles="w-full min-w-[275px]"
                    IconSrc={IconSrc}
                />
            </span>

        </>
    )
}

export default StudentFilterArr