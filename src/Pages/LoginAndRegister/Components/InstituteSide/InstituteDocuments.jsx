import React from 'react'
import ImagePreviewer from '../../../../Components/ImagePreviewer/ImagePreviewer'

const InstituteDocuments = ({ InstituteData, setInstituteData }) => {
    let DocumentData = [
        { Title: "Ministry of Transportation Registration Slip", Id: "TransportationSlip", ImageName: "MOTR_Slip" },
        { Title: "Partner Logo", Id: "InstituteLogo", ImageName: "InstituteLogo" },
        { Title: "Local Registration Slip", Id: "LocalRegistrationSlip", ImageName: "LR_Slip" },
        { Title: "Partner Banner", Id: "Banner", ImageName: "Institute_Banner" },
    ]
    const OnChange = (e, ImageName) => setInstituteData({ ...InstituteData, [ImageName]: e.target.files[0] })
    const ContainerStyle = ""
    return (
        <div className='w-full xl:w-1/2 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 flex md:py-8 flex-col gap-4 order-6 xl:order-1'>
            {
                DocumentData.map((value) =>
                    <div className='flex gap-5 flex-col sm:flex-row' key={value.Title}>
                        <h3 className='font-normal text-3xs sm:text-2xs md:text-xs lg:text-sm xl:text-base 2xl:text-[30px] w-[400px]'>{value?.Title}</h3>
                        <ImagePreviewer Id={value.Id} OnChange={(e) => OnChange(e, value.ImageName)} ContainerStyle={ContainerStyle} />
                    </div>
                )
            }
            <div></div>

        </div>
    )
}

export default InstituteDocuments