import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const DeliveryCharges = ({ setBookData, BookData }) => {
    return (
        <div className='DataInputContainer'>

            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Delivery Charges
                </h3>
                <p className='InputDetails'>
                    Enter Delivery charges for Hard Copy
                </p>
            </span>

            
            <div className='AddCourse_InputSideContainer max-w-[230px]'>
                <InputNumber Id="DevliveryCharges" Placeholder="12 $" 
                    OnChange={e => { setBookData({ ...BookData, DevliveryCharges: parseFloat(e.target.value) }) }}
                />
            </div>


        </div>
    )
}

export default DeliveryCharges