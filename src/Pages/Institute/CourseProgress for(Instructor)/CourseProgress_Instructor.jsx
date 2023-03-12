import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetAboutInfoA } from '../../../Actions/CourseA';
import MyCourses from '../../../Components/MyCourses/MyCourses';
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin';
import { TeacherButtons } from '../../../PageNames';
import CourseProgressIns from '../CourseProgress (Institute)/Components/CourseProgressIns';

const CourseProgressChild = () => {
    const { EnrollmentId } = useParams();
    const Dispatch = useDispatch();
    const { CoursePackage, CourseProgress } = useSelector(Store => Store.StudentReducer);

    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetAboutInfoA(EnrollmentId))
    }, [Dispatch, EnrollmentId])
    useCheckLogin(false, ["Institute"], ["Staff", "Admin", "Instructor"])
    return (
        <div className='flex justify-start items-center py-16 flex-col px-3 sm:bg-[#F8F8F8] w-full gap-16 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32'>

            {CoursePackage ? <CourseProgressIns CoursePackage={CoursePackage} CourseProgress={CourseProgress} /> : null}
        </div>
    )
}
const CourseProgressInstructor = () => <MyCourses ButtonsInfo={TeacherButtons} PageName="CourseProgress" Component={CourseProgressChild} />





export default CourseProgressInstructor