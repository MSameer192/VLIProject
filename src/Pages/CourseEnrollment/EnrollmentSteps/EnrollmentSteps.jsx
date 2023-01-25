import React from 'react'

const EnrollmentSteps = () => {
    let EnrollmentStepsData = [
        {
            ImageLink: './Assets/FormIcon.svg',
            Heading: "Registration Form",
            Detail: "Applicants must register their demographic information in online Registration portal for Enrollment."
        },
        {
            ImageLink: './Assets/SelectIcon.svg',
            Heading: "Select Package",
            Detail: "You have Multiple packages in a single course. You can select what suits you the best."
        },
        {
            ImageLink: './Assets/PaymentIcon.svg',
            Heading: "Payment Method",
            Detail: "Applicants must provide a secured payment method on the payment portal for Enrollment."
        },
    ]
    return (
        <div className='flex flex-col gap-10 bg-[#F6F5F5] pt-6 pb-12'>
            <h2 className='text-center text-xs sm:text-base md:text-lg xl:text-[38px] SemiBoldItalic'>Complete 3 easy steps to enorll</h2>
            <div className='flex justify-center  items-center gap-4 sm:gap-5 lg:gap-3 xl:gap-4 2xl:gap-5 w-full flex-col md:flex-row md:flex-wrap lg:flex-nowrap'>

                {
                    EnrollmentStepsData.map((value, index) =>
                        <div key={index * .1} 
                        className={`flex flex-col gap-1 px-1 bg-white min-w-[325px] max-w-[550px] items-center justify-between
                        h-48                md:h-64
                        w-[95%]             md:w-[70%]  lg:w-[30%]              2xl:w-[30%] 
                        pt-1    sm:pt-2     md:pt-3     lg:pt-4     xl:pt-5
                        pb-2    sm:pb-4     md:pb-6     lg:pb-8     xl:pb-10 
                        EnrollmentStepsShadow`}>

                            <img className='min-h-[44px] h-11 sm:h-12 lg:h-14 xl:h-16 ' src={require(`${value.ImageLink}`)} alt="" />

                            <h4 className='text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base text-center SemiBold'>
                                {value.Heading}
                            </h4>

                            <p className='text-4xs md:text-4xs xl:text-3xs font-normal text-center  max-w-[450px]'>
                                {value.Detail}
                            </p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default EnrollmentSteps