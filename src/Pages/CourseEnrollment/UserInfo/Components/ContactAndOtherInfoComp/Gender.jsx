import React from 'react'

const Gender = ({ Styling, EnrollmentData,   Err,  onChange }) => {
    const { DivStyle, HeadingStyle } = Styling;
    return (
        <div className={DivStyle}>
            <label htmlFor='Gender' className={HeadingStyle}>Gender</label>
            <h4 className='font-normal text-[red]'> {Err?.Gender ? Err?.Gender : null}</h4>
            <select className='w-full text-3xs px-4 py-2 rounded-[8px] border-[#E8E8E8] border-solid border-[2px]' id='Gender'
                value={EnrollmentData?.StudentData?.Gender}
                onChange={(e) => onChange(e,"Gender")}
            >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    )
}

export default Gender