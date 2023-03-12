import React from 'react'
import Car from "../../../Assets/Icon awesome-ca.png";
import Email from "../../../Assets/Icon material-e.png";
import Phone from "../../../Assets/Icon awesome-ph.png";
import './InstructorCardTemplate.css'
const InstructorCardTemplate = ({ Instructors, OnClick, Src, Name, InstructorType }) => {

    return (
        <div className="flex flex-col items-center gap-2 w-1/2 max-w-[310px] shadow-[6px_12px_24px_#00000014] pt-3 px-2 pb-7 bg-white rounded-lg">
            <span className={`w-[294px] h-[272px] object-cover flex ${Src ? "items-center" : "items-end"} justify-center bg-[#DCDCDC]`}>
                <img
                    src={
                        Src ? Src : require('./Assets/Avatar.svg').default
                    }

                    alt="1"
                    className="mt-3 "
                />
            </span>
            {
                Name
                    ? <p className="text-[#45454D] text-4xs text-center">
                        {Name}
                    </p>
                    : null
            }
            <p className="text-[12px] bg-[#0062f629] w-fit text-[#0000ff] text-center px-2 py-[2px] rounded-md">
                Instructor
            </p>

            {<InstructorInfo InstructorData={Instructors[InstructorType]?.InstructorData} InstructorType={InstructorType} />}

            <button className='bg-[#A1A3EF] py-2 px-7 text-[#FFFFFF] shadow-[4px_5px_6px_#00000029] text-[12px] rounded border-none cursor-pointer mt-4'
                onClick={OnClick}
            >
                {!Instructors ? "Select Instructor" : "Change Instructor"}
            </button>
        </div>
    )
}
const InstructorInfo = ({ InstructorData, InstructorType }) => {

    return <div className='InstructorCardInfoContainer'>
        {InstructorData ?

            <>
                <div className='flex items-center gap-2'>
                    <span className='w-6'>
                        <img src={Car} alt="1" className="max-w-[25px]" />
                    </span>
                    <lebal className="text-gray-700 text-5xs">
                        {InstructorData?.Instructor?.LicenseType?.LicenseTypeName}
                    </lebal>
                </div>
                <div className='flex items-center  gap-2'>
                    <span className='w-6'>
                        <img src={Email} alt="1" className="max-w-[25px]" />
                    </span>
                    <lebal className="text-gray-700 text-5xs">
                        {InstructorData?.Email}
                    </lebal>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='w-6'>
                        <img src={Phone} alt="1" className="max-w-[25px]" />
                    </span>
                    <lebal className="text-gray-700 text-5xs">
                        {InstructorData?.CarPhoneNumber}
                    </lebal>

                </div>
            </>
            : "Select an Instructor for " + InstructorType + "  Classes"
        }


    </div>
}
export default InstructorCardTemplate