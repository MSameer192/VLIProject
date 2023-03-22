import React from 'react'
import DropDown from '../../../../../Components/CustomDropdown/DropDown'
import BookTypeOptions from './BookTypeOptions'

const BookType = ({ setBookData, BookData, Err, setErr }) => {
    const OnChange = target => {
        if (target.value !== "") {
            delete Err.BookType
            setErr(Err)
            setBookData({ ...BookData, BookType: target.value })
        }
        else if (target.value === "")
            setErr({ ...Err, BookType: "Book Type is required" })
    }
    return (
        <div className='DataInputContainer mb-8 items-center'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Add a Book Type
                </h3>
                <p className='InputDetails'>
                    Select type of a book from here i.e Hard/Soft Copy
                </p>
            </span>

            <div className='gap-16 max-w-[400px] Add_C_B_InputSideContainer '>
                <span className='flex flex-col max-w-[360px] gap-3 w-full'>

                    <DropDown Label="Hard & Soft Form" Name="BookCategory"
                        styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                        SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                        DropDownOptions={BookTypeOptions}
                        onChange={OnChange}
                    />
                </span>
            </div>
        </div>
    )
}

export default BookType