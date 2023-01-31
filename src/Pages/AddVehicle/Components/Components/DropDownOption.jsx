import React from 'react'
import { RemoveSpaces } from '../VehicleInfoComps/DropDownArrs';

function DropDownOption({ ID, Text, Name, onChange, StateValue }) {

    let Check = true;// Due to event Bubbling, SlectValue event was called two times when ".options" div is clicked. 
    //This is to make sure that "SelectValue" function is called only once enclosed in if block.
    const SelectValue = (e) => {

        if (e.target === e.currentTarget || Check) {
            const ParentContainer = e.currentTarget.parentElement.parentElement
            const ListContainer = ParentContainer.querySelector(".Options-Container");
            const SelectedValueContainer = ParentContainer.querySelector(".selected-value-container");
            const Label = e.currentTarget.childNodes[1];

            if (e.target === e.currentTarget) {
                Check = false;
                Label.click();
            } else
                Check = true;

            SelectedValueContainer.childNodes[0].innerText = Text;
            ListContainer.classList.add("UnActive");
        }

    }

    const Stop = (e) => e.stopPropagation();


    return <div className='options' onClick={SelectValue}>
        <input type="radio"
            className='radio'
            checked={RemoveSpaces(Text) === RemoveSpaces(StateValue)}
            name={Name}
            value={ID}
            id={ID}
            onClick={Stop}
            onChange={(e) => onChange(e.target)}
        />
        <label className='cursor-pointer' htmlFor={ID}>{Text}</label>
    </div>
}

export default DropDownOption