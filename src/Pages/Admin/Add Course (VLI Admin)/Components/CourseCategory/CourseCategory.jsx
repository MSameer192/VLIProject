import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import DropDown from '../../../../../Components/CustomDropdown/DropDown'
import DropDownOptions from '../../../../../Components/CustomDropdown/DropDownOption';
import { LicenseTypeOptions, VehicleTypeOptions } from './DropDownArr/DropDownArr'
const CourseCategory = ({ setCourseData, CourseData, SubLicenseType, setSubLicenseType, Err, setErr }) => {
    
    const OnChange = (target, Key, Name) => {
        if (target.value !== "") {
            delete Err?.[Key]
            setErr(Err)
            setCourseData({ ...CourseData, [Key]: target.value })
        }
        else if (target.value === "")
            setErr({ ...Err, [Key]: `${Name} is required` })
    }

    const { LicenseTypes } = useSelector(Store => Store.LicenseTypeReducer)

    useEffect(() => {
        LicenseTypes.forEach((value) => {
            if (value.LicenseTypeId === CourseData.LicenseTypeFK && value.SubLicenseTypes.length > 0)
                setSubLicenseType(value.SubLicenseTypes)
            else if (value.LicenseTypeId === CourseData.LicenseTypeFK && value.SubLicenseTypes.length <= 0)
                setSubLicenseType([])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [LicenseTypes, CourseData, setSubLicenseType])





    const SubLicenseTypeOptions = ({ Name, onChange, StateValue }) =>
        SubLicenseType.map((value) =>
            <DropDownOptions ID={value.SubLicenseTypeId} key={value.SubLicenseTypeId} Text={value.SubLicenseTypeName} Name={Name} onChange={onChange} StateValue={StateValue} />)


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
                <div className='flex w-full justify-center md:justify-start flex-wrap md:flex-nowrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 pt-3 sm:pt-0'>
                    <span className='flex flex-col max-w-[360px] gap-[6px] sm:gap-3 w-full'>
                        <h3 className='font-normal whitespace-nowrap text-7xs sm:text-6xs md:text-5xs lg:text-3xs xl:2xs 2xl:text-xs'>
                            Course Category for Vehicle Type
                        </h3>
                        <DropDown Label="Select Vehicle Type" Name="VehicleType"
                            styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                            SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                            StateValue={CourseData?.VehicleTypeName}


                            onChange={(target, Text) => {
                                OnChange(target, "VehicleTypeFK", "Vehicle type")
                                setCourseData({ ...CourseData, "VehicleTypeFK": target.value, VehicleTypeName: Text })
                            }
                            }

                            DropDownOptions={VehicleTypeOptions}
                        />
                        <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.VehicleTypeFK} </p>
                    </span>
                    <div className='flex flex-col gap-5  max-w-[360px]  sm:gap-3 w-full'>
                        <span className='flex flex-col max-w-[360px] gap-[6px] sm:gap-3 w-full'>
                            <h3 className='font-normal whitespace-nowrap text-7xs sm:text-6xs md:text-5xs lg:text-3xs xl:2xs 2xl:text-xs'>
                                Course Category for License Type
                            </h3>
                            <DropDown Label="Select License Type" Name="LicenseType"
                                styles="bg-white border-none" TextStyle="text-6xs sm:text-5xs md:text-4xs xl:text-3xs"
                                SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                                DropDownOptions={LicenseTypeOptions}
                                StateValue={CourseData?.LicenseTypeName}
                                onChange={(target, Text) => {
                                    OnChange(target, "LicenseTypeFK", "License type")
                                    setCourseData({
                                        ...CourseData, "LicenseTypeFK": target.value, LicenseTypeName: Text,
                                        SubLicenseTypeFK: undefined,
                                        SubLicenseTypeName: undefined
                                    })
                                }}
                            />



                            <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.LicenseTypeFK} </p>
                        </span>
                        {SubLicenseType?.length > 0
                            ? <span className='flex flex-col max-w-[360px] gap-[6px] sm:gap-3 w-full'>
                                <h3 className='font-normal text-[12px] whitespace-nowrap sm:text-7xs md:text-6xs lg:text-4xs xl:3xs 2xl:text-2xs'>
                                    Course Category for sub License Type
                                </h3>
                                <DropDown Label="Select sub License Type" Name="SubLicenseType"
                                    styles="bg-white border-none" TextStyle="text-7xs sm:text-6xs md:text-5xs xl:text-4xs"
                                    SelectValueStyle="px-3 sm:px-4 md:px-2 lg:px-6 xl:px-7 2xl:px-[30px]"
                                    DropDownOptions={SubLicenseTypeOptions}
                                    StateValue={CourseData?.SubLicenseTypeName}
                                    onChange={(target, Text) => {
                                        OnChange(target, "SubLicenseTypeFK", "SubLicense type")
                                        setCourseData({ ...CourseData, "SubLicenseTypeFK": target.value, SubLicenseTypeName: Text })
                                    }}
                                />
                                <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.SubLicenseTypeFK} </p>
                            </span>
                            : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCategory