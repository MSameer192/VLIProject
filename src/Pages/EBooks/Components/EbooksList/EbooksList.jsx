import React from 'react'
import { EbookImage, EbookInfo } from './EbookTile'

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


                <div>
                    <div className='flex flex-wrap justify-center gap-2 w-4/5 EbooksContainerBg'>
                        {
                            BooksArr?.map(value => {

                                return <EbookImage key={value.BookId + "Image"} BookCover={value.BookCover} BookTitle={value.BookTitle} />
                            })
                        }
                    </div>
                    <div>
                        {
                            BooksArr?.map(value => {

                                return <EbookInfo key={value.BookId + "Info"} Price={value.Price} />
                            })
                        }
                    </div>
                </div>
            </div>
            : null
    )
}

export default EbooksList