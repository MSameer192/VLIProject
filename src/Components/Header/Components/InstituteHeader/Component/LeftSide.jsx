import React from 'react'

const LeftSide = () => {
  return (
    <div className='h-full px-11 flex w-[45%] justify-end items-center'>
            <div className='flex w-4/5 max-w-[475px] justify-between items-center max-h-[60px] border-[1px] border-solid border-black h-full'>
                <input className='text-3xs text-[#707070] px-4 py-4 w-full border-none outline-none' type="text" placeholder='search' />
                <span className='px-9 relative left-[1px] h-[calc(100%_+_2px)] bg-[#A1A3EF] flex items-center justify-center'>
                    <img className='cursor-pointer h-5' src={require('../Assets/Search.svg').default} alt="" />
                </span>
            </div>
        </div>
  )
}

export default LeftSide