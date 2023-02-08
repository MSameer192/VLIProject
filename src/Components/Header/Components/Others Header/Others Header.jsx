import React from 'react'
import LeftSide from './Component/LeftSide'
import RightSide from './Component/RightSide'

const OthersHeader = ({ setShowSidebar, ShowSidebar, setAuthPageName }) => {

    return (
        <div className='flex w-full shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)] h-full'>
            <div className='flex w-24 justify-center items-center'>
                <img className='cursor-pointer h-5' src={require('./Assets/HamBurger.svg').default} alt="" />
            </div>
            <div className='flex justify-between items-center w-[calc(100%_-_96px)] h-full'>
                <LeftSide />
                <RightSide setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} setAuthPageName={setAuthPageName} />
            </div>
        </div>
    )
}

export default OthersHeader