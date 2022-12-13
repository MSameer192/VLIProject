import React from 'react'
import DesktopView from './DesktopView'

import MobileView from './MobileView'
import './WishList.css'
const WishList = () => {

  return (
    <div className='mt-20 flex flex-col items-center gap-12'>

      <div className='flex flex-col items-center w-2/3 WishList-border'>
        <h1 className='text-lg Boldfont'>WishList</h1>
        <div className='h-1 max-w-[300px] w-4/5 bg-[#163235] rounded-2xl relative top-[2.5px]'></div>
      </div>


      <MobileView />


      <DesktopView />
    </div>
  )
}


export default WishList