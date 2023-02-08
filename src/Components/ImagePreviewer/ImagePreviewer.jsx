function ImagePreviewer({ Id, PreviewStyle, BrowseBtnStyle, ContainerStyle, OnChange }) {
    const PreviewImage = (e) => {
        const file = e.target.files[0]
 
        const Reader = new FileReader();

        if (OnChange) 
            OnChange(e)
        
        Reader.onload = function () {
            const ImgElements = e.target.parentNode.getElementsByTagName("img")

            if (ImgElements.length > 0)
                ImgElements[0].remove()


            const Img = document.createElement('img');
            Img.classList.add("w-full", "border-none", "outline-none", "border-[0px]")
            Img.src = Reader.result;
            e.target.parentNode.append(Img);
        }
        Reader.readAsDataURL(file)
    }
    
    if (!PreviewStyle)
        PreviewStyle = "w-52 h-36 ";
    if (!BrowseBtnStyle)
        BrowseBtnStyle = "text-3xs bg-[#F3F6F7]"
    if (!ContainerStyle)
        ContainerStyle = 'flex gap-5 w-1/2'


    return <div className={ContainerStyle}>
        <div className={`bg-[#F3F6F7] border-[#C8C8C8]  border-[3px] border-dashed rounded-xl flex justify-center overflow-hidden items-center ${PreviewStyle}   max-h-[162px] min-w-[130px]`}>
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