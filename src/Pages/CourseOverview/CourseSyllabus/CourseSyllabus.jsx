import React from 'react'

const CourseSyllabus = ({ CourseSyllabusArr, CourseSyllabusRef }) => {

    return (
        <div className='flex flex-col gap-10 flex-wrap items-center py-10 pb-20' ref={CourseSyllabusRef}>
            <h2 className=' text-[38px] PrintBoldfont'>Syllabus</h2>
            <div className='flex flex-wrap w-4/5 items-center justify-between gap-x-32 gap-y-4 [&>*]:gap-5 flex-col sm:flex-row'>
                {CourseSyllabusArr?.map((value) =>
                    <span className='flex items-center justify-center whitespace-nowrap w-[30%]' key={value.CourseSyllabusId}>
                        <img src={require('./Assets/TickIcon.svg').default} alt="" />
                        <p className='text-2xs SemiBold text-[#6E00FF]'>{value.CourseDescription}</p>
                    </span>
                )}
            </div>
        </div>
    )
}

export default CourseSyllabus