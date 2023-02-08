import React from 'react'
import ImagePreviewer from '../../../../Components/ImagePreviewer/ImagePreviewer'

const InstituteDocuments = ({ InstituteData, setInstituteData }) => {
    let DocumentData = [
        { Title: "Ministry of Transportation Registration Slip", Id: "TransportationSlip", ImageName: "MOTR_Slip" },
        { Title: "Partner Logo", Id: "InstituteLogo", ImageName: "InstituteLogo" },
        { Title: "Local Registration Slip", Id: "LocalRegistrationSlip", ImageName: "LR_Slip" },
        { Title: "Partner Banner", Id: "Banner", ImageName: "Institute_Banner" },
    ]
    const OnChange = (e, ImageName) =>  setInstituteData({ ...InstituteData, [ImageName]: e.target.files[0] })
    
    return (
        <div className='w-full xl:w-1/2 px-16 flex py-8 flex-col gap-4 order-6 xl:order-1'>
            {
                DocumentData.map((value) =>
                    <div className='flex gap-5' key={value.Title}>
                        <h3 className='font-normal text-[30px] w-[400px]'>{value?.Title}</h3>
                        <ImagePreviewer Id={value.Id} OnChange={(e) => OnChange(e,value.ImageName)} />
                    </div>
                )
            }
            <div></div>

        </div>
    )
}

export default InstituteDocuments