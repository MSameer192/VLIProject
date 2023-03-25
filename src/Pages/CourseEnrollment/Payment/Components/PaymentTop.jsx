import React from 'react'
import { CheckData } from './Helper/CheckData'

const PaymentTop = ({ setInstallment, Installment, Err, setErr, EnrollmentData }) => {

    const OnClick = (PaymentType) => {
        const Checked = CheckData(EnrollmentData, Err, setErr)

        if (!Checked) {
            setInstallment(undefined)
            return
        }
        setErr({ ...Err, PaymentTypeErr: undefined })
        setInstallment(PaymentType)

    }

    return (
        <div className=' flex flex-col items-center gap-4 bg-[#F6F5F5] w-full pt-4 pb-20'>
            <span className=' flex gap-5 flex-col'>
                <h1 className={`text-center SemiBoldItalic m-0 text-black
                                text-xs sm:text-base    md:text-lg              xl:text-[38px]`}
                >
                    Choose how to pay
                </h1>
                <h4 className={`font-normal text-center text-[#404040]
                                text-3xs                md:text-2xs lg:text-xs  xl:text-base`}
                >
                    Your payment is encrypted
                </h4>
            </span>



            <span className='flex flex-col items-end w-auto'>
                <h5 className='font-normal text-[red] m-0 w-full text-left'>
                    {Err?.PaymentTypeErr ? Err?.PaymentTypeErr : ""}
                </h5>

                <span className='flex'>
                    <p className='text-5xs md:text-4xs xl:text-3xs'>End-to-end encrypted</p>
                    <img src={require('../Assets/LockIcon.svg').default} alt="" />
                </span>
                <div className='flex items-center flex-col gap-5'>

                    <PayIn Data={`Pay Full Payment ${EnrollmentData?.Package?.TotalFee ? EnrollmentData?.Package?.TotalFee : 0} $`}
                        BorderColor={Installment === "Full" ? "border-[#A1A3EF] bg-white" : "border-[#707070]"}
                        OnClick={() => OnClick("Full")} />

                    <PayIn Data={"Pay in Installments"}
                        BorderColor={Installment === "Installments" ? "border-[#A1A3EF] bg-white" : "border-[#707070]"}
                        OnClick={() => OnClick("Installments")} />

                </div>
            </span>

        </div>
    )
}

export default PaymentTop


function PayIn({ Data, OnClick, BorderColor }) {
    return (
        <div className={`flex justify-between gap-3 sm:gap-5  md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14 pl-5 pr-3 py-5 border-[2px] ${BorderColor} border-solid w-full  cursor-pointer`}
            onClick={OnClick}
        >
            <h3 className='text-[#404040] font-normal w-2/3  text-4xs md:text-3xs lg:text-2xs xl:text-xs whitespace-nowrap '>
                {Data}
            </h3>
            <span className='flex gap-2 items-center '>
                <span className='flex [&>*]:h-3 md:[&>*]:h-4 items-center gap-2 '>
                    <img src={require('../Assets/JCBIconS.png')} alt="" />
                    <img src={require('../Assets/VisaIconS.png')} alt="" />
                    <img src={require('../Assets/CreditCardIconS.png')} alt="" />
                    <img src={require('../Assets/DebitCardIconS.png')} alt="" />
                    <img src={require('../Assets/PaypalIconS.png')} alt="" />
                </span>
                <img className='h-5 md:h-auto' src={require('../Assets/ArrowIcon.svg').default} alt="" />
            </span>
        </div>
    )
}