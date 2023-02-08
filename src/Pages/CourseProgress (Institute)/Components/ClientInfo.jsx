import React from 'react'

const ClientInfo = () => {
    return (
        <div className='flex w-full justify-between flex-col md:flex-row sm:w-11/12 xl:w-4/5'>
            <div className='flex flex-col items-center md:items-start w-full md:w-[45%] gap-4'>
                <img className='aspect-[59_/_74] w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 2xl:w-60' src={require('./Student.png')} alt="" />
                <InfoComp Heading="Email Address" Value="abc@gmail.com" />
                <InfoComp Heading="Age" Value="21 Years , 03 Months , 6 Days"
                    Src={require('../../../Components/InputComps/Assets/BirtPlaceIcon.svg').default} />
            </div>
            <div className='flex flex-col w-full md:w-[45%] gap-[17px]'>
                <InfoComp Heading="Name" Value="Pam Beesly" />
                <InfoComp Heading="Address" Value="123 , ABC , Ontario" />
                <InfoComp Heading="Phone Number" Value="123-456-789" />
                <InfoComp Heading="Gender" Value="Female" />
                <InfoComp Heading="Free Hours" Value="10:00 AM To 03:00 PM" />
            </div>
        </div>
    )
}
const InfoComp = ({ Heading, Value, Src }) => {
    return <div className='flex flex-col gap-3 w-full max-w-[600px]'>
        <h3 className='font-normal text-[#404040] text-3xs sm:text-2xs lg:text-xs '>{Heading} </h3>
        <span className='bg-white flex justify-between items-center rounded-xl px-5 py-3 shadow-[0px_3px_6px_#00000029]'>
            <h4 className='font-normal text-5xs sm:text-4xs md:text-3xs'>{Value}</h4>
            {Src ? <img src={Src} className='h-6 sm:h-[26px] md:h-7 lg:h-8' alt="" /> : null}
        </span>
    </div>
}
export default ClientInfo