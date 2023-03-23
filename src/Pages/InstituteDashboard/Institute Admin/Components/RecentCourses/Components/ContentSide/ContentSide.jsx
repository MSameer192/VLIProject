import React from 'react'

const ContentSide = ({ value }) => {
    return (
        <div className="flex flex-col w-full lg:w-[70%] items-center lg:items-start max-w-[535px] max-h-[136px] pl-[21px] pr-[27px] h-96 justify-between my-2 lg:self-stretch">
            <div className='flex flex-col items-center lg:items-start'>
                <p className="text-3xs lg:text-2xs xl:text-sm 2xl:text-base cardHeading">
                    {value?.Course?.CourseName}
                </p>
                <p className="text-3xs lg:text-2xs xl:text-sm 2xl:text-base">
                    L Type - {value?.Course?.LicenseType?.LicenseTypeName} |
                    V Type - {value?.Course?.VehicleType?.VehicleTypeName}
                </p>
            </div>

            <p className="text-[14px] pr-7">
                {value?.ShortDescription}
            </p>
        </div>
    )
}

export default ContentSide