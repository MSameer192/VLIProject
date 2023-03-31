// react States
import React, { Component, useEffect, useRef, useState } from "react";

// Images
import idCardIcon from "../Assets/idCardIcon.png";



import { GetVehicleA } from "../../../../../Actions/VehicleA";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../../../../../Actions/Base";

const VehicleDetailTiles = ({ CourseData, setCourseData, setSteps }) => {

    const Dispatch = useDispatch();
    const { Vehicles } = useSelector(Store => Store.VehicleReducer)
    useEffect(() => {
        Dispatch(GetVehicleA())
    }, [Dispatch])


    const AddVehicle = (VehicleId) => {
        setCourseData({ ...CourseData, VehicleFK: VehicleId })
        setSteps(5)
    }
    return (
        <div className="addCourse3Main">
            <div className="row">
                {
                    Vehicles?.length > 0
                        ? Vehicles?.map(value => {
                            console.log(value)
                            return <VehicleTile
                                key={value.VehicleId}
                                Image={value.VehicleImages?.[0]?.VehicleImageLink}
                                OnClick={AddVehicle}
                                Model={value.Model}
                                Year={value.Year}
                                PlateNumber={value.PlateNumber}
                                Description={value.Description}
                                VehicleId={value.VehicleId} />
                        })
                        : null
                }

            </div>
        </div>
    )
}

const VehicleTile = ({ OnClick, Model, Year, PlateNumber, Description, VehicleId, Image }) => {
    const PRef = useRef()
    const [DescText, setDescText] = useState();
    useEffect(() => {
        PRef.current.innerHTML = Description
    }, [Description])
    useEffect(() => {
        if (PRef.current?.innerText)
            setDescText(PRef.current?.innerText)
    }, [])
    console.log(`${BaseUrl}/api/Vehicleimage?url=${Image}`, Image)
    return <div className="col-3" >
        <div ref={PRef} className="hidden"></div>
        <div className="vehicalBox">
            <div className="vehicalImgConainer">
                <div className="flex items-center justify-center overflow-hidden h-[240px]">
                    <img src={`${BaseUrl}/api/Vehicleimage?url=${Image}`} alt="Vehicle" />
                </div>
            </div>
            <span className="vehicalDetail">
                <span className="vehicalName">{Model}</span>
                <span className="vehicalModel">{Year}</span>
            </span>
            <hr className="vehicalHr" />
            <center>
                <span className="idCardSection"><img src={idCardIcon} alt="idCardIcon" /> <span>{PlateNumber}</span></span>
            </center>
            <hr className="vehicalHr" />
            <p className="discOfVehical h-14 ">{DescText}</p>
            <hr className="vehicalHr" />
            <center>
                <button className="vehicalSelectBtn cursor-pointer" type="button" onClick={() => OnClick(VehicleId)}>
                    Select Vehicle
                </button>
            </center>
        </div>
    </div>
}
export default VehicleDetailTiles;
