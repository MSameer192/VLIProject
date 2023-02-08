import React, { useState } from 'react'
import EbookTitle from './Components/E-bookTitle/E-bookTitle'
import SearchTags from './Components/SearchTags/SearchTags'
import AboutBook from './Components/AboutBook/AboutBook'
import BookCover from './Components/BookCover/BookCover'
import AddBookPopup from './Components/AddBookPopup/AddBookPopup'
import AuthorName from './Components/AuthorName/AuthorName'
import EBookCategory from './Components/E-BookCategory/E-BookCategory'
import BookType from './Components/BookType/BookType'
import Copies from './Components/Copies/Copies'
import BookPrice from './Components/BookPrice/BookPrice'
import DeliveryCharges from './Components/DeliveryCharges/DeliveryCharges'
import PublishDate from './Components/PublishDate/PublishDate'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate';

import { AddBookA } from '../../../Actions/BookA'
import { useDispatch } from 'react-redux'

import '../Css/Course_E-Book_Inputs.css'
import BookRating from './Components/BookRating/BookRating'
const AddBookAdminChild = () => {
    const [BookData, setBookData] = useState({

    });
    const [Err, setErr] = useState({})
    const [Success, setSuccess] = useState()


    const Dispatch = useDispatch()
    const OnSubmit = (e) => SubmitFormData(e, BookData, Err, setErr, Dispatch, setSuccess)
    console.log(Success)
    return (
        <form className='flex flex-col items-center gap-9 bg-[#F7F7F7] pt-10 pb-44'
            onSubmit={OnSubmit}
        >
            <div className='flex justify-center items-center bg-[#F0F0F7] w-[88%] py-4 px-4 mx-4 sm:mx-8  md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-[90px]'>
                <div className='flex flex-col py-4 gap-16 w-full sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-4/5 2xl:w-3/4 '>
                    <span className='AddCourse_HeadingContainer '>
                        <h2 className='text-sm font-normal'>Overview</h2>
                    </span>
                    <div className='flex w-full flex-col gap-7'>
                        <EbookTitle setBookData={setBookData} BookData={BookData} />
                        <AuthorName setBookData={setBookData} BookData={BookData} />
                        <EBookCategory setBookData={setBookData} BookData={BookData} />
                        <SearchTags setBookData={setBookData} BookData={BookData} />
                        <AboutBook setBookData={setBookData} BookData={BookData} />
                        <BookRating setBookData={setBookData} BookData={BookData}/>
                        <BookCover setBookData={setBookData} BookData={BookData} />
                        <BookType setBookData={setBookData} BookData={BookData} />
                        <Copies setBookData={setBookData} BookData={BookData} />
                        <BookPrice setBookData={setBookData} BookData={BookData} />
                        <DeliveryCharges setBookData={setBookData} BookData={BookData} />
                        <PublishDate setBookData={setBookData} BookData={BookData} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:justify-end w-[88%] gap-7 mt-12'>
                <button type='button' className={`rounded-2xl whitespace-nowrap
                text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base
                py-2    md:py-2                 xl:py-3     
                px-3    md:px-4     lg:px-5     xl:px-6     2xl:px-7
                BrandingButton`}>
                    Preview Course
                </button>
                <button type='submit' className={`rounded-2xl whitespace-nowrap
                text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base
                py-2    md:py-2                 xl:py-3     
                px-3    md:px-4     lg:px-5     xl:px-6     2xl:px-7
                BrandingButton`}>
                    Save & Continue
                </button>
            </div>

            {Success ? <AddBookPopup /> : null}
        </form>
    )
}
const AddBookAdmin = () => <InstituteTemplate Element={AddBookAdminChild} />


const SubmitFormData = (e, BookData, Err, setErr, Dispatch, setSuccess) => {
    e.preventDefault();
    let Errors = {}
    e.preventDefault();
    const CourseFormData = new FormData();

    for (let [key, value] of Object.entries(BookData)) {
        if (!value) Errors[key] = true
        else delete Errors[key]
    }

    setErr({ ...Err, ...Errors })
    if (Object.entries(Errors).length > 0)
        return


    CourseFormData.append("BookCover", BookData.BookCover);
    delete BookData.CourseThumbnail;
    CourseFormData.append("VehicleInfo", JSON.stringify(BookData));


    Dispatch(AddBookA(CourseFormData, setSuccess))
}



export default AddBookAdmin