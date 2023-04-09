import React from 'react'
import { SubmitButton } from '../../../LoginAndRegister';
import { ValidateInstituteInfo } from '../Helpers/FieldsValidations';

const InstituteInfo = ({ UserInfoRef, InstituteData, setInstituteData, OnClick, Err, setErr, setPrevious }) => {

    const OnChange = (e, Key, Name) => {

        if (e.target.value === "") {
            setErr({ ...Err, [Key]: `${Name} is required` })
            setInstituteData({ ...InstituteData, [Key]: e.target.value })
        }
        else if (Key === "TotalInstructors" || Key === "TotalVehicles") {
            const Val = Number(e.target.value);

            if (Val > 0) {
                delete Err?.[Key]
                setErr(Err);
                setInstituteData({ ...InstituteData, [Key]: e.target.value })
            }
        }

        else {
            delete Err?.[Key]
            setErr(Err);
            setInstituteData({ ...InstituteData, [Key]: e.target.value })
        }


    }


    const OnClickFun = () => OnClick(100, UserInfoRef)


    return (
        <>
            <div className='w-full min-h-fit xl:w-1/2 flex flex-col items-center justify-around mt-5 xl:self-stretch order-1 xl:order-6'>
                <div className='flex flex-col items-center gap-5 py-5 px-5 xl:mb-24 w-full'>

                    <span className='flex flex-col w-full max-w-[650px] gap-1'>

                        <input className="InstituteSide_InputStyles"
                            type="text"
                            id="PartnerName"
                            placeholder='Partner Name'
                            value={InstituteData.InstituteName}
                            onChange={e => OnChange(e, "InstituteName", "Institute Name")}

                        />
                        <h6 className='text-6xs text-[red] font-normal h-[14px]'>
                            {Err.InstituteName}
                        </h6>
                    </span>




                    <span className='flex gap-1 flex-col w-full max-w-[650px]'>

                        <input className="InstituteSide_InputStyles" type="text" name=""
                            id="WebsiteUrl" placeholder='Website if any'
                            value={InstituteData.WebsiteUrl}
                            onChange={e => OnChange(e, "WebsiteUrl")}
                        />

                        <h6 className='text-6xs text-[red] font-normal h-[14px]'>

                        </h6>

                    </span>



                    <span className='flex flex-col w-full max-w-[650px] gap-1'>

                        <input className="InstituteSide_InputStyles" type="text" name="" id="Address"
                            placeholder='Address' value={InstituteData.Address}
                            onChange={e => OnChange(e, "Address", "Address")}
                        />

                        <h6 className='text-6xs text-[red] font-normal h-[14px]'>
                            {Err.Address}
                        </h6>

                    </span>




                    <span className="flex w-full gap-5 2xl:gap-12 max-w-[650px]">

                        <span className='flex flex-col w-1/2'>
                            <input className="InstituteSide_InputStyles" type="number" name=""
                                id="TotalInstructors" placeholder='Total Instructors'
                                value={InstituteData.TotalInstructors}
                                onChange={e => OnChange(e, "TotalInstructors", "Total Instructors")}
                            />
                            <h6 className='text-6xs text-[red] font-normal h-[14px]'>
                                {Err.TotalInstructors}
                            </h6>
                        </span>


                        <span className='flex flex-col w-1/2'>
                            <input className="InstituteSide_InputStyles" type="number" name=""
                                id="TotalVehicles" placeholder='Total Vehicles'
                                value={InstituteData.TotalVehicles}
                                onChange={e => OnChange(e, "TotalVehicles", "Total Vehicles")}
                            />
                            <h6 className='text-6xs text-[red] font-normal h-[14px]'>
                                {Err.TotalVehicles}
                            </h6>
                        </span>


                    </span>


                </div>
                <span className='hidden xl:flex w-full items-center justify-center' onClick={()=>{setPrevious(true)}}>
                    <SubmitButton AuthPageName="Next" ButtonType="button" OnClickFun={OnClickFun} />
                </span>

                
            </div>

        </>
    )
}

export default InstituteInfo