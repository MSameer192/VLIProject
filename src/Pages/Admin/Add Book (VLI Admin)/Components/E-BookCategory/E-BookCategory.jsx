import React from 'react'
import DropDown from '../../../../../Components/CustomDropdown/DropDown'
import BookCategoryOptions from './BookCategoryOptions'

const EBookCategory = ({ BookData, setBookData }) => {
    return (
        <div className='DataInputContainer mb-20 items-center'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Course Category
                </h3>
                <p className='InputDetails'>
                    Choose the category and sub-category most suitable for your Vehicle type
                </p>
            </span>

            <div className='max-w-[360px] Add_C_B_InputSideContainer'>
                <span className='flex flex-col gap-3 w-full'>

                    <DropDown Label="Best Sellings" Name="BookCategory"
                        styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                        SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                        onChange={target => setBookData({ ...BookData, "E_BookCategory": target.value  })}
                        StateValue={BookData?.E_BookCategory}
                        DropDownOptions={BookCategoryOptions}
                    />
                </span>
            </div>
        </div>
    )
}

export default EBookCategory