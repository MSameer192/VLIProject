import React from 'react'
import DropDown from '../../../../../Components/CustomDropdown/DropDown'
import { LicenseTypeOptions, VehicleTypeOptions } from './DropDownArr/DropDownArr'
const CourseCategory = ({ setCourseData, CourseData }) => {
    return (
        <div className='DataInputContainer mb-20'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Course Category
                </h3>
                <p className='InputDetails'>
                    Choose the category and sub-category most suitable for your Vehicle type
                </p>
            </span>

            <div className='Add_C_B_InputSideContainer'>
                <div className='flex w-full items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 pt-3 sm:pt-0'>
                    <span className='flex flex-col max-w-[360px] gap-[6px] sm:gap-3 w-full'>
                        <h3 className='font-normal text-7xs sm:text-6xs md:text-5xs lg:text-3xs xl:2xs 2xl:text-xs'>
                            Course Category for Vehicle Type
                        </h3>
                        <DropDown Label="Select Vehicle Type" Name="VehicleType"
                            styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                            SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                            onChange={target => { setCourseData({ ...CourseData, "VehicleTypeFK": target.value }) }}
                            DropDownOptions={VehicleTypeOptions}
                        />
                    </span>
                    <span className='flex flex-col max-w-[360px] gap-[6px] sm:gap-3 w-full'>
                        <h3 className='font-normal text-7xs sm:text-6xs md:text-5xs lg:text-3xs xl:2xs 2xl:text-xs'>
                            Course Category for License Type
                        </h3>
                        <DropDown Label="Select License Type" Name="LicenseType"
                            styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                            SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                            DropDownOptions={LicenseTypeOptions}
                            onChange={target => setCourseData({ ...CourseData, "LicenseTypeFK": target.value  })}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CourseCategory