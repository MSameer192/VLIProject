import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishList } from '../../Actions/UserA'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import DesktopView from './DesktopView'

import MobileView from './MobileView'
import './WishList.css'
const WishList = () => {
  const Dispatch = useDispatch();
  const { WishList: WishListArr, loading } = useSelector((Store) => Store.WishListReducer);
   

  useEffect(() => {
    Dispatch(GetWishList())
  }, [Dispatch])

  useCheckLogin(true,["Student"]);
  return (
    !loading ?
      <div className='mt-20 flex flex-col items-center gap-12'>

        <div className='flex flex-col items-center w-2/3 WishList-border'>
          <h1 className='text-lg Boldfont'>WishList</h1>
          <div className='h-1 max-w-[300px] w-4/5 bg-[#163235] rounded-2xl relative top-[2.5px]'></div>
        </div>
        <MobileView WishListArr={WishListArr} />

        <DesktopView WishListArr={WishListArr} />
      </div>
      : <h1 className='mt-40'>Loading</h1>
  )
}


export default WishList