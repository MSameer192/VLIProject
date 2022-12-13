import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Components/PaymentInput'
import PaymentTop from './Components/PaymentTop'

const Payment = () => {


    return (
        <div className='flex flex-col items-center'>
            <PaymentTop />
            <div className='flex flex-col gap-11 py-10 w-full'>
                <h1 className=' text-xs sm:text-base md:text-lg xl:text-[38px] text-center SemiBoldItalic'>
                    Set up your Credit or Debit card Details
                </h1>
                <PaymentGatewaysImages />
            </div>


            <div className='w-full bg-[#F6F5F5] flex flex-col items-center py-6'>


                <Input />
            </div>
        </div>
    )
}

function PaymentGatewaysImages() {
    let ImageStyle = "h-[75px] sm:h-24 md:h-28 lg:h-[120px] xl:h-36 2xl:h-[145px]"
    return <div className='flex gap-6 h-32 lg:gap-4 xl:gap-10 2xl:gap-11 justify-center w-full overflow-hidden'>
        <img className={`${ImageStyle} `} src={require('./Assets/DebitCardIconL.png')} alt="" />
        <img className={`${ImageStyle} hidden md:inline-block`} src={require('./Assets/BitcoinIconL.png')} alt="" />
        <img className={`${ImageStyle} hidden lg:inline-block`} src={require('./Assets/JCBIconL.png')} alt="" />
        <img className={`${ImageStyle}`} src={require('./Assets/PaypalIconL.png')} alt="" />
        <img className={`${ImageStyle} hidden 2xl:inline-block`} src={require('./Assets/DinersClubIconL.png')} alt="" />
        <img className={`${ImageStyle}`} src={require('./Assets/CreditCardIconL.png')} alt="" />
    </div>
}

export default Payment