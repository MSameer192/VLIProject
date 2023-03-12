import React from 'react'
import './CourseCategory.css'
import IntroPart from './1.IntroPart/IntroPart'
import ClassG1Licensing from './2.ClassG1Licensing/ClassG1Licensing'
import Stats from './3.Stats/Stats';
import ClassG2Licensing from './4.ClassG2Licensing/ClassG2Licensing'
import ClassGLicensing from './5.ClassGLicensing/ClassGLicensing'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetLicenseTypeCourse, GetVehicleTypeCourse } from '../../Actions/CourseA';
import Filter from './FIlter';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import useGetWishList from '../../Helpers/CustomHooks/useGetWishList';

const CourseCategory = () => {
    const { LicenseTypeId, VehicleTypeId } = useParams()
    const Dispatch = useDispatch();


    const { Courses, loading } = useSelector((Store) => Store.CourseReducer)
    useEffect(() => {
        if (LicenseTypeId)
            Dispatch(GetLicenseTypeCourse(LicenseTypeId))
        else if (VehicleTypeId)
            Dispatch(GetVehicleTypeCourse(VehicleTypeId))
    }, [Dispatch, LicenseTypeId,VehicleTypeId])

    useCheckLogin(false, ["Student"])
    useGetWishList()

    return (

        <div className='mt-20 overflow-hidden'>

            <IntroPart Courses={Courses} />
            <Filter />
 
            {
                !loading ?
                    LicenseTypeId
                        ? !Courses?.SubLicenseTypes?.length || Courses?.SubLicenseTypes?.length === 0
                            ? <ClassG1Licensing Type={Courses} />

                            : Courses?.SubLicenseTypes?.map((SubLicenseType, index) => {

                                if (index === 0)
                                    return <ClassG1Licensing Type={SubLicenseType} />


                                if (index === 1) {
                                    let NextSubLicenseType
                                    if (Courses?.SubLicenseTypes?.length > 2) NextSubLicenseType = Courses?.SubLicenseTypes[index + 1]

                                    else NextSubLicenseType = undefined


                                    return <>
                                        <Stats />
                                        <ClassG2Licensing LicenseType={SubLicenseType} NextSubLicenseType={NextSubLicenseType} />
                                    </>
                                }


                                if (index === 2)
                                    return <ClassGLicensing LicenseType={SubLicenseType} />

                                return <ClassG1Licensing Type={SubLicenseType} />
                            })

                        : VehicleTypeId
                            ? <ClassG1Licensing Type={Courses} />
                            : null
                    : null
            }


            <Footer />
        </div>

    )
}

export default CourseCategory
