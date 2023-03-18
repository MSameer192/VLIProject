import React from 'react'
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'

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
        <div className='InstituteDocument_MainContainer'>
            {
                DocumentData.map((value) =>
                    <div className='flex gap-5 flex-col sm:flex-row' key={value.Title}>
                        <h3 className='InstituteDocument_Title'>{value?.Title}</h3>
                        <ImagePreviewer Id={value.Id} OnChange={(e) => OnChange(e, value.ImageName)} ContainerStyle={ContainerStyle} />
                    </div>
                )
            }
            <div></div>

        </div>
    )
}

export default InstituteDocuments