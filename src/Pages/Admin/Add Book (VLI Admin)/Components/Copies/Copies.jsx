import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber';

const Copies = ({ setBookData, BookData }) => {

    return (
        <div className='DataInputContainer'>

            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Number of Copies
                </h3>
                <p className='InputDetails'>
                    Number of Copies available in inventory
                </p>
            </span>


            <div className='Add_C_B_InputSideContainer max-w-[230px]'>
                <InputNumber Id="Copies" Placeholder="413"
                    OnChange={e => { setBookData({ ...BookData, Copies: parseInt(e.target.value) }) }}
                />
            </div>


        </div>
    )
}

export default Copies