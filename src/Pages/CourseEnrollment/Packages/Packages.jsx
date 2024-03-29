import React, { useState, useEffect } from 'react'


import { useSelector } from 'react-redux';

import Packageslist from './Packageslist'

const Packages = ({ setEnrollmentData, EnrollmentData, PackageRef, Err, setErr }) => {
    const [PackagesArr, setPackagesArr] = useState();
    const { EnrollCourseInfo } = useSelector((Store) => Store.CourseReducer)

    useEffect(() => {
        setPackagesArr(EnrollCourseInfo?.CoursePackages)
    }, [EnrollCourseInfo])

    return (
        <div className='flex flex-col items-center'
            ref={PackageRef}
            id='Package'>
            <div className='flex flex-col items-center gap-5 w-full bg-[#F6F5F5] pt-9 pb-14 h-fit'>
                <img className='w-24' src={require('./Assets/SelectPackageIcon.svg').default} alt="" />
                <h1 className={`text-center px-2 SemiBoldItalic text-black h-fit m-0
                                text-xs sm:text-base    md:text-lg              xl:text-[38px]`}>
                    Select a Package That suits you best
                </h1>
                <h3 className={`text-center font-normal
                                text-3xs                md:text-2xs lg:text-xs  xl:text-base`}>
                    Our prices are given below:
                </h3>
                <h4 className='font-normal text-[red]'>{Err?.Package ? Err?.Package : null}</h4>
            </div>

            <Packageslist PackagesArr={PackagesArr} setEnrollmentData={setEnrollmentData} EnrollmentData={EnrollmentData}
                setErr={setErr} Err={Err}
            />
        </div>
    )
}

export default Packages