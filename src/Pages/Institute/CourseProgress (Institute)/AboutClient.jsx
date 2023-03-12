import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetAboutInfoA } from '../../../Actions/CourseA';
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate';
import MyCourses from '../../../Components/MyCourses/MyCourses';
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin';
import { InsEnrolledCourseButtons } from '../../../PageNames';
import ClientInfo from './Components/ClientInfo';
import CourseProgressIns from './Components/CourseProgressIns';

const AboutClientChild = () => {
    const { EnrollmentId } = useParams();
    const Dispatch = useDispatch();
    const { Student, CoursePackage, CourseProgress } = useSelector(Store => Store.StudentReducer);

    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetAboutInfoA(EnrollmentId))
    }, [Dispatch, EnrollmentId])
    useCheckLogin(false, ["Institute"], ["Staff", "Admin","Instructor"])
    return (
        <div className='flex justify-start items-center py-16 flex-col px-3 sm:bg-[#F8F8F8] w-full gap-16 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32'>
            <ClientInfo Student={Student} />
            {CoursePackage ? <CourseProgressIns CoursePackage={CoursePackage} CourseProgress={CourseProgress} /> : null}
        </div>
    )
}
const AboutClientPage = () => <MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="AboutClient" Component={AboutClientChild } />

const AboutClient = () => <InstituteTemplate Element={AboutClientPage} m_top="mt-0" />



export default AboutClient