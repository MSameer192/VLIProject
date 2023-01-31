import { SetImagePreview } from "./Others";

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


export const Drop = (e, VehicleImagesState, setVehicleImagesState, setImage) => {
    e.preventDefault();
    e.stopPropagation();
    const ChangeBg = e.target;
    ChangeBg.classList.add("bg-[#f0f2f800]");
    ChangeBg.classList.remove("bg-[#95ACEF]");
    if (e.dataTransfer.files.length > 0) {
        const InputEle = e.target.getElementsByTagName("input")[0];
        InputEle.files = e.dataTransfer.files;

        VehicleImagesState.push(InputEle.files[0])
        setVehicleImagesState([...VehicleImagesState, InputEle.files[0]])
        SetImagePreview(setImage, e.dataTransfer.files[0])
    }
}
