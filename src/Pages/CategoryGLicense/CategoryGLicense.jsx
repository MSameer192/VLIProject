import React from 'react'
import './CategoryGLicense.css'
import IntroPart from './1.IntroPart/IntroPart'
import ClassG1Licensing from './2.ClassG1Licensing/ClassG1Licensing'
import Stats from './3.Stats/Stats';
import ClassG2Licensing from './4.ClassG2Licensing/ClassG2Licensing'
import ClassGLicensing from './5.ClassGLicensing/ClassGLicensing'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetLicenseTypeCourse } from '../../Actions/CourseA';
import FIlter from './FIlter';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import useGetWishList from '../../Helpers/CustomHooks/useGetWishList';
const CategoryGLicense = () => {
    const { LicenseTypeId } = useParams()
    const Dispatch = useDispatch();


    const { Courses, loading } = useSelector((Store) => Store.CourseReducer)
    useEffect(() => {
        Dispatch(GetLicenseTypeCourse(LicenseTypeId))
    }, [Dispatch, LicenseTypeId])

    useCheckLogin(false, "Student")
    useGetWishList()

    return (

        <div className='mt-20 overflow-hidden'>

            <IntroPart Courses={Courses} />
            <FIlter />

            {
                !loading ?
                    !Courses?.SubLicenseType?.length || Courses?.SubLicenseType?.length === 0
                        ? <ClassG1Licensing LicenseType={Courses} />

                        :

                        Courses?.SubLicenseType?.map((SubLicenseType, index) => {

                            if (index === 0)
                                return <ClassG1Licensing LicenseType={SubLicenseType} />


                            if (index === 1) {
                                let NextSubLicenseType
                                if (Courses?.SubLicenseType?.length > 2) NextSubLicenseType = Courses?.SubLicenseType[index + 1]

                                else NextSubLicenseType = undefined


                                return <>
                                    <Stats />
                                    <ClassG2Licensing LicenseType={SubLicenseType} NextSubLicenseType={NextSubLicenseType} />
                                </>
                            }


                            if (index === 2)
                                return <ClassGLicensing LicenseType={SubLicenseType} />

                            return <ClassG1Licensing LicenseType={SubLicenseType} />
                        })

                    : null
            }


            <Footer />
        </div>

    )
}

export default CategoryGLicense
