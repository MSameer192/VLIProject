import React from 'react'


function DropDown({ Label, DropDownOptions, Name, onChange, StateValue }) {

    const OpenDropDown = (e) => {
        const OptionsContainer = e.target.parentElement.getElementsByClassName("Options-Container")[0];
        OptionsContainer.classList.toggle("UnActive");

    }
    let TextStyle = `text-3xs font-normal whitespace-nowrap`;

    return <div className='select-box w-full'  >
        <div className='selected-value-container Selecting cursor-pointer' onClick={OpenDropDown}>
            <h3 className={`pointer-events-none ${TextStyle}`}>{!StateValue ? Label : StateValue}</h3>
        </div>
        <div className='Options-Container UnActive' >
            <DropDownOptions Name={Name} onChange={onChange} StateValue={StateValue} />
        </div>
    </div>
}

export default DropDown