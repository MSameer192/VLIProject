import axios from "axios"
import { BaseUrl } from "./Base"
const Headers = { headers: { "Content-Type": "application/json" }, withCredentials: true }
export const GetCourse = (InstituteCourseId) => async (dispatch) => {
    try {
        dispatch({
            type: "CourseRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/institute/course/${InstituteCourseId}`,)

        dispatch({
            type: "CourseSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "CourseFailure",
            payload: error
        })
    }
}

export const GetLicenseTypeCourse = (LicenseTypeId) => async (dispatch) => {

    try {
        dispatch({
            type: "LicenceTypeCoursesRequest"
        })

        const { data } = await axios.get(`/api/LicenseType/courses/${LicenseTypeId}`,
            { headers: { "Content-Type": "application/json" }, withCredentials: true })

        dispatch({
            type: "LicenceTypeCoursesSuccess",
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: "LicenceTypeCoursesFailure",
            payload: error
        })
    }
}

export const GetEnrollCourseInfo = (EnrollCourseId) => async (dispatch) => {

    try {
        dispatch({
            type: "EnrollCourseRequest"
        })
        const { data } = await axios.get(`${BaseUrl}/api/institute/course/${EnrollCourseId}`)

        dispatch({
            type: "EnrollCourseSuccess",
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: "EnrollCourseFailure",
            payload: error
        })
    }
}

export const EnrollIntoCourse = (EnrollmentData, Navigate) => async (dispatch) => {

    try {
        dispatch({
            type: "BuyCourseRequest"
        })
        const { data } = await axios.post(`/api/buy/course`, EnrollmentData, Headers)

        dispatch({
            type: "BuyCourseSuccess",
            payload: data
        })
        Navigate('/')
    } catch (error) {

        dispatch({
            type: "BuyCoursefailure",
            payload: error
        })
    }
}

export const GetEnrolledCourses = () => async (dispatch) => {

    try {
        dispatch({
            type: "GetEnrolledCoursesRequest"
        })
        const { data } = await axios.get(`/api/enrollCourse`, Headers)

        dispatch({
            type: "GetEnrolledCoursesSuccess",
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: "GetEnrolledCoursesFailure",
            payload: error
        })
    }
}

export const GetSingleEnrolledCourse = (EnrollmentId) => async (dispatch) => {

    try {
        dispatch({
            type: "GetSEnrolledCoursesRequest"
        })
        const { data } = await axios.get(`/api/enrollCourse/${EnrollmentId}`, Headers)

        dispatch({
            type: "GetSEnrolledCoursesSuccess",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "GetSEnrolledCoursesFailure",
            payload: error
        })
    }
}

export const GetCourseProgress = (EnrollmentId) => async (dispatch) => {

    try {
        dispatch({
            type: "GetSEnrolledCoursesRequest"
        })
        const { data } = await axios.get(`/api/courseprogress/${EnrollmentId}`, Headers)

        dispatch({
            type: "GetSEnrolledCoursesSuccess",
            payload: data?.EnrolledCourse
        })
        dispatch({
            type: "EnrolledCourseProgressSuccess",
            payload: data?.CourseProgress
        })

    } catch (error) {

        dispatch({
            type: "GetSEnrolledCoursesFailure",
            payload: error
        })
    }
}