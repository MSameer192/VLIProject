import React from 'react'

import './DropDown.css'
function DropDown({ Label, DropDownOptions, Name, onChange, StateValue, styles, TextStyle, SelectValueStyle, IconSrc }) {

    const OpenDropDown = (e) => {
        const OptionsContainer = e.target.parentElement.getElementsByClassName("Options-Container")[0];
        OptionsContainer.classList.toggle("UnActive");

    }
    if (!TextStyle)
        TextStyle = "text-3xs"



    return <div className={`select-box w-full ${styles}`}  >
        <div className={`selected-value-container Selecting ${SelectValueStyle} cursor-pointer relative`} onClick={OpenDropDown}

        >
            <h3 className={`${TextStyle} pointer-events-none font-normal whitespace-nowrap`}>{!StateValue ? Label : StateValue}</h3>
            <img className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none'
                src={!IconSrc ? require('./Assets/Arrow.svg').default : IconSrc}
                alt="" />
        </div>
        <div className='Options-Container UnActive' >
            {DropDownOptions && <DropDownOptions Name={Name} onChange={onChange} StateValue={StateValue} />}
        </div>
    </div>
}

export default DropDown