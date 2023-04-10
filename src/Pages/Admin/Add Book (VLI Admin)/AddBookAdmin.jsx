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
import { useDispatch, useSelector } from 'react-redux'

import '../Css/Course_E-Book_Inputs.css'
import BookRating from './Components/BookRating/BookRating'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
const AddBookAdminChild = () => {
    const [BookData, setBookData] = useState({
        BookTitle: "",
        AuthorName: "",
        E_BookCategory: "",
        PossibleKeywords: "",
        AboutBook: "",
        BookRating: "",
        BookCover: "",
        BookType: "",
        Copies: "",
        Price: "",
        DevliveryCharges: "",
        PublishDate: ""
    });
    const { loading } = useSelector(Store => Store.BookReducer)
    const [Err, setErr] = useState({})
    const [Success, setSuccess] = useState()


    const Dispatch = useDispatch();
    const OnSubmit = (e) => SubmitFormData(e, BookData, Err, setErr, Dispatch, setSuccess)

    return (
        !loading ?
            <form className='flex flex-col items-center gap-9 bg-[#F7F7F7] pt-10 pb-44'
                onSubmit={OnSubmit}
            >

                <div className='flex justify-center items-center bg-[#F0F0F7] w-[88%] py-4 px-4 mx-4 sm:mx-8  md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-[90px]'>
                    <div className='flex flex-col py-4 gap-16 w-full sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-4/5 2xl:w-3/4 '>
                        <span className='AddCourse_HeadingContainer '>
                            <h2 className='text-sm font-normal'>Overview</h2>
                        </span>
                        <div className='flex w-full flex-col gap-7'>
                            <EbookTitle setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <AuthorName setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <EBookCategory setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <SearchTags setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <AboutBook setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <BookRating setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <BookCover setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <BookType setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <Copies setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <BookPrice setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <DeliveryCharges setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                            <PublishDate setBookData={setBookData} BookData={BookData}
                                Err={Err} setErr={setErr} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-end w-[88%] gap-7 mt-12'>

                    <button type='submit' className="Admin_SubmitButton BrandingButton">
                        Save & Continue
                    </button>
                </div>

                {Success ? <AddBookPopup /> : null}
            </form>
            : <LoadingSpinner />
    )
}
const AddBookAdmin = () => <InstituteTemplate Element={AddBookAdminChild} />


const SubmitFormData = (e, BookData, Err, setErr, Dispatch, setSuccess) => {
    e.preventDefault();
    let Errors = {}
    e.preventDefault();
    const EBookFormData = new FormData();
    const Names = ["Book Title", "Author Name", "Book Category", "Possible Keywords", "Book description", "Book Rating", "Book Cover", "Book Type", "Copies", "Price", "Devlivery Charges", "Publish Date"
    ]
    let Index = 0
    for (let [key, value] of Object.entries(BookData)) {

        if (!value || value === "") Errors[key] = `${Names[Index]} is required`
        else delete Errors[key]
        Index = ++Index
    }
    if (BookData.PossibleKeywords.length <= 0)
        Errors.PossibleKeywords = `Enter at least one keyword`
    setErr({ ...Err, ...Errors });

    if (Object.entries(Errors).length > 0)
        return


    EBookFormData.append("BookCover", BookData.BookCover);
    delete BookData.CourseThumbnail;
    EBookFormData.append("BookInfo", JSON.stringify(BookData));


    Dispatch(AddBookA(EBookFormData, setSuccess))
}



export default AddBookAdmin