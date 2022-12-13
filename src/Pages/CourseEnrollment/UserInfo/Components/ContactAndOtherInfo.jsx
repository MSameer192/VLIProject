import React from 'react'

const ContactAndOtherInfo = ({HeadingStyle, InputTypeTextStyle,DivStyle, AddParentStyle, RemoveParentStyle,ExceptionSpanStyle,ExceptionInputStyle }) => {

    return (
        <>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Phone Number</h3>
                <input className={InputTypeTextStyle} type="text" placeholder='123-456-789' />
            </div>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Email Address</h3>
                <input className={InputTypeTextStyle} type="email" placeholder='abc@gmail.com' />
            </div>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Date of Birth (DD/MM//YYYY)</h3>
                {/* Exception */}
                <span className={ExceptionSpanStyle}>
                    <input className={ExceptionInputStyle} type="email" placeholder='abc@gmail.com'
                        onFocus={AddParentStyle}
                        onBlur={RemoveParentStyle}
                    />
                    <img src={require('../Assets/BirtPlaceIcon.svg').default} alt="" />
                </span>
            </div>

            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Gender</h3>
                {/* Exception */}
                <select className='w-full text-3xs px-4 py-2 rounded-[8px] border-[#E8E8E8] border-solid border-[2px]' name="Gender" id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        </>
    )
}

export default ContactAndOtherInfo