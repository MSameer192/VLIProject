import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAdminCoursesA } from '../../../Actions/CourseA'

import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import { CourseComp } from '../../AddCourse/Components/vehicalInventory/components/CoursesInventory'
import RecommendCoursePopup from './RecommendCoursePopup'

const RecommendCourseChild = () => {

    const Dispatch = useDispatch();
    const [CoursePK, setCoursePK] = useState()
    const [Popup, setPopup] = useState()
    const { AdminCourses, loading } = useSelector(Store => Store.CourseReducer)
    useEffect(() => {
        Dispatch(GetAdminCoursesA())
    }, [Dispatch])
    useCheckLogin(true, ['Institute'], ["Admin"])

    return (
        !loading ?
            <div className='flex flex-wrap relative'
                onClick={e => e.stopPropagation()}>
                {Popup ? <RecommendCoursePopup CoursePK={CoursePK} setPopup={setPopup} /> : null}
                {AdminCourses?.map((value) => {

                    const OnClick = (e) => {
                        setCoursePK(value.CoursePK)
                        setPopup(true)
                        e.stopPropagation()
                    }
                    return <CourseComp key={value.CoursePK}
                        CourseFK={value.CoursePK}
                        VehicleType={value?.VehicleType?.VehicleTypeName}
                        LicenseType={value?.LicenseType?.LicenseTypeName}
                        CourseName={value.CourseName}
                        Description={value.Description}
                        OnClick={OnClick}
                    />
                })}

            </div>
            : <LoadingSpinner />
    )
}
const RecommendCourse = () => <InstituteTemplate Element={RecommendCourseChild} m_top="mt-28" />

export default RecommendCourse