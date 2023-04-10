import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAboutInfoA } from '../../../Actions/CourseA'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import MyCourses from '../../../Components/MyCourses/MyCourses'
import SideBar from '../../../Components/SideBar/SideBar'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import { TeacherButtons } from '../../../PageNames'
import ClientInfo from '../CourseProgress (Institute)/Components/ClientInfo'
import CourseProgressIns from '../CourseProgress (Institute)/Components/CourseProgressIns'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'

const TeacgerAboutStudentChild = () => {
    const { EnrollmentId } = useParams();
    const Dispatch = useDispatch()
    const { Student, CoursePackage, CourseProgress, loading } = useSelector(Store => Store.StudentReducer);

    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetAboutInfoA(EnrollmentId))
    }, [Dispatch, EnrollmentId])
    useCheckLogin(true, ["Institute"], ["Instructor"])
    return (
        !loading
            ? <div className='flex justify-start items-center py-16 flex-col px-3 sm:bg-[#F8F8F8] w-full gap-16 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32' >
                <ClientInfo Student={Student} />
                {
                    CoursePackage
                        ? <CourseProgressIns CoursePackage={CoursePackage} CourseProgress={CourseProgress} />
                        : null
                }
            </div>
            : <LoadingSpinner />
    )
}




const TeacgerAboutStudentChildPage = () =>
    <MyCourses ButtonsInfo={TeacherButtons} PageName="AboutStudent" FooterBgColor="bg-[red]" Z_Index="z-10" HideFooter={true}
        Component={TeacgerAboutStudentChild} />



const TeacgerAboutStudent = () =>
    <>
        <SideBar />
        <InstituteTemplate Element={TeacgerAboutStudentChildPage} m_top="mt-0" />
    </>

export default TeacgerAboutStudent