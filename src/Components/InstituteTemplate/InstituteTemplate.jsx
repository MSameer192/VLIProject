import React from 'react'

const InstituteTemplate = ({Element}) => {
 
    return (
        <div className='bg-[#F7F7F7] mt-20 flex flex-col items-center ml-0 sm:ml-24 w-full sm:w-[calc(100%-96px)]'>
            <Element />
        </div>
    )
}

export default InstituteTemplate