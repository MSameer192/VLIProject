import React from 'react'
import StudentLeftSide from './LeftSide'
import StudentRightSide from './RightSide'

const StudentHeader = ({setShowSidebar, ShowSidebar, setAuthPageName}) => {
    return (
        <div className='flex justify-between items-center w-full h-full shadow-[1px_11px_6px_rgba(0,_0,_0,0.16)]'>
            <StudentLeftSide setShowSidebar={setShowSidebar} />
            <StudentRightSide setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} />
        </div>
    )
}

export default StudentHeader