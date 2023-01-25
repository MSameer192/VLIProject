import React from 'react'

const PaymentTop = () => {
    return (
        <div className=' flex flex-col items-center gap-4 bg-[#F6F5F5] w-full pt-4 pb-20'>
            <span className=' flex gap-5 flex-col'>
                <h1 className={`text-center SemiBoldItalic
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
                <span className='flex'>
                    <p className='text-5xs md:text-4xs xl:text-3xs'>End-to-end encrypted</p>
                    <img src={require('../Assets/LockIcon.svg').default} alt="" />
                </span>
                <div className='flex items-center flex-col gap-5'>
                    <PayIn Data={"Pay Full Payment 260 $"} />
                    <PayIn Data={"Pay in Installments"} />
                </div>
            </span>

        </div>
    )
}

export default PaymentTop


function PayIn({ Data }) {
    return (
        <div className='flex justify-between gap-3 sm:gap-5  md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14 pl-5 pr-3 py-5 border-[#707070] border-[1px] border-solid w-full  cursor-pointer'>
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