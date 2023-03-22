import React from 'react'
import InputNumber from '../../../Components/InputNumber/InputNumber'

const DeliveryCharges = ({ setBookData, BookData, Err, setErr }) => {
    const OnChange = e => {
        const DevliveryCharges = Number(e.target.value)
        if (e.target.value === "") {
            setBookData({ ...BookData, DevliveryCharges: e.target.value })
            setErr({ ...Err, DevliveryCharges: "Devlivery Charges are required" })
        }
        else if (!isNaN(e.target.value)) {
            if (DevliveryCharges > 0) {
                delete Err.DevliveryCharges
                setErr(Err)
                setBookData({ ...BookData, DevliveryCharges: parseFloat(e.target.value) })
            }
            else if (DevliveryCharges < 0) {
                setErr({ ...Err, DevliveryCharges: "Devlivery Charges must be greater than 0" })
                setBookData({ ...BookData, DevliveryCharges: e.target.value })
            }
        }
        else if (isNaN(e.target.value)) {
            setBookData({ ...BookData, DevliveryCharges: e.target.value })
            setErr({ ...Err, DevliveryCharges: "Devlivery Charges can only be in number" })
        }

    }

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
                    State={BookData.DevliveryCharges}
                    OnChange={OnChange}
                />
            </div>


        </div>
    )
}

export default DeliveryCharges