import React from 'react'

const UserLocationInfo = ({ Styling, setEnrollmentData, EnrollmentData, Err, OnChange }) => {
    const { InputTypeTextStyle, DivStyle, HeadingStyle, ExceptionSpanStyle, ExceptionInputStyle } = Styling;
    let { AddParentStyle, RemoveParentStyle } = Styling
    return (
        <>
            <div className={DivStyle}>
                <label htmlFor='Address' className={HeadingStyle}>Address</label>

                <h4 className='font-normal text-[red]'> {Err?.Address ? Err?.Address : null}</h4>

                <span className={ExceptionSpanStyle}>
                    <input className={ExceptionInputStyle} type="text" placeholder='123-456-789' id='Address' required
                        onFocus={AddParentStyle}
                        onBlur={RemoveParentStyle}
                        value={EnrollmentData?.StudentData?.Address}
                        onChange={e => OnChange(e, "Address")}
                    />
                    <img className='ml-4' src={require('../Assets/LocationIcon.svg').default} alt="" />
                </span>
            </div>


            <div className={DivStyle}>
                <label htmlFor='PostalCode' className={HeadingStyle}>Postal Code</label>

                <h4 className='font-normal text-[red]'> {Err?.PostalCode ? Err?.PostalCode : null}</h4>

                <input className={InputTypeTextStyle} type="number" placeholder='0546' id='PostalCode' required
                    value={EnrollmentData?.StudentData?.PostalCode}
                    onChange={e => OnChange(e, "PostalCode")}
                />
            </div>


            <div className={DivStyle}>
                <label htmlFor='Province' className={HeadingStyle}>Province</label>
                <h4 className='font-normal text-[red]'> {Err?.Province ? Err?.Province : null}</h4>
                <input className={InputTypeTextStyle} type="text" placeholder='Ontario' id='Province' required
                    value={EnrollmentData?.StudentData?.Province}
                    onChange={e => OnChange(e, "Province")}
                />
            </div>


            <div className={DivStyle}>
                <label htmlFor='City' className={HeadingStyle}>City</label>
                {/* Exception */}
                <h4 className='font-normal text-[red]'> {Err?.City ? Err?.City : null}</h4>
                <span className={ExceptionSpanStyle}>
                    <input className={ExceptionInputStyle} type="text" placeholder='Ontario' id='City' required
                        onFocus={AddParentStyle}
                        onBlur={RemoveParentStyle}
                        value={EnrollmentData?.StudentData?.City}
                        onChange={e => OnChange(e, "City")}
                    />
                    <img className='ml-4' src={require('../Assets/CityIcon.svg').default} alt="" />
                </span>
            </div>
        </>
    )
}

export default UserLocationInfo