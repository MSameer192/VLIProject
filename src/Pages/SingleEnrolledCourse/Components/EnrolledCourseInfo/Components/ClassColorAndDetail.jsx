import React from 'react'

const ClassColorAndDetail = () => {
    let SpanStyle = `whitespace-nowrap text-white border-[1px] border-solid border-[#D7DAE2]
    py-3      md:py-4 
    px-4      md:px-5 
    text-3xs  md:text-2xs   xl:text-xs`;
    return (
        <>
            <div className='flex justify-center md:justify-end w-full'>
                <span className={`bg-[#A1A3EF] ${SpanStyle} rounded-l-md`}>Driving</span>
                <span className={`bg-[#7F82F9] ${SpanStyle}`}>Online</span>
                <span className={`bg-[#5456C7] ${SpanStyle} rounded-r-md`}>In Class</span>
            </div>
            <p className='w-full text-xs text-[#707070]'>Hello, Welcome to the Vehicle Mechanics Course !! My name is Schen chen (Teacher name ) and I'll do my best to help you along your journey. To improve your experience, I'll suggest ...</p>
        </>
    )
}

export default ClassColorAndDetail