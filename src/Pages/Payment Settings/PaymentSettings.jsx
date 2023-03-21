import React from 'react'
import InstituteTemplate from '../../Components/InstituteTemplate/InstituteTemplate'
import MyCourses from '../../Components/MyCourses/MyCourses'
import { InsEnrolledCourseButtons } from '../../PageNames'
import { CardInfo, Invoice, PackageDetails, Reimbustment } from './Components/CardInfo'
import './PaymentSettings.css'
const PaymentSettingsChild = () => {
    return (
        <div className={`PaymentPageContainer`}
        >
            <CardInfo />
            <PackageDetails />
            <Invoice />
            <Reimbustment />
        </div>
    )
}
const PaymentSettingsPage = () =>
    <MyCourses ButtonsInfo={InsEnrolledCourseButtons}
        HideFooter={true}
        PageName="PaymentSetting"
        Component={PaymentSettingsChild}
    />

const PaymentSettings = () =>
    <InstituteTemplate bg="bg-[#F8F8F8]" m_top="mt-0" Element={PaymentSettingsPage} />


export default PaymentSettings