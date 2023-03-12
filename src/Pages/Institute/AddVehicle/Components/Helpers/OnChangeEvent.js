import { SetImagePreview } from "../../../../../Helpers/ImagePreview/ImagePreview";
import { Iterable } from "./Others";

export const OnImageChange = (e, VehicleImagesState, setVehicleImagesState, setImage, Index) => {
    const PreviewContainer = e.target.parentNode;
    let Images = Iterable(VehicleImagesState);
    const HideElements = PreviewContainer.getElementsByClassName("HideOnDrag");
    [...HideElements]?.forEach(element => element.classList.toggle("hidden"));


    Images[Index] = { ...Images[Index], [e.target.name]: e.target.files[0] }
    setVehicleImagesState(Images)

    SetImagePreview(setImage, e.target.files[0]);
}