import React from 'react'

const AuthorName = ({ BookData, setBookData, Err, setErr }) => {
    const OnChange = e => {
        if (e.target.value === "") {
            setErr({ ...Err, AurhorName: "Author Name is required" })
            setBookData({ ...BookData, AurhorName: e.target.value })
        }
        else if (e.target.value.length <= 50) {
            delete Err.AurhorName
            setErr(Err)
            setBookData({ ...BookData, AurhorName: e.target.value })
        } else if (e.target.value.length > 50) {
            setBookData({ ...BookData, AurhorName: e.target.value })
            setErr({ ...Err, AurhorName: "Author Name cannot be more than 50 characters" })
        }

    }
    return (

        <div className='DataInputContainer mb-14'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Author Name
                </h3>
                <p className='InputDetails'>
                    your title is the most important place the title should be Unique and Clear
                </p>
            </span>

            <span className='max-w-[390px] Add_C_B_InputSideContainer '>
                <textarea className='w-full h-14 Add_C_BTextArea' name="" id="" cols="30" rows="10"
                    value={BookData.AurhorName}
                    onChange={OnChange}
                ></textarea>
                <p className='text-[12px] h-6 text-[red]'>{Err.AurhorName ? Err.AurhorName : ""} </p>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 50 Characters</p>
            </span>
        </div>
    )
}

export default AuthorName