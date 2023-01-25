import React from 'react'
import DOB from './ContactAndOtherInfoComp/DOB';
import Gender from './ContactAndOtherInfoComp/Gender';

const ContactAndOtherInfo = ({ Styling, EnrollmentData, setEnrollmentData, Err, setShowTimeSlots }) => {
    const { InputTypeTextStyle, DivStyle, HeadingStyle } = Styling;

    return (
        <>
            <div className={DivStyle}>
                <label htmlFor='PhoneNumber' className={HeadingStyle}>Phone Number</label>

                <h4> {Err?.City ? Err?.City : null}</h4>

                <input className={InputTypeTextStyle} type="text" placeholder='0123-456-7891' id='PhoneNumber' required
                    value={EnrollmentData?.StudentData?.PhoneNumber}
                    onChange={(e) => setEnrollmentData({ StudentData: { ...EnrollmentData?.StudentData, PhoneNumber: e.target.value } })}
                />
            </div>

            <div className={DivStyle}>

                <label htmlFor='Email' className={HeadingStyle}>Email Address</label>

                <h4> {Err?.City ? Err?.City : null}</h4>

                <input className={InputTypeTextStyle} type="email" placeholder='abc@gmail.com' id='Email' required
                    value={EnrollmentData?.StudentData?.Email}
                    onChange={(e) => setEnrollmentData({ StudentData: { ...EnrollmentData?.StudentData, Email: e.target.value } })}
                />
            </div>

            <DOB EnrollmentData={EnrollmentData} setEnrollmentData={setEnrollmentData} Styling={Styling} Err={Err} />


            <Gender Styling={Styling} EnrollmentData={EnrollmentData} setEnrollmentData={setEnrollmentData} Err={Err} />

            <div className={DivStyle}>

                <label htmlFor='Schedule' className={HeadingStyle}>Create Your Own Class Schedule</label>

                <h4> {Err?.City ? Err?.City : null}</h4>

                <button type='button' id='Schedule' className='text-base bg-[#A1A3EF] px-5 py-2 text-white border-none rounded-xl cursor-pointer'
                    onClick={() => { setShowTimeSlots(true) }}>
                    Create Schedule
                </button>
            </div>
        </>
    )
}

export default ContactAndOtherInfo