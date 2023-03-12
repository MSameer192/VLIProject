// react States
import React, { Component, useEffect, useRef, useState } from "react";

// Images
import idCardIcon from "../Assets/idCardIcon.png";
import addCourseVehical1 from "../Assets/addCourseVehical1.png";




import { GetVehicleA } from "../../../../../Actions/VehicleA";
import { useDispatch, useSelector } from "react-redux";

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
                        ? Vehicles?.map(value =>
                            <VehicleTile
                                key={value.VehicleId}
                                AddVehicle={AddVehicle} Model={value.Model}
                                Year={value.Year} PlateNumber={value.PlateNumber}
                                Description={value.Description} VehicleId={value.VehicleId} />)
                        : null
                }

            </div>
        </div>
    )
}

const VehicleTile = ({ AddVehicle, Model, Year, PlateNumber, Description, VehicleId }) => {
    const PRef = useRef()
    const [DescText, setDescText] = useState();
    useEffect(() => {
        PRef.current.innerHTML = Description
    }, [Description])
    useEffect(() => {
        if (PRef.current?.innerText)
            setDescText(PRef.current?.innerText)
    }, [])
 
    return <div className="col-3" >
        <div ref={PRef} className="hidden"></div>
        <div className="vehicalBox">
            <div className="vehicalImgConainer">
                <center>
                    <img src={addCourseVehical1} alt="addCourseVehical1" />
                </center>
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
                <button className="vehicalSelectBtn cursor-pointer" type="button" onClick={() => AddVehicle(VehicleId)}>
                    Select Vehicle
                </button> 
            </center>
        </div>
    </div>
}
export default VehicleDetailTiles;
