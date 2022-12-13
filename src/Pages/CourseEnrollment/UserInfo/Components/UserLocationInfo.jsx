import React from 'react'

const UserLocationInfo = ({ AddParentStyle, RemoveParentStyle, InputTypeTextStyle, DivStyle, HeadingStyle,ExceptionSpanStyle,ExceptionInputStyle }) => {
   
    return (
        <>
            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Address</h3>
                {/* Exception */}
                <span className={ExceptionSpanStyle}>
                    <input className={ExceptionInputStyle} type="text" placeholder='123-456-789'
                        onFocus={AddParentStyle}
                        onBlur={RemoveParentStyle}
                    />
                    <img className='ml-4' src={require('../Assets/LocationIcon.svg').default} alt="" />
                </span>
            </div>


            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Postal Code</h3>
                <input className={InputTypeTextStyle} type="text" placeholder='0546' />
            </div>


            <div className={DivStyle}>
                <h3 className={HeadingStyle}>Province</h3>
                <input className={InputTypeTextStyle} type="text" placeholder='Ontario' />
            </div>


            <div className={DivStyle}>
                <h3 className={HeadingStyle}>City</h3>
                {/* Exception */}
                <span className={ExceptionSpanStyle}>
                    <input className={ExceptionInputStyle} type="text" placeholder='Ontario'
                        onFocus={AddParentStyle}
                        onBlur={RemoveParentStyle} />
                    <img className='ml-4' src={require('../Assets/CityIcon.svg').default} alt="" />
                </span>
            </div>
        </>
    )
}

export default UserLocationInfo