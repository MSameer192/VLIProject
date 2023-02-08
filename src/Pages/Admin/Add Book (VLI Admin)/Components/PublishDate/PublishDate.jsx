import React from 'react'
import './PublishDate.css'
const PublishDate = ({ setBookData, BookData }) => {
    const OpenDatePicker = (e) => e.target.parentElement.previousElementSibling.showPicker()


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


            <div className='AddCourse_InputSideContainer h-fit max-w-[230px]'>
                <span className='flex items-center justify-center gap-6 py-[10px] px-6 bg-white w-full'>
                    <input className='RemoveDateIcon' type="date" name="" id="PublishDate"
                        onChange={e => { setBookData({ ...BookData, PublishDate: e.target.value }) }}
                    />

                    <label htmlFor="PublishDate" onClick={OpenDatePicker}>
                        <img className='w-6' src={require('./Assets/Date.svg').default} alt="" />
                    </label>
                </span>
            </div>


        </div>
    )
}

export default PublishDate