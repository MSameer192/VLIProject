import React from 'react'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import Steps from './Components/Steps'
import './AddVehicle.css'
import VehicleInfo from './Components/VehicleInfo'
import VehicleImages from './Components/VehicleImages'
import VehicleCredentials from './Components/VehicleCredentials'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleVehicleA, UpdateVehicleA } from '../../Actions/VehicleA'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Iterable } from './Components/Helpers/Others'
const UpdateVehicle = () => {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const { VehicleId } = useParams()
    const { loading, VehicleData: VehicleDataA } = useSelector((Store) => Store.VehicleReducer);

    const [VehicleErrors, setVehicleErrors] = useState({ Description: false })
    const [VehicleImagesState, setVehicleImagesState] = useState([{}]);
    const [VehicleData, setVehicleData] = useState({
        Manufacturer: undefined,
        Model: undefined,
        Year: undefined,
        Color: undefined,
        Type: undefined,
        Seats: undefined,
        EngineCapacity: undefined,
        GearType: undefined,
        Description: undefined,
        IdentityNumber: "",
        PlateNumber: "",
        InsuranceNumber: "",
        TrainerNumberPlate: "",
        VehicleId
    });
    useEffect(() => {
        if (VehicleDataA) {
            setVehicleData({ ...VehicleDataA })
            setVehicleImagesState(VehicleDataA?.VehicleImages)
        }
    }, [VehicleDataA])
    const SubmitForm = (e) => SubmitVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate);
    useCheckLogin(true, "Institute", ["Admin", "Staff"]);
    useEffect(() => {
        if (VehicleId)
            Dispatch(GetSingleVehicleA(VehicleId))

    }, [Dispatch, VehicleId])
    console.log(VehicleImagesState)
    return (
        !loading ? <div className='bg-[#F7F7F7] mt-20 flex flex-col items-center ml-0 sm:ml-24 w-full sm:w-[calc(100%-96px)]'>
            <Steps />
            <form className='flex flex-col items-center w-full' onSubmit={SubmitForm}>
                <VehicleInfo
                    setVehicleData={setVehicleData} VehicleData={VehicleData}
                    VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />


                <VehicleImages
                    VehicleImagesState={VehicleImagesState} setVehicleImagesState={setVehicleImagesState}
                    VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />


                <VehicleCredentials
                    setVehicleData={setVehicleData} VehicleData={VehicleData}
                    VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />


                <button type='submit' className='text-base text-white py-[10px] px-5 bg-[#A1A3EF] cursor-pointer mt-10 rounded-xl border-none outline-none'>
                    Save & Continue
                </button>
            </form>
        </div>
            : <h1 className='mt-20'>Loading</h1>
    )
}





function SubmitVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate) {
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
    // if (Object.entries(Errors).length > 0)
    //     return
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
    console.log(VehicleData.Images)

    VehicleFormData.append("VehicleInfo", JSON.stringify(VehicleData));

    Dispatch(UpdateVehicleA(VehicleFormData, Navigate))
}
export default UpdateVehicle