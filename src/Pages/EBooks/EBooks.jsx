import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetStudentBooksA } from '../../Actions/BookA'
import Footer from '../../Components/Footer/Footer'
import { LoginRegister } from '../../Components/Header/Headers'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import BookTypes from './Components/BookTypes'
import EbooksList from './Components/EbooksList/EbooksList'
import BooksFilter from './Components/Filter/Filter'
import Top from './Components/Top'
import './Ebooks.css'
const EBooks = () => {

  const Dispatch = useDispatch();
  const { Books, CarouselBooks } = useSelector(Store => Store.BookReducer);

  useEffect(() => {
    Dispatch(GetStudentBooksA())
  }, [Dispatch])

  useCheckLogin(true, ["Student", "User"])
  return (
    <div className='mt-20 flex items-center flex-col'>
      <Top />
      {<LoginRegister />}

      <BooksFilter />

      <BookTypes />

      <EbooksList Heading={"Popular E-Books"} BooksArr={Books?.PopularBooks}
        ImgSrc={require('./Assets/Popular.svg').default}
      />

      <EbooksList Heading={"Discounted E-Books"} BooksArr={Books?.DiscountedBooks}
        ImgSrc={require('./Assets/Discount.svg').default}

      />

      <EbooksList Heading={"Free E-Books"} BooksArr={Books?.FreeBooks}
        ImgSrc={require('./Assets/Free.svg').default}

      />


      <Footer />
    </div>
  )
}

export default EBooks