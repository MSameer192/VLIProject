import React from 'react'
 
const ToggleStatus = ({ index, setCheckOpened }) => {
    return (
        <span className='relative inline-block'>
            <input type="checkbox" id={`Check${index}`} className='Toggle' onChange={e => setCheckOpened(e.target.checked)} />
            <label htmlFor={`Check${index}`}></label>
        </span>
    )
}

export default ToggleStatus