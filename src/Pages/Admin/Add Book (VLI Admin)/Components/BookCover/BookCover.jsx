import React from 'react'
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'

const BookCover = ({ setBookData, BookData, Err, setErr }) => {
    const OnChange = e => {
        if (e.target.files.length > 0) {
            delete Err.BookCover
            setErr(Err)
            setBookData({ ...BookData, "BookCover": e.target.files[0] })
        }
        else if (e.target.files.length <= 0)
            setErr({ ...Err, BookCover: "Book Cover is required" })
    }
    return (
        <div className='DataInputContainer mb-5 mt-3'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Add a Book Cover
                </h3>
                <p className='InputDetails'>
                    Thumbnail represents the first impression of the Book
                </p>
            </span>

            <div className='Add_C_B_InputSideContainer max-w-[400px]'>
                <ImagePreviewer Id="BookCover" ContainerStyle="flex gap-5 w-full max-w-[375px]" PreviewStyle="w-52 max-w-[200px] aspect-[39_/_31]"
                    OnChange={OnChange}
                    ImgUrl={BookData?.BookCover}
                />
            </div>
        </div>
    )
}

export default BookCover