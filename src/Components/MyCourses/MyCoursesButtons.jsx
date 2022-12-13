import React from 'react'
import { Link } from 'react-router-dom'

const MyCoursesButtons = ({ EnrolledCoursesRef, OnClickMethod, ButtonsInfo }) => {
    let LinkStyle = `whitespace-nowrap  text-white cursor-pointer bg-[#ffffff00] border-none no-underline 
                    text-5xs md:text-3xs lg:text-2xs 2xl:text-xs
                    px-1
                    SemiBold`;


    return (

        <span className='flex gap-[6px] sm:gap-4 md:gap-5 lg:gap-10 xl:gap-12 2xl:gap-14'>
            {ButtonsInfo?.map((value, index) => {
                let Style
                if (index === 0)
                    Style = LinkStyle + " ButtonBorder"
                else 
                    Style = LinkStyle
                
                return <Link to={value.Link}
                    ref={EnrolledCoursesRef}
                    className={`${Style}`}
                    onClick={(e) => OnClickMethod(e.target)}
                    id={value.Id}
                >
                    {value.Text}
                </Link>
            })}




        </span>
    )
}

export default MyCoursesButtons