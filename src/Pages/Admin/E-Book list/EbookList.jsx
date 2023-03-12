import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBooksA } from '../../../Actions/BookA'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import BookTile from './Components/BookTile/BookTile'
import FilterComp from './Components/FilterComp/FilterComp'

const EbookListChild = () => {
    useCheckLogin(true, ["Admin"]);
    const { Books } = useSelector((Store) => Store.BookReducer)
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(GetBooksA())
    }, [Dispatch])
 
    return (
        <div className='flex bg-[#F7F7F7] min-h-screen pt-10 sm:pt-14 md:pt-20 lg:pt-28 xl:pt-36 2xl:pt-40'>
            <div className='flex w-[95%] justify-between ml-0 lg:ml-20'>
                <div className='flex flex-wrap gap-9 w-11/12 sm:w-[60%] lg:w-[66%] xl:w-[70%] 2xl:w-[74%] flex-col lg:flex-row items-center lg:items-start'>
                    {
                        Books.length > 0
                            ? Books.map(value => <BookTile value={value} key={value.BookId} />)
                            : null
                    }

                </div>
                <div className='sm:w-[40%] lg:w-[33%] xl:w-[28%] 2xl:w-[24%]'>
                    <FilterComp />
                </div>
            </div>
        </div>
    )
}


const EbookList = () => <InstituteTemplate Element={EbookListChild} />

export default EbookList