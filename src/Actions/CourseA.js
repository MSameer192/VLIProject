import axios from "axios"
import { BaseUrl } from "./Base"
import { Credentials } from "./UserA"
const Headers = { headers: { "Content-Type": "application/json" }, withCredentials: true }
export const GetCourse = (InstituteCourseId) => async (dispatch) => {
    try {
        dispatch({
            type: "CourseRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/institute/course/${InstituteCourseId}`, { withCredentials: true })

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
export const GetVehicleTypeCourse = (VehicleypeId) => async (dispatch) => {

    try {
        dispatch({
            type: "LicenceTypeCoursesRequest"
        })

        const { data } = await axios.get(`/api/vehicletype/courses/${VehicleypeId}`,
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
        Navigate('/mycourses/enrolledcourses')
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

export const GetSEnrolledCourse_ForInsA = (EnrollmentId) => async (dispatch) => {

    try {
        dispatch({
            type: "GetSEnrolledCoursesRequest"
        })
        const { data } = await axios.get(`/api/Enrolled/${EnrollmentId}`, Credentials)

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


export const GetAdminCoursesA = () => async (dispatch) => {

    try {
        dispatch({
            type: "GetAdminCoursesRequest"
        })
        const { data } = await axios.get(`${BaseUrl}/api/courses`, Headers)

        dispatch({
            type: "GetAdminCoursesSuccess",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "GetAdminCoursesFailure",
            payload: error
        })
    }
}

export const GetRecommendedAdminCoursesA = () => async (dispatch) => {

    try {
        dispatch({
            type: "GetAdminCoursesRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/course/forwards/`, { withCredentials: true });
        let CoursesArr = data.map(value => value.Course)
        CoursesArr = CoursesArr?.filter((value, Index, arr) => {
            let CheckVal = true
            arr.forEach((Val, index) => {
                if (value?.CoursePK === Val?.CoursePK && Index > index)
                    CheckVal = false;

            })

            return CheckVal === true
        })

        dispatch({
            type: "GetAdminCoursesSuccess",
            payload: CoursesArr
        })

    } catch (error) {

        dispatch({
            type: "GetAdminCoursesFailure",
            payload: error
        })
    }
}

export const GetAboutInfoA = (EnrollmentId) => async (dispatch) => {

    try {
        dispatch({
            type: "GetAboutClientRequest"
        })
        const { data } = await axios.get(`${BaseUrl}/api/student/${EnrollmentId}`, Headers)
        let StudentInfo = { ...data.User };
        // delete StudentInfo?.StudentInfo
        StudentInfo.StudentInfo.DOB = new Date(StudentInfo?.StudentInfo?.DOB).toLocaleDateString();


        data.ScheduleTimetable = [...data.ScheduleTimetable.map(value => {
            value.start = new Date(value.start)
            value.end = new Date(value.end)
            return value
        })]

        dispatch({
            type: "GetAboutClientSuccess",
            CoursePackage: data.CoursePackage,
            Student: data.User,
            CourseProgress: data.CourseProgress,
            ScheduleTimeTable: data.ScheduleTimetable
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: "GetAboutClientFailure",
            payload: error
        })
    }
}



export const CreateCoursesA = (CourseFormData, setSuccess) => async (dispatch) => {

    try {
        dispatch({
            type: "CreateCourseRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/institute/course/add`, CourseFormData, Headers);
        console.log(data)
        setSuccess(true)
        dispatch({
            type: "CreateCourseSuccess",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "CreateCourseFailure",
            payload: error
        })
    }
}

export const InstituteCoursesA = () => async (dispatch) => {

    try {
        dispatch({
            type: "GetInstituteCoursesRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/institute/courses`, { withCredentials: true });


        dispatch({
            type: "GetInstituteCoursesSuccess",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "GetInstituteCoursesFailure",
            payload: error
        })
    }
}


export const DeleteInstituteCoursesA = (InstituteCourseId) => async (dispatch) => {

    try {
        dispatch({
            type: "GetInstituteCoursesRequest"
        })

        const { data } = await axios.delete(`${BaseUrl}/api/institute/course/remove`, { withCredentials: true, data: { InstituteCourseId } });


        dispatch({
            type: "GetInstituteCoursesSuccess",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "GetInstituteCoursesFailure",
            payload: error
        })
    }
}