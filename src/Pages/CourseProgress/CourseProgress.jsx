import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetCourseProgress } from '../../Actions/CourseA';
import CoursesProgresReport from '../../Components/CourseProgressReport/CoursesProgresReport';
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';

const CourseProgress = () => {
    const Dispatch = useDispatch();
    const { EnrollmentId } = useParams();

    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer)
    const { CourseProgress, SEnrolledCourse } = useSelector((Store) => Store.CourseReducer);
    const OnlineHours = SEnrolledCourse?.CoursePackage.OnlineHours;
    const InClassHours = SEnrolledCourse?.CoursePackage.InClassHours;
    const DrivingHours = SEnrolledCourse?.CoursePackage.DrivingHours;


    useCheckLogin(false, ["Student"]);
    useEffect(() => {
        if (Authenticated)
            Dispatch(GetCourseProgress(EnrollmentId))


    }, [Dispatch, EnrollmentId, Authenticated])
    return (
        <div className='flex justify-start items-center mt-20 flex-col'>

            <div className='w-4/5'>
                <h3 className='text-[30px] px-16 pb-6 Boldfont '>Your Progress</h3>
                <div className='w-full flex flex-col gap-14'>

                    <CoursesProgresReport ClassType={"Overall Course Completion"}
                        TotalClasses={(DrivingHours + InClassHours + OnlineHours) ? (DrivingHours + InClassHours + OnlineHours) : 0}
                        ClassesTaken={CourseProgress?.length}
                        Index={1}
                    />
                    <CoursesProgresReport ClassType={"Online Course Completion"}
                        TotalClasses={OnlineHours ? OnlineHours : 0}
                        ClassesTaken={CourseProgress?.OnlineHours?.length || 0}
                        Index={2}
                        Color={"#FE6B1E"} />

                    <CoursesProgresReport ClassType={"In Class Course Completion"}
                        TotalClasses={InClassHours ? InClassHours : 0}
                        ClassesTaken={CourseProgress?.InClassHours?.length || 0}
                        Index={3}
                        Color={"#2FD535"} />

                    <CoursesProgresReport ClassType={"Driving Course Completion"}
                        TotalClasses={DrivingHours ? DrivingHours : 0}
                        ClassesTaken={CourseProgress?.DrivingHours?.length || 0}
                        Index={4}
                        Color={"#A1A3EF"} />

                </div>
            </div>
        </div>
    )
}

export default CourseProgress