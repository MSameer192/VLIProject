import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const BookPrice = ({ setBookData, BookData, setErr, Err }) => {
    const OnChange = e => {
        const BookePrice = Number(e.target.value)
        if (e.target.value === "") {
            setBookData({ ...BookData, Price: e.target.value })
            setErr({ ...Err, Price: "Price is required" })
        }
        else if (!isNaN(e.target.value)) {
            if (BookePrice > 0) {
                delete Err.Price
                setErr(Err)
                setBookData({ ...BookData, Price: parseFloat(e.target.value) })
            }
            else if (BookePrice < 0) {
                setBookData({ ...BookData, Price: e.target.value })
                setErr({ ...Err, Price: "Price must be greater than 0" })
            }
        }
        else if (isNaN(e.target.value)) {
            setBookData({ ...BookData, Price: e.target.value })
            setErr({ ...Err, Price: "Price can only be in number" })
        }
    }
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
                    State={BookData.Price}
                    OnChange={OnChange}
                />
                <p className='text-[12px] h-6 text-[red]'>{Err.Price ? Err.Price : ""} </p>
            </div>


        </div>
    )
}

export default BookPrice