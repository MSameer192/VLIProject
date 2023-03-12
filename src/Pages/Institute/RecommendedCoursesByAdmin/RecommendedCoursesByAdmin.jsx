import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../../Actions/Base';
import { GetRecommendedAdminCoursesA } from '../../../Actions/CourseA';
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate';
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin';
import { CourseComp } from '../../AddCourse/Components/vehicalInventory/components/CoursesInventory';
import Filters from '../../AddCourse/Components/vehicalInventory/components/VehicleFilter/Filters';
import './RecommendedCoursesByAdmin.css'

const RecommendedCoursesByAdminChild = () => {
    const { AdminCourses } = useSelector(Store => Store.CourseReducer)
    const Dispatch = useDispatch();

    const Navigate = useNavigate()

    useEffect(() => {
        Dispatch(GetRecommendedAdminCoursesA())
    }, [Dispatch])

    useCheckLogin(true, ["Institute"], ["Staff"])

    
    return (
        <div className='flex pt-8'>
            <div className="w-full md:w-4/5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
             onClick={e => e.stopPropagation()}>
                <h2 className='text-xs text-[#505050] Boldfont'
                 onClick={e => e.stopPropagation()}>Courses recommended by admin</h2>

                <div className='flex flex-wrap relative w-full items-center justify-center sm:justify-start'
                    onClick={e => e.stopPropagation()}>

                    {AdminCourses?.map((value) => {
                        const OnClick = (e) => {
                            e.stopPropagation();
                            Navigate('/addcourse', { state: { CoursePK: value.CoursePK } })
                        }
                        return <CourseComp key={value.CoursePK}
                            CourseFK={value?.CoursePK}
                            VehicleType={value?.VehicleType?.VehicleTypeName}
                            LicenseType={value?.LicenseType?.LicenseTypeName}
                            CourseName={value?.CourseName}
                            Description={value?.Description}
                            OnClick={OnClick}
                        />
                    })}
                    
                </div>
            </div>
            <Filters />
        </div>
    )
}



const RecommendedCoursesByAdmin = () => <InstituteTemplate Element={RecommendedCoursesByAdminChild}  
bg={"bg-[#F7F7F7] min-h-screen"} />

export default RecommendedCoursesByAdmin