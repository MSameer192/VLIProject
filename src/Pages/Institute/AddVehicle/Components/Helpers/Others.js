 
export function Iterable(VehicleImagesState) {
    let Images = [...VehicleImagesState]

    Images = VehicleImagesState.map((value, index) => {
        return { ...value }
    });
    return Images
}