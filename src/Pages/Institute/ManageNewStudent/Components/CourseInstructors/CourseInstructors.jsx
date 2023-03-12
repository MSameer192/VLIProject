import React, { useState } from 'react'
import ClassesIndicator from '../../../../../Components/ClassesIndicator/ClassesIndicator'
import InstructorCardTemplate from './Components/InstructorCardTemplate'

const CourseInstructors = ({ ShowSlider, setShowSlider, Instructors, OneInstructor, setOneInstructor }) => {


    const OnClick = InstructorType =>
        setShowSlider({ ...ShowSlider, InstructorType, Show: !ShowSlider.Show })

    return (
        <div className="w-full flex flex-col items-center mt-14 gap-7">
            <p className="text-center text-xl italic box-border w-full py-5 border-4 bg-[#F6F5F5] text-black mt-7">
                Assign an Instructor
            </p>
            <span className='flex flex-col gap-3'>
                <ClassesIndicator />
                <div className="flex justify-center items-center w-full gap-1">
                    <input type="checkbox" className="h-5 w-5" id='OneInstructor' value={OneInstructor}
                        onChange={() => setOneInstructor(!OneInstructor)}
                    ></input>
                    <label htmlFor='OneInstructor' className="text-6xs">
                        Use same Instructor for all Category classes
                    </label>
                </div>
            </span>


            <div className="flex justify-center mt-5 w-full flex-wrap gap-20">

                <InstructorCardTemplate
                    InstructorType="Driving"
                    Instructors={Instructors}
                    OnClick={() => OnClick("Driving")}
                    Src={Instructors["Driving"]?.InstructorImage}
                    Name={Instructors["Driving"]?.InstructorName}
                />
                {!OneInstructor
                    ? <>

                        <InstructorCardTemplate
                            InstructorType="Online"
                            Instructors={Instructors}
                            OnClick={() => OnClick("Online")}
                            Src={Instructors["Online"]?.InstructorImage}
                            Name={Instructors["Online"]?.InstructorName}

                        />
                        <InstructorCardTemplate
                            InstructorType="In Class"
                            Instructors={Instructors}
                            OnClick={() => OnClick("InClass")}
                            Src={Instructors["InClass"]?.InstructorImage}
                            Name={Instructors["InClass"]?.InstructorName}
                        />
                    </>
                    : null
                }


            </div>
        </div>
    )
}

export default CourseInstructors