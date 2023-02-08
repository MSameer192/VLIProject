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
    console.log(Books)
    return (
        <div className='flex bg-[#F7F7F7] min-h-screen pt-40'>
            <div className='flex w-[95%] justify-between ml-20'>
                <div className='flex flex-wrap gap-9 w-[74%]'>
                    {Books.map((value) =>
                        <BookTile value={value} />
                    )}
                </div>
                <div className='w-[23%]'>
                    <FilterComp />
                </div>
            </div>
        </div>
    )
}


const EbookList = () => <InstituteTemplate Element={EbookListChild} />

export default EbookList