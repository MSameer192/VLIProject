import React from 'react'

const ClassesIndicator = ({ text}) => {
    let SpanStyle = `whitespace-nowrap text-white border-[1px] border-solid border-[#D7DAE2] h-fit
    py-3        sm:py-2         lg:py-3      xl:py-4 
    px-4        sm:px-3         lg:px-4      xl:px-5 
    px-4        md:px-5  
    text-3xs`;
    return (
        <div className='flex justify-center md:justify-end w-fit '>
            <span className={`bg-[#A1A3EF] ${SpanStyle} ${text} rounded-l-md`}>Driving</span>
            <span className={`bg-[#7F82F9] ${SpanStyle} ${text}`}>Online</span>
            <span className={`bg-[#5456C7] ${SpanStyle} ${text} rounded-r-md`}>In Class</span>
        </div>
    )
}

export default ClassesIndicator