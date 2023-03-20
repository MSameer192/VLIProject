import React from 'react'
import { BaseUrl } from '../../../../../Actions/Base'

const BookTile = ({ value, BookTitle, BookCover, Price, BookRating, Url }) => {
    // const { BookTitle, BookCover } = value;
    if (!Url)
        Url = `${BaseUrl}/api/Books/Image?url=${BookCover}`

        return (
        <div className='w-full lg:w-full xl:w-1/4 2xl:w-[19%] flex flex-col items-center  min-w-[175px] max-w-[210px] overflow-hidden'>

            <span className='w-full aspect-[35_/_33] px-[2px] sm:px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 flex justify-center items-center'>
                <img className='w-full' loading='lazy' src={Url} alt="" />
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
                PKR {Price}
            </p>
        </div>
    )
}

export default BookTile