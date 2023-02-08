import React from 'react'
import Template from './Template'
let TextResponsiveStyle = "text-5xs sm:text-5xs md:text-4xs lg:text-3xs xl:text-2xs 2xl:text-xs"
export const CardInfo = () => {
    const Content = () =>
        <>
            <h3 className={`text-[#4D4F5C] ${TextResponsiveStyle} SemiBold`}>Visa: **** **** **** (092)</h3>
            <h3 className={`text-[#4D4F5C] ${TextResponsiveStyle} SemiBold`}>Visa Ending in 293 days</h3>
        </>
    return (
        <Template Title="Card Information" Content={Content}
            Src={require('./Assets/Visa.svg').default}
            ButtonText="Edit payment information" />
    )
}
export const PackageDetails = () => {
    const Content = () => <h3 className={`text-[#4D4F5C] ${TextResponsiveStyle} SemiBold`}>12 hours Driving , 5 hours online , 4 hours in Class for 300 $</h3>


    return (
        <Template Title="Package Details" Content={Content}
            ButtonText="View Package Info" />
    )
}
export const Invoice = () => {
    const Content = () =>
        <>
            <h3 className={`text-[#4D4F5C] ${TextResponsiveStyle} SemiBold`}>First Installment 300 $</h3>
            <h3 className={`text-[#4D4F5C] ${TextResponsiveStyle} SemiBold`}>Visa: **** **** **** (092)</h3>

        </>

    return (
        <Template Title="Payment Invoice download" Content={Content}
            Src={require('./Assets/Pdf.svg').default}
            ButtonText="Visa: **** **** **** (092)" />
    )
}
export const Reimbustment = () => {
    const TextR="text-5xs md:text-4xs xl:text-3xs 2xl:text-xs"
    const Content = () =>
        <div className='flex w-full justify-between items-center flex-col sm:flex-row gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10'>

            <div className='flex flex-col gap-2 w-64'>
                <span className='flex justify-between items-center gap-2'>
                    <h3 className={`font-normal ${TextR}`}>Total Paid:</h3>
                    <h3 className={`font-normal ${TextR} whitespace-nowrap`}>300 $</h3>
                </span>
                <span className='flex justify-between gap-2'>
                    <h3 className={`font-normal ${TextR}`}>Remaining Amount</h3>
                    <h3 className={`font-normal ${TextR} whitespace-nowrap`}>0 $</h3>
                </span>
            </div>
            <div className='flex flex-col gap-2 w-64'>
                <span className='flex justify-between gap-2'>
                    <h3 className={`font-normal ${TextR}`}>Total Paid:</h3>
                    <h3 className={`font-normal ${TextR} whitespace-nowrap`}>300 $</h3>
                </span>
                <span className='flex justify-between gap-2'>
                    <h3 className={`font-normal ${TextR}`}>Remaining Amount</h3>
                    <h3 className={`font-normal ${TextR} whitespace-nowrap`}>0 $</h3>
                </span>
            </div>
        </div>
    const ButtonText = () =>
        <div className='flex justify-between gap-2 w-64'>
            <h3 className={`text-[#FF4E61] font-normal text-4xs md:text-3xs lg:text-2xs xl:text-xs`}>Reimbustment</h3>
            <h3 className={`text-[#FF4E61] font-normal text-4xs md:text-3xs lg:text-2xs xl:text-xs`} >75 $</h3>
        </div>

    return (
        <Template Title="Payment Invoice download" Content={Content}
            ButtonText={ButtonText} />
    )
}
