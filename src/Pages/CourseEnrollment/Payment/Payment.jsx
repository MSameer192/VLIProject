import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PaymentTop from './Components/PaymentTop'
import ReactDOM from "react-dom"
import { PaypalBtn } from './Components/PaypalPayment/PaypalPayment'
const Payment = ({ Package, EnrollmentData, Err, setErr }) => {

    const [PaymentMethod, setPaymentMethod] = useState();
    const [Installment, setInstallment] = useState();
    const Navigate = useNavigate()
    const [Success, setSuccess] = useState();
    const PaypalBtnRef = useRef()
    const PayPalButton = window.paypal?.Buttons?.driver("react", { React, ReactDOM });
    useEffect(() => {
        if (Success)
            Navigate('/mycourses/enrolledcourses')
    }, [Success, Navigate])
    return (
        <div className='flex flex-col items-center' >
            <PaymentTop setInstallment={setInstallment} Installment={Installment} Err={Err} setErr={setErr} EnrollmentData={EnrollmentData} />
            <div className='flex flex-col gap-11 py-10 w-full'>
                <h1 className='text-xs sm:text-base md:text-lg xl:text-[38px] m-0 text-center SemiBoldItalic text-black'>
                    Set up your Credit or Debit card Details
                </h1>
                <PaymentGatewaysImages setPaymentMethod={setPaymentMethod} Err={Err} setErr={setErr} Installment={Installment} />
            </div>


            <div className='w-full bg-[#F6F5F5] flex flex-col items-center py-6 z-10'>

                {PaymentMethod === "Paypal"
                    ? <PaypalBtn setSuccess={setSuccess} Package={Package} Installment={Installment}
                        PayPalButton={PayPalButton}
                        PaypalBtnRef={PaypalBtnRef}
                        EnrollmentData={EnrollmentData} currency="USD"
                        setErr={setErr} Err={Err}
                    />
                    : null}


                {/* <Input /> */}
            </div>
        </div>
    )
}

function PaymentGatewaysImages({ setPaymentMethod, Err, setErr, Installment }) {

    const OnClick = (Method) => {
        if (!Installment) {
            setErr({ ...Err, PaymentTypeErr: "Please select payment type" })
            return
        }
        setPaymentMethod(Method)
    }

    let ImageStyle = "h-[75px] sm:h-24 md:h-28 lg:h-[120px] xl:h-36 2xl:h-[145px] cursor-pointer"
    return <div className='flex gap-6 h-32 lg:gap-4 xl:gap-10 2xl:gap-11 justify-center w-full overflow-hidden'>
        <img className={`${ImageStyle} `} src={require('./Assets/DebitCardIconL.png')} alt="" />
        <img className={`${ImageStyle} hidden md:inline-block`} src={require('./Assets/BitcoinIconL.png')} alt="" />
        <img className={`${ImageStyle} hidden lg:inline-block`} src={require('./Assets/JCBIconL.png')} alt="" />
        <img className={`${ImageStyle}`} src={require('./Assets/PaypalIconL.png')} alt=""
            onClick={() => OnClick("Paypal")} />
        <img className={`${ImageStyle} hidden 2xl:inline-block`} src={require('./Assets/DinersClubIconL.png')} alt="" />
        <img className={`${ImageStyle}`} src={require('./Assets/CreditCardIconL.png')} alt="" />
    </div>
}

export default Payment