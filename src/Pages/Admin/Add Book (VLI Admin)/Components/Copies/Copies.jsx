import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber';

const Copies = ({ setBookData, BookData, Err, setErr }) => {

    const OnChange = e => {
        const BookeCopies = Number(e.target.value)
        if (e.target.value === "") {
            setBookData({ ...BookData, Copies: e.target.value })
            setErr({ ...Err, Copies: "No. of Copies is required" })
        }
        else if (!isNaN(e.target.value)) {
            if (BookeCopies > 0) {
                delete Err.Copies
                setErr(Err)
                setBookData({ ...BookData, Copies: parseInt(e.target.value) })
            }
            else if (BookeCopies < 0) {
                setErr({ ...Err, Copies: "No. of Copies must be greater than 0" })
                setBookData({ ...BookData, Copies: e.target.value })
            }
        }
        else if (isNaN(e.target.value)) {
            setErr({ ...Err, Copies: "No. of Copies can only be in number" })
            setBookData({ ...BookData, Copies: e.target.value })
        }

    }

    return (
        <div className='DataInputContainer'>

            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Number of Copies
                </h3>
                <p className='InputDetails'>
                    Number of Copies available in inventory
                </p>
            </span>


            <div className='Add_C_B_InputSideContainer max-w-[230px]'>
                <InputNumber Id="Copies" Placeholder="413"
                    State={BookData.Copies}
                    OnChange={OnChange}
                />
                <p className='text-[12px] h-6 text-[red]'>{Err.Copies ? Err.Copies : ""} </p>
            </div>


        </div>
    )
}

export default Copies