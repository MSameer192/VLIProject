import { AddVehicleA, UpdateVehicleA } from "../../../Actions/VehicleA";
import { Iterable } from "../Components/Helpers/Others";

export function SubmitAddVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate) {
    let Errors = {}
    e.preventDefault();
    const VehicleFormData = new FormData();

    for (let [key, value] of Object.entries(VehicleData)) {
        if (!value) Errors[key] = true
        else delete Errors[key]
    }
    if (VehicleImagesState.length < 0) {
        setVehicleErrors({ ...VehicleErrors, VehicleImage: "Please select atleast 1 image" })
    }
    setVehicleErrors({ ...VehicleErrors, ...Errors })
    if (Object.entries(Errors).length > 0)
        return

    VehicleImagesState.forEach((value, index) => {
        ++index;
        if (value[`Image${index}`]) {
            VehicleFormData.append(`Image${index}`, value[`Image${index}`])
        }
    });


    VehicleFormData.append("VehicleInfo", JSON.stringify(VehicleData));


    Dispatch(AddVehicleA(VehicleFormData, Navigate))
}


export function SubmitUpdateVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate) {
    let Errors = {}
    e.preventDefault();
    const VehicleFormData = new FormData();

    for (let [key, value] of Object.entries(VehicleData)) {
        if (!value) Errors[key] = true
        else delete Errors[key]
    }
    if (VehicleImagesState.length < 0) {
        setVehicleErrors({ ...VehicleErrors, VehicleImage: "Please select atleast 1 image" })
    }
    setVehicleErrors({ ...VehicleErrors, ...Errors })
    if (Object.entries(Errors).length > 0)
        return

    let WorkVehicleImages = Iterable(VehicleImagesState)



    const Exp = /Image\d/i;

    WorkVehicleImages = WorkVehicleImages.filter((value, index) => {
        let Key = Object.keys(value).filter((Key) => Exp.test(Key));
        return value[value[Key[0]]] !== undefined || value[value[Key[0]]] !== null
    })


    WorkVehicleImages = WorkVehicleImages.map((value, index) => {
        ++index
        let Key = Object.keys(value).filter((Key) => Exp.test(Key))

        if (value[Key[0]]) {
            VehicleFormData.append(`Image${index}`, value[Key[0]]);
            delete value[Key[0]]
            value[`Image${index}`] = "Changed"
        }
        return value
    })
    VehicleData.Images = WorkVehicleImages

    VehicleFormData.append("VehicleInfo", JSON.stringify(VehicleData));

    Dispatch(UpdateVehicleA(VehicleFormData, Navigate))
}