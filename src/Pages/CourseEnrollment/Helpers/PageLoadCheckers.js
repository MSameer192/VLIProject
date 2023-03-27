import dayjs from 'dayjs';
import { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { GetEnrollCourseInfo } from '../../../Actions/CourseA';

export const usePageLoadCheckers = (location, EnrollmentData, setEnrollmentData) => {
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    const [Loaded, setLoaded] = useState();
    const { UserInfo } = useSelector((Store) => Store.LoginSignupReducer);
    const { EnrollCourseInfo } = useSelector((Store) => Store.CourseReducer)

    // This would navigate user to home if user tries to enter previous url.
    useEffect(() => {

        if (!location?.state?.InstituteCourseId && Loaded === false) {

            Navigate('/')
        } else {
            setLoaded(true)
        }
    }, [location, Navigate, Loaded])


    // This would get the Information of the course to be enrolled and make sure that it is 
    // requested multiple times.
    useEffect(() => {

        if (!EnrollCourseInfo && location?.state?.InstituteCourseId && Loaded)
            Dispatch(GetEnrollCourseInfo(location?.state?.InstituteCourseId))


    }, [Dispatch, location, EnrollCourseInfo, Loaded])




    // This would fill all the fields with information previously enterd by user, automatically, 
    // when page is loaded
    useEffect(() => {
        if (UserInfo) {
            const WriteableUserInfo = JSON.parse(JSON.stringify(UserInfo))
            if (EnrollmentData?.StudentData?.FirstName === "")
                setEnrollmentData({
                    ...EnrollmentData, StudentData: {
                        ...EnrollmentData.StudentData, ...WriteableUserInfo, ...WriteableUserInfo?.StudentInfos,
                        DOB: dayjs(new Date(WriteableUserInfo?.StudentInfos?.DOB)).format('YYYY-MM-DD')
                    }
                })


        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [EnrollmentData, UserInfo])

}