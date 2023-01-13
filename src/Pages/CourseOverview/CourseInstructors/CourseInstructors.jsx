import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CourseInstructors = ({ InstructorDetails, InstructorRef }) => {
    const [Instructors, setInstructors] = useState([]);

    useEffect(() => {
        setInstructors(InstructorDetails)
    }, [Instructors, InstructorDetails])
    return (
        <div ref={InstructorRef}>
            <h3 className='text-[38px] text-center PrintBoldfont'>Instructors</h3>
            <div id='Instructors' className='CourseInstructorsBG'>
                <div className='bg-[#3e2663c2]  flex justify-center'>
                    <div className='flex w-[70%] justify-center'>
                        <div className='flex w-max flex-wrap  justify-between gap-x-10 gap-y-16 py-24 '>
                            {Instructors?.map((value, index) => {
                                let Style
                                if (index === 2 || index === 3) Style = "relative -left-11"

                                return (<div key={value.InstructorId} className={`${Style} flex items-center gap-4`}>
                                    <span className=''> <img src={require('./Assets/Teacher Image.png')} alt="" /></span>
                                    <span className='flex flex-col justify-between [&>*]:text-white gap-5'>
                                        <h3 className='text-2xs font-normal'>
                                            {value?.User?.FirstName + " " + value?.User?.LastName}
                                        </h3>
                                        <p>
                                            {value?.InstructorShortDetail}
                                        </p>
                                    </span>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInstructors