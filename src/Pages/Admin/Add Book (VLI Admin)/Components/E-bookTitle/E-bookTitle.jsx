import React from 'react'

const EbookTitle = ({ BookData, setBookData }) => {
    return (

        <div className='DataInputContainer mb-14'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Add a Book Title
                </h3>
                <p className='InputDetails'>
                    your title is the most important place the title should be Unique and Clear
                </p>
            </span>

            <span className='max-w-[730px] Add_C_B_InputSideContainer '>
                <textarea className='h-28 Add_C_BTextArea' name="" id="" cols="30" rows="10" value={BookData.BookTitle}
                    onChange={e => setBookData({ ...BookData, BookTitle: e.target.value })}
                ></textarea>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 180 Characters</p>
            </span>
        </div>
    )
}

export default EbookTitle