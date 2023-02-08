import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const BookRating = ({ setBookData, BookData }) => {
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
                    OnChange={e => { setBookData({ ...BookData, BookRating: parseFloat(e.target.value) }) }}
                />
            </div>


        </div>
    )
}

export default BookRating