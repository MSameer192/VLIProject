import React from 'react'
import EbookTile from './EbookTile'

const EbooksList = ({ BooksArr, Heading, ImgSrc }) => {

    return (
        BooksArr?.length > 0
            ? <div className='flex mt-20 flex-col items-center gap-4 w-full justify-center'>
                <div className='flex gap-1'>
                    <img src={ImgSrc} alt="" />
                    <div className='text-sm '>
                        {Heading}
                    </div>
                </div>


                <div className='flex'>


                    {BooksArr?.map(value => {

                        return <EbookTile BookTitle={value.BookTitle} BookCover={value.BookCover}
                            Price={value.Price} />
                    })}
                </div>


            </div>
            : null
    )
}

export default EbooksList