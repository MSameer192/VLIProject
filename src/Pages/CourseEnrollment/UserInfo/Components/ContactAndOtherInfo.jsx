import React from 'react'
import { DateInput } from '../../../../Components/InputComps/DateComps';
import Gender from './ContactAndOtherInfoComp/Gender';

const ContactAndOtherInfo = ({ Styling, EnrollmentData, setEnrollmentData, Err, setShowTimeSlots, OnChange }) => {
    const { InputTypeTextStyle, DivStyle, HeadingStyle } = Styling;

    
    return (
        <>
            <div className={DivStyle}>
                <label htmlFor='PhoneNumber' className={HeadingStyle}>Phone Number</label>

                <h4 className='font-normal text-[red]'> {Err?.PhoneNumber ? Err?.PhoneNumber : null}</h4>

                <input className={InputTypeTextStyle} type="text" placeholder='0123-456-7891' id='PhoneNumber' required
                    value={EnrollmentData?.StudentData?.PhoneNumber}
                    onChange={(e) => OnChange(e, "PhoneNumber")}
                />
            </div>

            <div className={DivStyle}>

                <label htmlFor='Email' className={HeadingStyle}>Email Address</label>

                <h4 className='font-normal text-[red]'> {Err?.Email ? Err?.Email : null}</h4>

                <input className={InputTypeTextStyle} type="email" placeholder='abc@gmail.com' id='Email' required
                    value={EnrollmentData?.StudentData?.Email}
                    onChange={(e) => OnChange(e, "Email")}
                />
            </div>
            <DateInput State={EnrollmentData?.StudentData?.DOB} Err={Err?.DOB} onChange={(e) => OnChange(e, "DOB")} />

            <Gender Styling={Styling} EnrollmentData={EnrollmentData} Err={Err} onChange={(e) => OnChange(e, "Gender")} />

            <div className={DivStyle}>

                <label htmlFor='Schedule' className={HeadingStyle}>Create Your Own Class Schedule</label>

                <h4 className='font-normal text-[red]'> {Err?.Schedule ? Err?.Schedule : null}</h4>

                <button type='button' id='Schedule' className='text-base bg-[#A1A3EF] px-5 py-2 text-white border-none rounded-xl cursor-pointer'
                    onClick={() =>  setShowTimeSlots(true) }>
                    Create Schedule
                </button>
            </div>
        </>
    )
}

export default ContactAndOtherInfo