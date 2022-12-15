import React from 'react'

const ContinuesWith = ({ ButtonStyle, h4Style, ContinueHeading }) => {
    return (
        <div className='flex flex-col gap-[6px] md:gap-3 xl:gap-[18px] w-full '>
            <h4 className='font-normal text-4xs md:text-base xl:text-[30px] text-center md:text-left text-white md:text-black'>
                {ContinueHeading}
            </h4>
            <div className='flex flex-row md:flex-col gap-3 xl:gap-[18px] w-full justify-center md:justify-start'>
                <button className={`${ButtonStyle} border-none md:border-solid bg-[#ff000000] md:bg-white   w-auto md:w-full `}>
                    <picture>
                        <source media="(min-width:768px)" srcset={require("../../Assets/Google Icon.png")} />
                        <img
                            className='w-9 md:w-7 xl:w-10'
                            src={require("../../Assets/Google Icon @mobile.png")} alt="" />
                    </picture>
                    <h5 className={`${h4Style} hidden md:inline-block`}>Continue With Google</h5>
                </button>
                <button className={`${ButtonStyle} border-none md:border-solid bg-[#ff000000] md:bg-white   w-auto md:w-full `}>

                    <picture>
                        <source media="(min-width:768)" srcset={require("../../Assets/Facebook Icon.png")} />
                        <img
                            className='w-9 md:w-7 xl:w-10'
                            src={require("../../Assets/Facebook Icon @mobile.png")} alt="" />
                    </picture>
                    <h5 className={`${h4Style} hidden md:inline-block`}>Continue With Facebook</h5>
                </button>
            </div>

        </div>
    )
}

export default ContinuesWith