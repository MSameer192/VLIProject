import React from 'react'
import { BaseUrl } from '../../../../Actions/Base'
const EbookTile = ({ BookTitle, BookCover, Price }) => {
    console.log(BookTitle)
    return (
        <div className='w-full lg:w-full xl:w-1/4 2xl:w-[19%] flex flex-col items-center  min-w-[175px] max-w-[210px] overflow-hidden'>

            <div className='flex flex-col items-center w-full EbooksContainerBg'>
                <span className='w-full aspect-[35_/_33] px-[2px] sm:px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 flex justify-center items-center  h-[318px]  bg-[#80808020]'>
                    <img className='w-full' loading='lazy' src={`${BaseUrl}/api/Books/Image?url=${BookCover}`} alt="" />
                </span>


                <h2 className='text-base text-center text-[#163235] SemiBold'>
                    {BookTitle}
                </h2>
            </div>
            <span className='flex justify-center items-center gap-2 text-xs text-[#163235] SemiBold'>
                <img src={require('../../../Admin/E-Book list/Components/BookTile/Assets/Good.svg').default} alt="" />
                100 %
            </span>
            <p className='text-xs gap-2 text-[#163235] SemiBold'>
                PKR {Price}
            </p>

        </div>
    )
}


export default EbookTile