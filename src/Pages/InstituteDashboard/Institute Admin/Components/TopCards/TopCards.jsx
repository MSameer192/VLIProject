import React from 'react'
import LeftCards from './LeftCards/LeftCards'
import RightCards from './RightCards/RightCards'

const TopCards = () => {
    return (
        <div className='flex w-full gap-5 flex-col 2xl:flex-row'>
            <LeftCards />
            <RightCards />
        </div>
    )
}

export default TopCards