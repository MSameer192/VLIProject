import axios from "axios"
import { CheckLoginServer } from "../Helpers/CheckLogin"
import { BaseUrl } from "./Base"

export const AddInstructorA = (InstructorData, setSuccess) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateInstructorRequest"
        })
        const { data } = await axios.post(`${BaseUrl}/api/Instructor/add`, InstructorData, { withCredentials: true })

        dispatch({
            type: "CreateInstructorSuccess",
            payload: data
        })
        setSuccess(true)
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "CreateInstructorFailure",
            payload: error
        })
    }
}

export const UpdateInstructorA = (InstructorData, setSuccess) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateInstructorRequest"
        })

        const { data } = await axios.put(`${BaseUrl}/api/Instructor/update`, InstructorData, { withCredentials: true })

        dispatch({
            type: "CreateInstructorSuccess",
            payload: data
        })
        setSuccess(true)
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "CreateInstructorFailure",
            payload: error
        })
    }
}
export const GetInstructorsA = (EnrollmentId) => async (dispatch) => {
    try {
        dispatch({
            type: "GetInstructorsRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/Instructors/${EnrollmentId}`, { withCredentials: true })

        dispatch({
            type: "GetInstructorsSuccess",
            payload: data
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetInstructorsFailure",
            payload: error
        })
    }
}
export const GetInstituteInstructorsA = () => async (dispatch) => {
    try {
        dispatch({
            type: "GetInstructorsRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/Institute/Instructors`, { withCredentials: true })

        dispatch({
            type: "GetInstructorsSuccess",
            payload: data
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetInstructorsFailure",
            payload: error
        })
    }
}



export const GetInstructorStudents = (InstructorId) => async (dispatch) => {
    try {
        dispatch({
            type: "GetInstructorStudentsRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/teacher/${InstructorId}`, { withCredentials: true })

        dispatch({
            type: "GetInstructorStudentsSuccess",
            payload: data
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetInstructorStudentsFailure",
            payload: error
        })
    }
}

export const GetSInstructorA = (InstructorId) => async (dispatch) => {
    try {
        dispatch({
            type: "GetSInstructorRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/SInstructor/${InstructorId}`, { withCredentials: true })

        dispatch({
            type: "GetSInstructorSuccess",
            payload: data
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetSInstructorFailure",
            payload: error
        })
    }
}
