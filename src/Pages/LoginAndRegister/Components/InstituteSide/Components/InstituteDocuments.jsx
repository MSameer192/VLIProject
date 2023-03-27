import React from 'react'
import ImagePreviewer from '../../../../../Components/ImagePreviewer/ImagePreviewer'

const InstituteDocuments = ({ InstituteData, setInstituteData, Err, setErr }) => {
    let DocumentData = [
        { Title: "Ministry of Transportation Registration Slip", Id: "TransportationSlip", ImageName: "MOTR_Slip" },
        { Title: "Partner Logo", Id: "InstituteLogo", ImageName: "InstituteLogo" },
        { Title: "Local Registration Slip", Id: "LocalRegistrationSlip", ImageName: "LR_Slip" },
        { Title: "Partner Banner", Id: "Banner", ImageName: "Institute_Banner" },
    ]
    const OnChange = (e, ImageName, Title) => {
        if (e.target.files.length > 0) {
            delete Err?.[ImageName]
            setErr(Err)
            setInstituteData({ ...InstituteData, [ImageName]: e.target.files[0] })
        }
        else
            setErr({ ...Err, [ImageName]: `"${Title}" is required` })
    }
    const ContainerStyle = "";

    return (
        <div className='InstituteDocument_MainContainer'>
            {
                DocumentData.map(value =>

                    <div className="flex w-full flex-col" key={value.Title}>
                        <div className='flex gap-5 flex-col sm:flex-row'>
                            <h3 className='InstituteDocument_Title'>{value?.Title}</h3>

                            <ImagePreviewer Id={value.Id}
                                OnChange={(e) => OnChange(e, value.ImageName)}
                                ContainerStyle={ContainerStyle}
                                ImgUrl={InstituteData?.[value.ImageName]}
                            />

                        </div>

                        <h5 className='font-normal text-6xs text-[red] mb-1'>
                            {Err?.[value.ImageName]}
                        </h5>

                    </div>
                )
            }

            <div></div>

        </div>
    )
}

export default InstituteDocuments