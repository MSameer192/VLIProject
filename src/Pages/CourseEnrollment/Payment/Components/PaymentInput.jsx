import React from 'react'
import PInput from './InputComp/PInput'


const PaymentInput = () => {
    let InputStyle = `border-[#707070] border-[2px] border-solid rounded-lg
    py-2        md:py-3         lg:py-4         xl:py-[18px] 
    px-2        md:px-4         lg:px-5         xl:px-6
    text-4xs    md:text-3xs     lg:text-2xs     xl:text-xs`;



    let InputDivStyle = `flex flex-col items-center max-w-[700px] px-10 
gap-8                   md:gap-10                   xl:gap-12  
w-full         sm:w-4/5 
bg-[#ffffff00]          md:bg-white]  
py-2                    md:py-3         lg:py-4     xl:py-5`
    return (
        <div className={InputDivStyle}
        >

            {/* <div className='flex flex-col mx-5 gap-4 w-full'>
                <input className={`${InputStyle}`} type="text" placeholder='First name' />
                <input className={`${InputStyle}`} type="text" placeholder='Last name' />
                <input className={`${InputStyle}`} type="text" placeholder='Card number' />
                <input className={`${InputStyle}`} type="text" placeholder='Expiry date (MM/YY)' />
                <input className={`${InputStyle}`} type="text" placeholder='Security Code (CVV)' />

                <p className='text-6xs md:text-4xs xl:text-3xs'>Your payments will be processed internationally. Additional bank fees may apply.</p>
            </div> */}

            {/* <PInput /> */}
            <button type='submit' className={`text-white bg-[#A1A3EF] border-none cursor-pointer rounded-xl
                                        py-2                 md:py-3                xl:py-4
                                        px-6     sm:px-7     md:px-8     lg:px-9    xl:px-10   2xl:px-11 
                                        text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base`}
            >
                Enroll Now
            </button>

        </div>
    )
}

export default PaymentInput