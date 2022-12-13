import React from 'react'

const Packageslist = ({ PackagesData }) => {
    return (
        <div className='flex flex-wrap justify-center flex-col md:flex-row gap-x-14 gap-y-7 py-28 px-2 sm:px-3 w-full lg:w-11/22 2xl:w-4/5'>

            {PackagesData?.map((value) =>
                <div className='flex gap-2 md:gap-4 w-full md:w-[46%] lg:w-2/5 xl:w-[45%] 2xl:w-[47%] '>
                    <span className={`bg-white border-[#E8E8E8] border-[2px] border-solid shadow-[0px_3px_6px_#00000046] rounded-lg px-5 flex items-center w-4/5 min-w-[250px] max-w-[556px]`}
                    >

                        <p className='text-6xs sm:text-3xs md:text-4xs lg:text-2xs xl:text-xs 2xl:text-[24px]'>
                            {value.Package}
                        </p>


                    </span>


                    <button
                        className={`border-none bg-[#A1A3EF] text-white rounded-2xl cursor-pointer
                        text-4xs    sm:text-2xs     md:text-3xs     lg:text-2xs    xl:text-xs     2xl:text-base 
                        py-3        sm:py-[14px]    md:py-2         lg:py-[14px]
                        px-5                        md:px-3         lg:px-5`}
                    >
                        Select
                    </button>

                </div>
            )
            }
        </div>
    )
}

export default Packageslist