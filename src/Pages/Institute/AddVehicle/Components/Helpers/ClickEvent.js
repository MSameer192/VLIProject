import { Iterable } from "./Others"

export const RemoveImage = (e, VehicleImagesState, setVehicleImagesState, Index, Name) => {
    let Images = Iterable(VehicleImagesState)
    if (e.target === e.currentTarget) {

        if (Images[Index]?.VehicleImageLink)
            delete Images[Index].VehicleImageLink

        if (Images[Index])
            Images[Index][Name] = null

        setVehicleImagesState(Images)
    }
}
