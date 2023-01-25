import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DropDown from './Components/DropDown'
import ErrorIndicator from './Components/ErrorIndicator'
import { CarsDropDownArr, ColorsDropDownArr, EngineCapacityDropDownArr, GearTypeDropDownArr, MakersDropDownArr, SeatsDropDownArr, TypesDropDownArr, YearsDropDownArr } from './VehicleInfoComps/DropDownArrs'
import RichTextEditor from './VehicleInfoComps/RichTextEditor'

const VehicleInfo = ({ VehicleData, setVehicleData, VehicleErrors, setVehicleErrors }) => {
    let TextStyle = `font-normal whitespace-nowrap w-[30%] max-w-[200px]
                    sm:text-5xs     lg:text-4xs      xl:text-3xs
        hidden      sm:inline-block`

    let DivStyle = `flex w-full justify-center sm:justify-start
                    sm:gap-14   md:gap-16   lg:gap-20   xl:gap-24   2xl:gap-28`;
    const [VehicleInfoState, setVehicleInfoState] = useState({
    })
    useEffect(() => {
        setVehicleData({ ...VehicleData, ...VehicleInfoState })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [VehicleInfoState])

    const OnChange = (Content, KeyName, errs) => {
        setVehicleInfoState({ ...VehicleInfoState, [KeyName]: Content })
        if (Content.toString() !== "" && KeyName !== "Description") 
            setVehicleErrors({ ...VehicleErrors, [KeyName]: false })
        
    }
    return (
        <div className='sm:bg-white w-11/12 mt-8 flex flex-col items-center sm:items-start sm:px-14 gap-10 py-6'>
            <h2 className='font-normal text-[#707070] text-3xs md:text-2xs xl:text-sm Boldfont'>Car Information</h2>
            <div className={`flex flex-col gap-7
                            w-full          sm:w-11/12
                            items-center    sm:items-start 
                            ml-4            sm:ml-5         md:ml-6         lg:ml-8     xl:ml-9     2xl:ml-10`}>

                <div className={DivStyle}>
                    <h4 className={TextStyle}>Manufacturer</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Manufacturer} />
                        <DropDown DropDownOptions={MakersDropDownArr} Label="Select a company" Name="Manufacturers"
                            StateValue={VehicleInfoState.Manufacturer}
                            onChange={(e) => OnChange(e.value, "Manufacturer")} />
                    </span>
                </div>

                <div className={DivStyle}>
                    <h4 className={TextStyle}>Model</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Model} />
                        <DropDown DropDownOptions={CarsDropDownArr} Label="Select a Model" Name="Model"
                            StateValue={VehicleInfoState.Model}
                            onChange={(e) => OnChange(e.value, "Model")} />
                    </span>

                </div>


                <div className={DivStyle}>
                    <h4 className={TextStyle} >Year</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Year} />
                        <DropDown DropDownOptions={YearsDropDownArr} Label="Select Year" Name="Year"
                            StateValue={VehicleInfoState.Year}
                            onChange={(e) => OnChange(e.value, "Year")} />
                    </span>

                </div>

                <div className={DivStyle}>
                    <h4 className={TextStyle}>Color</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Color} />
                        <DropDown DropDownOptions={ColorsDropDownArr} Label="Select Color" Name="Color"
                            StateValue={VehicleInfoState.Color}
                            onChange={(e) => OnChange(e.value, "Color")} />
                    </span>

                </div>
                <div className={DivStyle}>
                    <h4 className={TextStyle}>Type</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Type} />
                        <DropDown DropDownOptions={TypesDropDownArr} Label="Select Type" Name="Type"
                            StateValue={VehicleInfoState.Type}
                            onChange={(e) => OnChange(e.value, "Type")} />
                    </span>


                </div>
                <div className={DivStyle}>
                    <h4 className={TextStyle} >Seats</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.Seats} />
                        <DropDown DropDownOptions={SeatsDropDownArr} Label="Select no. of  Seats" Name="Seat"
                            StateValue={VehicleInfoState.Seats}
                            onChange={(e) => OnChange(e.value, "Seats")} />
                    </span>

                </div>
                <div className={DivStyle}>
                    <h4 className={TextStyle} >Engine Capacity</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.EngineCapacity} />
                        <DropDown DropDownOptions={EngineCapacityDropDownArr} Label="Select Engine capacity" Name="EngineCapacity"
                            StateValue={VehicleInfoState.EngineCapacity}
                            onChange={(e) => OnChange(e.value, "EngineCapacity")} />
                    </span>

                </div>
                <div className={DivStyle}>
                    <h4 className={TextStyle} >Gear Type</h4>
                    <span className='w-11/12 sm:w-2/3 relative max-w-[450px]'>
                        <ErrorIndicator Error={VehicleErrors?.GearType} />
                        <DropDown DropDownOptions={GearTypeDropDownArr} Label="Select Gear Type" Name="GearType"
                            StateValue={VehicleInfoState.GearType}
                            onChange={(e) => OnChange(e.value, "GearType")} />
                    </span>

                </div>
                <div className={`${DivStyle}`}>
                    <p className={TextStyle}>Description</p>
                    <span className='w-11/12 sm:w-2/3  max-w-[800px] relative'>
                        <ErrorIndicator Error={VehicleErrors?.Description} />
                        <RichTextEditor OnChange={OnChange} VehicleErrors={VehicleErrors}  setVehicleErrors={setVehicleErrors} />
                    </span>
                </div>
            </div>



        </div>
    )
}


export default VehicleInfo