import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const BookRating = ({ setBookData, BookData, Err, setErr }) => {
    const OnChange = e => {
        const Rating = parseFloat(e.target.value);
        if (e.target.value === "") {
            setBookData({ ...BookData, BookRating: e.target.value })
            setErr({ ...Err, BookRating: "Rating is required" })
        }
        else if (isNaN(e.target.value)) {
            setBookData({ ...BookData, BookRating: e.target.value })
            setErr({ ...Err, BookRating: "Rating can only be a number" })
        }
        else if (!isNaN(e.target.value)) {
            if (Rating <= 5 && Rating > 0) {
                delete Err.BookRating
                setErr(Err)
                setBookData({ ...BookData, BookRating: Rating })
            } else if (Rating > 5) {
                setBookData({ ...BookData, BookRating: e.target.value })
                setErr({ ...Err, BookRating: "Rating must be less than 5.0" })
            }
            else if (Rating < 5) {
                setBookData({ ...BookData, BookRating: e.target.value })
                setErr({ ...Err, BookRating: "Rating must be greater than 0" })
            }
        }
    }
    return (
        <div className='DataInputContainer'>

            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Book Rating
                </h3>
                <p className='InputDetails'>
                    Provide Book rating here
                </p>
            </span>


            <div className='Add_C_B_InputSideContainer max-w-[230px]'>
                <InputNumber Id="Rating" Placeholder="4.7"
                    State={BookData.BookRating}
                    OnChange={OnChange}
                />
                <p className='text-[12px] h-6 text-[red]'>{Err.BookRating ? Err.BookRating : ""} </p>
            </div>


        </div>
    )
}

export default BookRating