import React from 'react'

const EbookTitle = ({ BookData, setBookData, Err, setErr }) => {
    const OnChange = e => {
        if (e.target.value === "") {
            setErr({ ...Err, BookTitle: "Title is required" })
            setBookData({ ...BookData, BookTitle: e.target.value })
        }
        else if (e.target.value.length < 100) {
            delete Err.BookTitle
            setErr(Err)
            setBookData({ ...BookData, BookTitle: e.target.value })
        } else if (e.target.value.length >= 100) {
            setBookData({ ...BookData, BookTitle: e.target.value })
            setErr({ ...Err, BookTitle: "Title cannot be more than 100 characters" })
        }

    }
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
                <textarea className='h-28 Add_C_BTextArea' name="" id="" cols="30" rows="10"
                    value={BookData.BookTitle}
                    onChange={OnChange}
                ></textarea>
                <p className='text-[12px] h-6 text-[red]'>{Err.BookTitle ? Err.BookTitle : ""} </p>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 180 Characters</p>
            </span>
        </div>
    )
}

export default EbookTitle