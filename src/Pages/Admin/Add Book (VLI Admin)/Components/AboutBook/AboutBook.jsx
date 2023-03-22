import React from 'react'

const AboutBook = ({ BookData, setBookData, Err, setErr }) => {
    const OnChange = e => {
        if (e.target.value === "") {
            setErr({ ...Err, AboutBook: "Book Description is required" })
            setBookData({ ...BookData, AboutBook: e.target.value })
        }
        else if (e.target.value.length <= 100) {
            delete Err.AboutBook
            setErr(Err)
            setBookData({ ...BookData, AboutBook: e.target.value })
        } else if (e.target.value.length > 100) {
            setErr({ ...Err, AboutBook: "Book Description cannot be more than 100 characters" })
        }

    }
    return (
        <div className='DataInputContainer'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    About Book
                </h3>
                <p className='InputDetails'>
                    Add a detail about the book in here
                </p>
            </span>

            <span className=' max-w-[730px] Add_C_B_InputSideContainer'>
                <textarea className='h-24 Add_C_BTextArea' name="" id="" cols="30" rows="10"
                    onChange={OnChange}
                ></textarea>
                <p className='text-[12px] text-[#070707] text-right'>100 characters</p>
            </span>
        </div>
    )
}

export default AboutBook