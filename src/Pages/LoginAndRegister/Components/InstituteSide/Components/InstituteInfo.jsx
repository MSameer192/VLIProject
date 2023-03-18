import React from 'react'
import { SubmitButton } from '../../../LoginAndRegister';

const InstituteInfo = ({ UserInfoRef, InstituteData, setInstituteData, OnClick, Err, setErr }) => {
    const OnChange = (e, Name) => {
        setErr({ ...Err, [Name]: undefined })
        setInstituteData({ ...InstituteData, [Name]: e.target.value })
    }
    const Arr = ["InstituteName", "WebsiteUrl", "Address", "TotalInstructors", "TotalVehicles", "MOTR_Slip", "InstituteLogo", "LR_Slip", "Institute_Banner"]
    const OnClickFun = () => {
        OnClick(100, UserInfoRef, Arr)
    }

    return (
        <>
            <div className='w-full min-h-fit xl:w-1/2 flex flex-col items-center justify-around mt-5 xl:self-stretch order-1 xl:order-6'>
                <div className='flex flex-col items-center gap-5 py-5 px-5 xl:mb-24 w-full'>

                    <span className='flex flex-col w-full max-w-[650px]'>
                        <h6 className='text-5xs text-[red] font-normal'>{Err.InstituteName ? "Institute Name  is requireed" : Err.InstituteName}</h6>
                        <input className="InstituteSide_InputStyles  w-ful" type="text" name="" id="PartnerName" placeholder='Partner Name'
                            onChange={e => OnChange(e, "InstituteName")}

                        />
                    </span>
                    <span className='flex w-full max-w-[650px]'>
                        <input className="InstituteSide_InputStyles  w-full" type="text" name="" id="WebsiteUrl" placeholder='Website if any'
                            onChange={e => OnChange(e, "WebsiteUrl")}
                        />
                    </span>

                    <span className='flex w-full max-w-[650px]'>
                        <input className="InstituteSide_InputStyles w-full" type="text" name="" id="Address" placeholder='Address'
                            onChange={e => OnChange(e, "Address")}
                        />
                    </span>
                    <span className="flex   w-full gap-5 2xl:gap-12 max-w-[650px]">
                        <span className='flex flex-col w-1/2'>
                            <input className="InstituteSide_InputStyles  w-ful" type="number" name="" id="TotalInstructors" placeholder='Total Instructors'
                                onChange={e => OnChange(e, "TotalInstructors")}
                            />
                        </span>
                        <span className='flex flex-col w-1/2'>
                            <input className="InstituteSide_InputStyles  w-ful" type="number" name="" id="TotalVehicles" placeholder='Total Vehicles'
                                onChange={e => OnChange(e, "TotalVehicles")}
                            />
                        </span>
                    </span>
                </div>
                <span className='hidden xl:flex w-full items-center justify-center'>
                    <SubmitButton AuthPageName="Next" ButtonType="button" OnClickFun={OnClickFun} />
                </span>
            </div>

        </>
    )
}

export default InstituteInfo