import React from 'react'
import { BaseUrl } from '../../../../../Actions/Base'

const BookTile = ({ value, }) => {
    const { BookTitle,BookCover } = value
    return (
        <div className='w-[19%] flex flex-col items-center  max-w-[210px] overflow-hidden'>
            <span className='w-full px-5 flex justify-center items-center'>
                <img className=' h-80' src={`${BaseUrl}/Books/Image?url="${BookCover}"`} alt="" />
            </span>
            <h2 className='text-base text-center text-[#163235] SemiBold'>
                {BookTitle}
            </h2>
            <span className='flex gap-[5px] my-1'>
                <img src={require('./Assets/Rating.svg').default} alt="" />
                <img src={require('./Assets/Rating.svg').default} alt="" />
                <img src={require('./Assets/Rating.svg').default} alt="" />
                <img src={require('./Assets/Rating.svg').default} alt="" />
                <img src={require('./Assets/Rating.svg').default} alt="" />
            </span>
            <span className='flex justify-center items-center gap-2 text-xs text-[#163235] SemiBold'>
                <img src={require('./Assets/Good.svg').default} alt="" />
                100 %
            </span>
            <p className='text-xs gap-2 text-[#163235] SemiBold'>
                PKR 2000
            </p>
        </div>
    )
}

export default BookTile