import React from 'react'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import Steps from './Components/Steps'
import './AddVehicle.css'
import VehicleInfo from './Components/VehicleInfo'
import VehicleImages from './Components/VehicleImages'
import VehicleCredentials from './Components/VehicleCredentials'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import { SubmitAddVehicleForm } from './Helpers/OnSubmit'
const AddVehicleChild = () => {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const { loading } = useSelector((Store) => Store.VehicleReducer)
    const [VehicleErrors, setVehicleErrors] = useState({ Description: false })
    const [VehicleImagesState, setVehicleImagesState] = useState([]);
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


    const SubmitForm = (e) => SubmitAddVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate);
    useCheckLogin(true, ["Institute"], ["Admin", "Staff"]);

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

const AddVehicle = () => {
    return (
        <InstituteTemplate Element={AddVehicleChild} />
    )
}

export default AddVehicle