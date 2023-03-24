import { useEffect, useState } from "react";
import { SetImagePreview } from "../../Helpers/ImagePreview/ImagePreview";

function ImagePreviewer({ Id, PreviewStyle, BrowseBtnStyle, ContainerStyle, OnChange, ImgUrl }) {
    const [Image, setImage] = useState()

    const PreviewImage = (e) => {
        const file = e.target.files[0]


        if (OnChange)
            OnChange(e)
        SetImagePreview(setImage, file)

    }

    if (!PreviewStyle)
        PreviewStyle = "w-52 h-36 ";
    if (!BrowseBtnStyle)
        BrowseBtnStyle = "text-3xs bg-[#F3F6F7]"
    if (!ContainerStyle)
        ContainerStyle = 'flex gap-5 w-1/2'
    useEffect(() => {
        if (ImgUrl?.length > 1)
            setImage(ImgUrl)
        // else SetImagePreview(setImage, Image)
    }, [ImgUrl, Image])

    return <div className={ContainerStyle}>
        <div className={`bg-[#F3F6F7] border-[#C8C8C8]  border-[3px] border-dashed rounded-xl flex justify-center overflow-hidden items-center ${PreviewStyle}   max-h-[162px] min-w-[130px]`}>
            {Image && <img className="w-full border-none outline-none border-[0px]" src={Image} alt="instructor" />}
            <input type="file" className='hidden' onChange={PreviewImage} id={Id} />
        </div>
        <div className="flex flex-col items-center gap-2">
            <label className={`cursor-pointer  h-fit w-fit  px-8 py-2 text-[#6E6E6E] rounded-lg shadow-[5px_6px_6px_#00000016] ${BrowseBtnStyle}`} htmlFor={Id}>
                Browse
            </label>

            <p className="text-[13px]">Jpeg, PNG or Giff</p>
        </div>

    </div>

}
export default ImagePreviewer