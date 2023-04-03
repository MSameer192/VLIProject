import React from 'react'
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'
import { DateInput } from '../../../../../Components/InputComps/DateComps'
import { Input, InputWithImage, SelectList } from '../../../../../Components/InputComps/InputComps'
import { GenderOptions, LicenseTypesOption } from '../OptionsArr/OptionsArr';
import './InstructorInfo.css'
const InstructorInfo = ({ InstructorData, setInstructorData, Err, setErr }) => {
    const OnChange = (e, Name, file) => {
        let Data = e.target.files?.length > 0 ? e.target.files[0] : e.target.value
        setInstructorData({ ...InstructorData, [Name]: Data })
        if (Err?.[Name]) {
            delete Err[Name]
            setErr({ ...Err, [Name]: undefined })
        }
    }


    return (
        <div className='flex flex-col md:flex-row flex-wrap w-full justify-between gap-10 gap-y-6  sm:w-full md:w-[95%] lg:w-[85%]'>
            <Input Label="First name" Placeholder="John" Id="FirstName" Err={Err?.FirstName}
                State={InstructorData.FirstName}
                onChange={e => OnChange(e, "FirstName")}
            />

            <Input Label="Last name" Placeholder="Smith" Id="LastName" Err={Err?.LastName}
                State={InstructorData.LastName}
                onChange={e => OnChange(e, "LastName")}
            />

            <InputWithImage Label="Address" Placeholder="123-456-789" Id="Address" Err={Err?.Address}
                State={InstructorData.Address}
                onChange={e => OnChange(e, "Address")}
                Src={require('./Assets/Location.svg').default}
            />

            <Input Label="Postal Code" Placeholder="0546" Id="PostalCode" Err={Err?.PostalCode}
                State={InstructorData.PostalCode}
                onChange={e => OnChange(e, "PostalCode")}
            />

            <Input Label="Province" Placeholder="Ontario" Id="Province" Err={Err?.Province}
                State={InstructorData.Province}
                onChange={e => OnChange(e, "Province")}

            />

            <InputWithImage Label="City" Placeholder="Toronto" Id="City" Err={Err?.City}
                State={InstructorData.City}
                onChange={e => OnChange(e, "City")}
                Src={require('./Assets/City.svg').default}
            />

            <DateInput
                State={InstructorData.DOB}
                onChange={e => OnChange(e, "DOB")}

            />

            <Input Label="Email Address" Placeholder="abc@gmail.com" Id="Email" Err={Err?.Email}
                State={InstructorData.Email}
                onChange={e => OnChange(e, "Email")}
            />

            <Input Label="Phone Number" Placeholder="123-456-789" Id="PhoneNumber" Err={Err?.PhoneNumber}
                State={InstructorData.PhoneNumber}
                onChange={e => OnChange(e, "PhoneNumber")}
            />

            <Input Label="Guardian Phone Number" Placeholder="123-456-789" Id="GuardianPhoneNumber"
                Err={Err?.GuardianPhoneNumber}
                State={InstructorData.GuardianPhoneNumber}
                onChange={e => OnChange(e, "GuardianPhoneNumber")}
            />

            <SelectList Label="Gender" Id="Gender" defaultValue="" Text="Gender" Err={Err?.Gender}
                OptionsArr={GenderOptions}
                State={InstructorData.Gender}
                onChange={e => OnChange(e, "Gender")}
            />

            <SelectList Label="License Type" Id="LicenseType"
                defaultValue="" Text="License Type" Err={Err?.Gender}
                OptionsArr={LicenseTypesOption}
                State={InstructorData.Speciality}
                onChange={e => OnChange(e, "Speciality")}
            />
            <Input Label="License Number" Placeholder="PQ512654" Id="LicenseNumber" Err={Err?.LicenseNumber}
                State={InstructorData.LicenseNumber}
                onChange={e => OnChange(e, "LicenseNumber")}
            />

            <Input Label="License Expiry" Placeholder="5/3" Id="LicenseExpiry" Err={Err?.LicenseExpiry}
                State={InstructorData.LicenseExpiry}
                onChange={e => OnChange(e, "LicenseExpiry")}
            />

            <Input Label="Special License Number" Placeholder="PQ512654" Id="SpecialLicenseNumber" Err={Err?.SpecialLicenseNumber}
                State={InstructorData.SpecialLicenseNumber}
                onChange={e => OnChange(e, "SpecialLicenseNumber")}
            />

            <Input Label="Special License Expiry" Placeholder="5/3" Id="SpecialLicenseExpiry" Err={Err?.SpecialLicenseExpiry}
                State={InstructorData.SpecialLicenseExpiry}
                onChange={e => OnChange(e, "SpecialLicenseExpiry")}
            />


            <div className='flex w-full flex-wrap flex-col md:flex-row gap-8 justify-between'>
                <div className='Instructor-PreviewContainer-Container'>
                    <h3 className='font-normal text-5xs md:text-4xs lg:text-3xs xl:text-2xs 2xl:text-xs 2xl:w-[175px]'>Instructor Profile</h3>
                    <ImagePreviewer Id="ProfileImage" PreviewStyle="Instructor_ImagePreview"
                        BrowseBtnStyle="Instructor_BrowseBtn"
                        ContainerStyle="Instructor_PreviewContainer"
                        OnChange={e => OnChange(e, "ProfileImage")}
                        ImgUrl={InstructorData?.ProfileImage}
                    />
                </div>
                <div className='Instructor-PreviewContainer-Container'>
                    <h3 className='font-normal text-5xs md:text-4xs lg:text-3xs xl:text-2xs 2xl:text-xs 2xl:w-[175px]'>Instructor License</h3>
                    <ImagePreviewer Id="LicenseImage" PreviewStyle="Instructor_ImagePreview"
                        BrowseBtnStyle="Instructor_BrowseBtn"
                        ContainerStyle="Instructor_PreviewContainer"
                        OnChange={e => OnChange(e, "LicenseImage")}
                        ImgUrl={InstructorData?.LicenseImage}
                    />
                </div>
                <div className='Instructor-PreviewContainer-Container'>
                    <h3 className='font-normal text-5xs md:text-4xs lg:text-3xs xl:text-2xs 2xl:text-xs 2xl:w-[175px]'>Trainer Permit</h3>
                    <ImagePreviewer Id="TrainerPermitImage" PreviewStyle="Instructor_ImagePreview"
                        BrowseBtnStyle="Instructor_BrowseBtn"
                        ContainerStyle="Instructor_PreviewContainer"
                        OnChange={e => OnChange(e, "TrainerPermitImage")}
                        ImgUrl={InstructorData?.TrainerPermitImage}
                    />
                </div>
                <div className='Instructor-PreviewContainer-Container'>
                    <h3 className='font-normal text-5xs md:text-4xs lg:text-3xs xl:text-2xs 2xl:text-xs 2xl:w-[175px]'>Instructor Special License</h3>
                    <ImagePreviewer Id="SpecialLicenseImage" PreviewStyle="Instructor_ImagePreview"
                        BrowseBtnStyle="Instructor_BrowseBtn"
                        ContainerStyle="Instructor_PreviewContainer"
                        OnChange={e => OnChange(e, "SpecialLicenseImage")}
                        ImgUrl={InstructorData?.SpecialLicenseImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default InstructorInfo