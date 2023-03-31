import React, { useRef } from 'react'
import './CourseCategory.css'
import IntroPart from './Components/IntroPart/IntroPart'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetLicenseTypeCourse, GetVehicleTypeCourse } from '../../Actions/CourseA';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import useGetWishList from '../../Helpers/CustomHooks/useGetWishList';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import CoursesDisplayed from './CoursesDisplayed';
import Filter from './Components/Filter/Filter'

const CourseCategory = () => {
    const { LicenseTypeId, VehicleTypeId } = useParams()
    const Dispatch = useDispatch();


    const { Courses, loading } = useSelector((Store) => Store.CourseReducer)
    useEffect(() => {
        if (LicenseTypeId)
            Dispatch(GetLicenseTypeCourse(LicenseTypeId))
        else if (VehicleTypeId)
            Dispatch(GetVehicleTypeCourse(VehicleTypeId))
    }, [Dispatch, LicenseTypeId, VehicleTypeId])
    const ParentRef = useRef()
    useCheckLogin(true, ["Student", "User"])
    useGetWishList()
    // useEffect(() => {
    //     window.scroll(0, 0)
    // }, [])
    return (

        <div className='mt-20 overflow-hidden' ref={ParentRef}>


            <IntroPart Courses={Courses} />
            <Filter />

            {
                !loading ?
                    <>
                        <CoursesDisplayed />
                        <Footer />
                    </>
                    :
                    <LoadingSpinner Height="[85vh]" Width="[99%]" Top="20" Left="0" />
            }

        </div>

    )
}

export default CourseCategory
