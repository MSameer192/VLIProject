import React from 'react'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import Steps from './Components/Steps'
import './AddVehicle.css'
import VehicleInfo from './Components/VehicleInfo'
import VehicleImages from './Components/VehicleImages'
import VehicleCredentials from './Components/VehicleCredentials'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleVehicleA } from '../../../Actions/VehicleA'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SubmitUpdateVehicleForm } from './Helpers/OnSubmit'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'

const UpdateVehicleChild = () => {
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
    useEffect(() => {
        if (VehicleId)
            Dispatch(GetSingleVehicleA(VehicleId))

    }, [Dispatch, VehicleId])
    useCheckLogin(true, ["Institute"], ["Admin", "Staff"]);

    const SubmitForm = (e) => SubmitUpdateVehicleForm(e, VehicleData, VehicleImagesState, VehicleErrors, setVehicleErrors, Dispatch, Navigate);
    return (
        !loading ? <div className='bg-[#F7F7F7] flex flex-col items-center w-full py-10'>
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
            : <LoadingSpinner />
    )
}



const UpdatedVehicle = () => {
    return (
        <InstituteTemplate Element={UpdateVehicleChild}  />
    )
}




export default UpdatedVehicle