import React from 'react'

const AuthorName = ({ BookData, setBookData }) => {
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
                <textarea className='w-full h-14 Add_C_BTextArea' name="" id="" cols="30" rows="10" value={BookData.AurhotName}
                    onChange={e => setBookData({ ...BookData, AurhotName: e.target.value })}
                ></textarea>
                <p className='text-[12px] text-[#070707] text-right'>Maximum 50 Characters</p>
            </span>
        </div>
    )
}

export default AuthorName