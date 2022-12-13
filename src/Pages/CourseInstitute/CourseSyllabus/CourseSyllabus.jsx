import React from 'react'

const CourseSyllabus = () => {
    return (
        <div className='flex flex-col gap-10 flex-wrap items-center py-10 pb-20'>
            <h2 className=' text-[38px] text-white PrintBoldfont'>Syllabus</h2>
            <div className='flex flex-wrap w-4/5 justify-between gap-x-32 gap-y-4 [&>*]:text-white [&>*]:justify-center [&>*]:gap-5   [&>*]:whitespace-nowrap [&>*]:w-[30%]'>
                
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
                <span className='flex items-center'>
                    <img src={require('./Assets/TickIcon.svg').default} alt="" />
                    <p className='text-2xs'>Sourcing, organizing, and managing data</p>
                </span>
            </div>
        </div>
    )
}

export default CourseSyllabus