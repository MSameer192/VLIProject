export const SetImagePreview = (setImage, image) => {

    const Reader = new FileReader();
    Reader.readAsDataURL(image);
    Reader.onload = () => {
        setImage(Reader.result)
    }
}
export function Iterable(VehicleImagesState) {
    let Images = [...VehicleImagesState]

    Images = VehicleImagesState.map((value, index) => {
        return { ...value }
    });
    return Images
}