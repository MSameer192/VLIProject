import React from 'react'
import DropDownOption from '../Components/DropDownOption';
import { cars, Colors, EngineCapacity, GearType, Seats, Types, years } from './Arrs';

export const RemoveSpaces = (value) => value?.toString()?.replace(/\s/g, "")

const MakersDropDownArr = ({ Name, onChange, StateValue }) => {
    var Manufacturers = ["Toyota", "Ford", "Volkswagen", "Honda", "Nissan", "BMW", "Mercedes-Benz", "General Motors", "Hyundai", "Kia",
        "Fiat", "Peugeot", "Renault", "Audi", "Porsche", "Jaguar", "Land Rover", "Maserati", "Lamborghini", "Bentley",
        "Rolls-Royce", "Bugatti", "McLaren", "Tesla", "Dodge", "Chrysler", "Jeep", "GMC", "Ram"];

    return (
        Manufacturers.map((value) =>
            <DropDownOption key={value} ID={value} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
        )
    )
}
const CarsDropDownArr = ({ Name, onChange, StateValue }) => {

    return cars.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
    )
}
const YearsDropDownArr = ({ Name, onChange, StateValue }) => {

    return years.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />
    )
}

const ColorsDropDownArr = ({ Name, onChange, StateValue }) =>
    Colors.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />)


const TypesDropDownArr = ({ Name, onChange, StateValue }) =>
    Types.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />)


const SeatsDropDownArr = ({ Name, onChange, StateValue }) =>
    Seats.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />)



const EngineCapacityDropDownArr = ({ Name, onChange, StateValue }) =>
    EngineCapacity.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />)


const GearTypeDropDownArr = ({ Name, onChange, StateValue }) =>
    GearType.map((value) =>
        <DropDownOption key={value} ID={RemoveSpaces(value)} Text={value} Name={Name} onChange={onChange} StateValue={StateValue} />)


export { MakersDropDownArr, CarsDropDownArr, YearsDropDownArr, ColorsDropDownArr, TypesDropDownArr, SeatsDropDownArr, EngineCapacityDropDownArr, GearTypeDropDownArr }