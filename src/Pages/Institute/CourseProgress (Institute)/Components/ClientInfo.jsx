import React from 'react'

const ArrangeHrs = (Hrs) => {

    if (Hrs) {
        let SHH = Hrs.Start.hh;
        let SMM = Hrs.Start.mm;
        let SAM = Hrs.Start.AM ? "AM" : "PM";

        let EHH = Hrs.End.hh
        let EMM = Hrs.End.mm
        let EAM = Hrs.End.AM ? "AM" : "PM";

        if (Hrs.Start.hh < 10)
            SHH = "0" + Hrs.Start.hh
        if (Hrs.Start.mm < 10)
            SMM = "0" + Hrs.Start.mm
        if (Hrs.End.hh < 10)
            EHH = "0" + Hrs.End.hh
        if (Hrs.End.mm < 10)
            EMM = "0" + Hrs.End.mm

        return SHH + ":" + SMM + " " + SAM + "  to  " + EHH + ":" + EMM + " " + EAM
    }
}
const ClientInfo = ({ Student, Src }) => {


    return (
        <div className='flex w-full justify-between flex-col md:flex-row sm:w-11/12 xl:w-4/5'>
            <div className='flex flex-col items-center md:items-start w-full md:w-[45%] gap-4'>
                <img className='aspect-[59_/_74] w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 2xl:w-60' src={Src} alt="" />
                <InfoComp Heading="Email Address" Value={Student?.Email} />
                <InfoComp Heading="Age" Value={Student?.StudentInfo?.DOB}
                    Src={require('../../../../Components/InputComps/Assets/BirtPlaceIcon.svg').default} />
            </div>
            <div className='flex flex-col w-full md:w-[45%] gap-[17px]'>
                <InfoComp Heading="Name" Value={Student?.FirstName + " " + Student?.LastName} />
                <InfoComp Heading="Address" Value={Student?.StudentInfo?.Address} />
                <InfoComp Heading="Phone Number" Value={Student?.PhoneNumber ? Student?.PhoneNumber : "Not mentioned"} />
                <InfoComp Heading="Gender" Value={Student?.StudentInfo?.Gender} />
                <InfoComp Heading="Free Hours"
                    Value={ArrangeHrs(Student?.StudentInfo?.FreeHours?.[0])}
                />
            </div>
        </div>
    )
}
const InfoComp = ({ Heading, Value, Src }) => {
    return <div className='flex flex-col gap-3 w-full max-w-[600px] relative'>
        <h3 className='font-normal text-[#404040] text-3xs sm:text-2xs lg:text-xs '>{Heading} </h3>
        <span className='bg-white flex justify-between items-center rounded-xl px-5 py-3 shadow-[0px_3px_6px_#00000029]'>
            <h4 className='font-normal text-5xs sm:text-4xs md:text-3xs'>{Value}</h4>
            {Src ? <img src={Src} className='h-6 sm:h-[26px] md:h-7 lg:h-8 absolute right-5' alt="" /> : null}
        </span>
    </div>
}
export default ClientInfo