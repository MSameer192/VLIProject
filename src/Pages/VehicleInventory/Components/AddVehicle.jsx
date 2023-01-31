import React from 'react'
import { Link } from 'react-router-dom'


const AddVehicle = () => {

    return (
        <div className='w-5/6 sm:w-full md:w-11/12 max-w-[400px] p-5 bg-white shadow-[4px_3px_5px_#00000017]'>

            <h4 className='text-4xs font-normal'>Add a New Vehicle</h4>
            <p className='text-6xs mt-6'>
                Want to add a new vehicle in to the inventory? Click Add a new vehicle.
            </p>

            <div className='flex w-full justify-end items-center gap-2 mt-3 whitespace-nowrap'>
                ADD VEHICLE
                <Link className='flex justify-center items-center w-fit cursor-pointer rounded-full shadow-[4px_6px_12px_#4e373a87]' to="/vehicle/add">
                    <img className='p-3' src={require('../Assets/Add.svg').default} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default AddVehicle