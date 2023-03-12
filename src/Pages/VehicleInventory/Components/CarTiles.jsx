import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../../Actions/Base'

const CarTiles = ({ Vehicle }) => {
    const PRef = useRef();
    const [DescText, setDescText] = useState();

    useEffect(() => {
        if (Vehicle?.Description)
            PRef.current.innerHTML = Vehicle?.Description
    }, [Vehicle?.Description])
  
    useEffect(() => {
        if (PRef.current?.innerText)
            setDescText(PRef.current?.innerText)
    }, [])

    useEffect(() => {
        if (DescText?.length > 100) {
            setDescText(DescText.split("").slice(0, 97).join("")+"...")
        }
    }, [DescText])
 
    return (
        <div className={`flex flex-col bg-white max-w-[275px] px-2 py-5 rounded-xl gap-2 items-center justify-center shadow-[6px_12px_24px_#00000014] max-h-[460px]
        w-full md:w-2/5 lg:w-1/2 xl:w-1/3
        `}>

            <div ref={PRef} className="hidden"></div>
            <span className='flex w-full h-[200px] max-h-[200px] overflow-hidden justify-center items-center'>
                <img className='w-full'
                    src={`${BaseUrl}/api/Vehicleimage?url=${Vehicle?.VehicleImages[0]?.VehicleImageLink}`} alt="" />
            </span>
            <div className='flex justify-between text-[#45454D] items-center CarTilesBorder py-3 w-full  '>
                <h3 className='font-normal text-3xs '>{Vehicle?.Model}</h3>
                <h4 className='font-normal text-6xs'>{Vehicle?.Year}</h4>
            </div>
            <div className='flex justify-center items-center gap-2 py-2 w-full h-8 CarTilesBorder'>
                <img className=' w-5' src={require('../Assets/Address Card.svg').default} alt="" />
                <h4 className='font-normal text-6xs text-[#45454D]'>{Vehicle?.PlateNumber}</h4>
            </div>

            <div className='w-full h-16 py-1 CarTilesBorder overflow-hidden'>
                <p className='text-6xs text-center text-[#45454D] break-words'>
                    {DescText}
                </p>
            </div>

            <Link type='button'
                to={`/vehicle/update/${Vehicle.VehicleId}`}
                className='bg-[#A1A3EF] border-none outline-none rounded-xl text-6xs w-fit px-7 py-2 text-white cursor-pointer no-underline'>
                Edit Vehicle
            </Link>
        </div>

    )
}

export default CarTiles