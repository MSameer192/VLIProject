import React from 'react'

const AboutBook = ({ BookData, setBookData }) => {
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
                 onChange={e => setBookData({ ...BookData, AboutBook: e.target.value })}
                ></textarea>
                <p className='text-[12px] text-[#070707] text-right'>100 characters</p>
            </span>
        </div>
    )
}

export default AboutBook