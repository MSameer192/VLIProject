export const SetImagePreview = (setImage, image) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(image);
    Reader.onload = () => {
        setImage(Reader.result)
    }
}