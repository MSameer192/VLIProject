import React from 'react'
import LeftSide from './Component/LeftSide'
import RightSide from './Component/RightSide'

const InstituteHeader = ({ setShowSidebar, ShowSidebar, setAuthPageName }) => {

    return (
        <div className='flex justify-between items-center shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)] w-full h-full'>
            <LeftSide />
            <RightSide setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} setAuthPageName={setAuthPageName} />
        </div>
    )
}

export default InstituteHeader