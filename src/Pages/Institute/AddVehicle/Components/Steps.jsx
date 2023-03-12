import React from 'react'

const DetailsArr = ["Add Vehicle Information", "Add vehicle credentials", " Add images of the vehicle"]

const Steps = () => {
    return (
        <div className={`sm:bg-white w-11/12 flex flex-col mt-7 h-fit 
                        pb-4    sm:pb-6     md:pb-8     lg:pb-10    xl:pb-12    2xl:pb-14
                        gap-3   sm:gap-4    md:gap-6    lg:gap-8    xl:gap-12   2xl:gap-14
                        pt-3`}
        >
            <h2 className='font-normal text-[#707070] text-center text-3xs sm:text-2xs lg:text-xs xl:text-sm'>Add a New Vehicle In Inventory</h2>
            <div className='flex justify-around px-5 gap-7'>
                {
                    DetailsArr.map((value, index) => <Step key={index + "z"} index={++index} Detail={value} />)
                }

            </div>
        </div>
    )
}
function Step({ index, Detail }) {
    return <div className='flex items-center gap-4 flex-col sm:flex-row '>
        <span className={`flex rounded-full items-center justify-center
                        p-3 lg:p-5
                        CarIconShadow`}>
            <img className='w-6 sm:w-8 md:w-8 lg:w-10 xl:w-12 2xl:w-14' src={require('../Assets/Car.svg').default} alt="" />
        </span>
        <p className={`text-[#707070] 
                        text-7xs sm:text-6xs md:text-5xs xl:text-4xs
                        text-center sm:text-left`}><b>Step {index}.</b>  {Detail} </p>
    </div>
}
export default Steps