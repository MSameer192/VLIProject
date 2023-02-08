import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const BookPrice = ({ setBookData, BookData }) => {
    return (
        <div className='DataInputContainer'>

            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Price of Book
                </h3>
                <p className='InputDetails'>
                    Enter price for the Book
                </p>
            </span>


            <div className='Add_C_B_InputSideContainer max-w-[230px]'>
                <InputNumber Id="price" Placeholder="200 $"
                    OnChange={e => { setBookData({ ...BookData, Price: parseFloat(e.target.value) }) }}
                />
            </div>


        </div>
    )
}

export default BookPrice