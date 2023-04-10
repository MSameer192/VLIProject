import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAdminCoursesA } from '../../../Actions/CourseA'

import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import NoDataResponse from '../../../Components/NoDataResponse'
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
                {AdminCourses?.length > 0 ? AdminCourses?.map((value) => {
                    const Added = value?.InstituteCourse?.[0]?.InstituteFK
                    const OnClick = (e) => {
                        if (!Added) {
                            setCoursePK(value.CoursePK)
                            setPopup(true)
                            e.stopPropagation()
                        }
                    }

                    return <CourseComp key={value.CoursePK}
                        CourseFK={value.CoursePK}
                        VehicleType={value?.VehicleType?.VehicleTypeName}
                        LicenseType={value?.LicenseType?.LicenseTypeName}
                        CourseName={value.CourseName}
                        Description={value.Description}
                        Added={Added}
                        Image={value.CourseThumbnail}
                        OnClick={OnClick}
                    />
                })
                    : <div className='flex justify-center items-center min-h-[70vh] w-[calc(100%_-_80px)]'>
                        <NoDataResponse topText="No Course found" bottomText="VlI admin will add course tamplates for you" />
                    </div>

                }

            </div>
            : <LoadingSpinner />
    )
}
const RecommendCourse = () => <InstituteTemplate Element={RecommendCourseChild} m_top="mt-28" />

export default RecommendCourse