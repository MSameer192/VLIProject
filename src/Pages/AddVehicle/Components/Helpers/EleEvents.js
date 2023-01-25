export const DragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const ChangeBg = e.target;
    if (ChangeBg) {
        ChangeBg.classList.remove("bg-[#F0F2F8]");
        ChangeBg.classList.remove("bg-[#f0f2f800]");
        ChangeBg.classList.add("bg-[#95ACEF]")
        const HideElements = ChangeBg.getElementsByClassName("HideOnDrag");
        [...HideElements]?.forEach(element => element.classList.add("hidden"));
    }


}
export const DragLeave = (e) => {
    e.stopPropagation();
    const ChangeBg = e.target;
    ChangeBg.classList.add("bg-[#F0F2F8]")
    ChangeBg.classList.remove("bg-[#95ACEF]");

    const HideElements = ChangeBg.getElementsByClassName("HideOnDrag");
    [...HideElements]?.forEach(element => element.classList.remove("hidden"));
}
const UpdateImagePreview = (Element, image) => {
    let ImgElement = Element.getElementsByClassName('ImgPreview')[0];
    if (!ImgElement) {
        ImgElement = document.createElement('img');
        ImgElement.classList.add("ImagePreview");
    }
    const Reader = new FileReader();
    Reader.readAsDataURL(image);
    Reader.onload = () => {
        ImgElement.src = Reader.result;
        Element.appendChild(ImgElement);
    }
}
export const Drop = (e, VehicleImagesState, setVehicleImagesState) => {
    e.preventDefault();
    e.stopPropagation();
    const ChangeBg = e.target;
    ChangeBg.classList.add("bg-[#f0f2f800]");
    ChangeBg.classList.remove("bg-[#95ACEF]");
    if (e.dataTransfer.files.length > 0) {
        const InputEle = e.target.getElementsByTagName("input")[0];
        InputEle.files = e.dataTransfer.files;
        setVehicleImagesState({ ...VehicleImagesState, [InputEle.name]: InputEle.files[0] })
        UpdateImagePreview(e.target, e.dataTransfer.files[0])
    }
}

export const OnImageChange = (e, VehicleImagesState, setVehicleImagesState) => {
    const PreviewContainer = e.target.parentNode;
    const HideElements = PreviewContainer.getElementsByClassName("HideOnDrag");
    [...HideElements]?.forEach(element => element.classList.toggle("hidden"));
    UpdateImagePreview(PreviewContainer, e.target.files[0]);
    setVehicleImagesState({ ...VehicleImagesState, [e.target.name]: e.target.files[0] })
}