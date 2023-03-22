import React from 'react'
import './PublishDate.css'
const PublishDate = ({ setBookData, BookData, Err, setErr }) => {
    const OpenDatePicker = (e) => e.target.parentElement.previousElementSibling.showPicker()

    const OnChange = e => {
        if (e.target.value !== "") {
            delete Err.PublishDate
            setErr(Err)
            setBookData({ ...BookData, PublishDate: e.target.value })
        }
        else if (e.target.value === "") {
            setBookData({ ...BookData, PublishDate: e.target.value })
            setErr({ ...Err, PublishDate: "Publish Date is required" })
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


            <div className='AddCourse_InputSideContainer h-fit max-w-[230px]'>
                <span className='flex items-center justify-center gap-6 py-[10px] px-6 bg-white w-full'>
                    <input className='RemoveDateIcon' type="date" name="" id="PublishDate"
                        onChange={OnChange}
                        value={BookData.PublishDate}
                    />

                    <label htmlFor="PublishDate" onClick={OpenDatePicker}>
                        <img className='w-6' src={require('./Assets/Date.svg').default} alt="" />
                    </label>
                </span>
                <p className='text-[12px] h-6 text-[red]'>{Err.PublishDate ? Err.PublishDate : ""} </p>
            </div>


        </div>
    )
}

export default PublishDate