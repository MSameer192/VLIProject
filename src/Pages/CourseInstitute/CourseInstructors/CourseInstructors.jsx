import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CourseInstructors = ({ Teachers }) => {
    const [Instructors, setInstructors] = useState([
        {
            InstructorName: "TeacherName",
            InstructorShortDetail: "Assistant Professor at the Harris School of Public Policy"
        },
        {
            InstructorName: "TeacherName",
            InstructorShortDetail: "Assistant Professor at the Harris School of Public Policy"
        },
        {
            InstructorName: "TeacherName",
            InstructorShortDetail: "Assistant Professor at the Harris School of Public Policy"
        },
        {
            InstructorName: "TeacherName",
            InstructorShortDetail: "Assistant Professor at the Harris School of Public Policy"
        },
        {
            InstructorName: "TeacherName",
            InstructorShortDetail: "Assistant Professor at the Harris School of Public Policy"
        },
    ]);

    useEffect(() => {
        if (Instructors.length % 2 !== 0) {
            // console.log(Instructors)
            // setInstructors([...Instructors, {}])
        }
    }, [Instructors])
    return (
        <div id='Instructors' className='CourseInstructorsBG'>

            <div className='bg-[#3e2663c2]  flex justify-center'>
                <div className='flex w-[70%] justify-center '>
                    <img src="" alt="" />
                    <div className='flex w-max flex-wrap  justify-between gap-x-10 gap-y-16 py-24 '>
                        {Instructors.map((value, index) => {
                            let Style
                            if (index === 2 || index === 3) Style="relative -left-11"


                                return (<div key={index * 1.2} className={`${Style} flex items-center gap-4 `}>
                                    <span className=''> <img src={require('./Assets/Teacher Image.png')} alt="" /></span>
                                    <span className='flex flex-col justify-between [&>*]:text-white gap-5'>
                                        <h3>{value.InstructorName}</h3>
                                        <p>{value.InstructorShortDetail} </p>
                                    </span>
                                </div>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInstructors