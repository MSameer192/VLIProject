import React from 'react'
import Packageslist from './Packageslist'

const Packages = () => {
    let PackagesData = [
        { Package: "10 Hours Driving Only-$450+GST" },
        { Package: "10 Hours Driving Only-$450+GST" },
        { Package: "10 Hours Driving + 15 Hours Online-$545+GST" },
        { Package: "10 Hours Driving + 15 Hours Online-$545+GST" },
        { Package: "10 Hours Driving Only-$450+GST" },
        { Package: "10 Hours Driving Only-$450+GST" },
        { Package: "10 Hours Driving + 15 Hours Online-$545+GST" },
        { Package: "10 Hours Driving + 15 Hours Online-$545+GST" },
        { Package: "20 Hours Driving + 15 Hours Online-$1070+GST" },
        { Package: "20 Hours Driving + 15 Hours Online-$1070+GST" }
    ]
    return (
        <div className='flex flex-col items-center'>
            <div className=' flex flex-col items-center gap-5 w-full bg-[#F6F5F5] pt-9 pb-14'>
                <img className='w-24' src={require('./Assets/SelectPackageIcon.svg').default} alt="" />
                <h1 className={`text-center px-2 SemiBoldItalic
                                text-xs sm:text-base    md:text-lg              xl:text-[38px]`}>
                    Select a Package That suits you best
                </h1>
                <h3 className={`text-center font-normal
                                text-3xs                md:text-2xs lg:text-xs  xl:text-base`}>
                    Our prices are given below:
                </h3>
            </div>

            <Packageslist PackagesData={PackagesData} />
        </div>
    )
}

export default Packages