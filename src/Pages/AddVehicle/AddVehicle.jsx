import React from 'react'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin'
import Steps from './Components/Steps'
import './AddVehicle.css'
import VehicleInfo from './Components/VehicleInfo'
import VehicleImages from './Components/VehicleImages'
import VehicleCredentials from './Components/VehicleCredentials'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddVehicleA } from '../../Actions/VehicleA'
import { useNavigate } from 'react-router-dom'
const AddVehicle = () => {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const { loading } = useSelector((Store) => Store.VehicleReducer)
    const [VehicleErrors, setVehicleErrors] = useState({ Description: false })
    const [VehicleImagesState, setVehicleImagesState] = useState({
        Image1: undefined
    });
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
        IdentityNumber: undefined,
        PlateNumber: undefined,
        InsuranceNumber: undefined,
        TrainerNumberPlate: undefined
    });

    const SubmitForm = (e) => SubmitVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate);
    useCheckLogin(true, "Institute", ["Admin", "Staff"]);

    return (
        !loading ? <div className='bg-[#F7F7F7] mt-20 flex flex-col items-center w-full'>
            <Steps />
            <form className='flex flex-col items-center w-full' onSubmit={SubmitForm}>
                <VehicleInfo setVehicleData={setVehicleData} VehicleData={VehicleData} VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />
                <VehicleImages VehicleImagesState={VehicleImagesState} setVehicleImagesState={setVehicleImagesState} VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />
                <VehicleCredentials setVehicleData={setVehicleData} VehicleData={VehicleData} VehicleErrors={VehicleErrors} setVehicleErrors={setVehicleErrors} />
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
    for (let [key, value] of Object.entries(VehicleImagesState)) {
        if (!value) Errors[key] = true
        else delete Errors[key]
    }
    setVehicleErrors({ ...VehicleErrors, ...Errors })
    if (Object.entries(Errors).length > 0)
        return
    // if (VehicleData.Description > 500) {

    // }


    VehicleFormData.append("VehicleInfo", JSON.stringify(VehicleData));
    for (let [key, value] of Object.entries(VehicleImagesState)) {
        VehicleFormData.append(key, value);
    }

    Dispatch(AddVehicleA(VehicleFormData, Navigate))
}
export default AddVehicle