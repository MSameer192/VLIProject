import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate'
import { CardInfo, Invoice, PackageDetails, Reimbustment } from './Components/CardInfo'
import './PaymentSettings.css'
const PaymentSettingsChild = () => {



    return (
        <div className={`flex flex-wrap w-full  
        px-8        sm:px-10        md:px-12        lg:px-14        xl:px-16        2xl:px-20 
        gap-10      sm:gap-12       md:gap-14       lg:gap-16       xl:gap-20       2xl:gap-24
        pt-10       sm:pt-12        md:pt-14        lg:pt-16        xl:pt-20        2xl:pt-24
        TilesContainer
        `}
        >
            <CardInfo />
            <PackageDetails />
            <Invoice />
            <Reimbustment />
        </div>
    )
}

const PaymentSettings = () => <InstituteTemplate bg="bg-[#F8F8F8]" m_top="mt-0" Element={PaymentSettingsChild} />


export default PaymentSettings