import React from 'react'

const DOB = ({ Styling, Err, EnrollmentData, setEnrollmentData }) => {
    const { DivStyle, HeadingStyle, ExceptionSpanStyle, ExceptionInputStyle } = Styling;

    let { AddParentStyle, RemoveParentStyle } = Styling;//functions

    const ShowDate = (e) => e.target.parentElement.previousElementSibling.showPicker()

    return <div className={DivStyle}>
        <label htmlFor='RemoveDateIcon' className={HeadingStyle}>Date of Birth (DD/MM//YYYY)</label>

        <h4> {Err?.City ? Err?.City : null}</h4>

        <span className={ExceptionSpanStyle}>


            <input className={ExceptionInputStyle} type="date" placeholder='DD/MM/YYYY' id='RemoveDateIcon' required
                onFocus={AddParentStyle}
                onBlur={RemoveParentStyle}
                value={EnrollmentData?.StudentData?.DOB}

                onChange={(e) => setEnrollmentData({ StudentData: { ...EnrollmentData?.StudentData, DOB: e.target.value } })}
            />


            <label htmlFor="RemoveDateIcon">
                <img src={require('../../Assets/BirtPlaceIcon.svg').default} alt=""
                    onClick={ShowDate}
                />
            </label>
        </span>
    </div>
}

export default DOB