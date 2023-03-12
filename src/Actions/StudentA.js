import axios from "axios";
import { BaseUrl } from "./Base";
import { Credentials, Headers } from "./UserA";

export const GetStudentsA = () => async (dispatch) => {
    try {
        dispatch({
            type: "GetStudentsListRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/Enrolled/students`, Credentials);
        dispatch({
            type: "GetStudentsListSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "GetStudentsListError",
            payload: error
        })

    }
}
export const GetClassScheduleA = (EnrollmentId) => async (dispatch) => {
    try {
        dispatch({
            type: "GetClassScheduleRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/course/schedule/${EnrollmentId}`, Credentials);
        dispatch({
            type: "GetClassScheduleSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "GetClassScheduleError",
            payload: error
        })

    }
}
export const CreateScheduleA = (Events) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateScheduleRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/schedule/create`, Events, Credentials);
        dispatch({
            type: "CreateScheduleSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "CreateScheduleError",
            payload: error
        })

    }
}


export const GetScheduleA = (EnrollmentId) => async (dispatch) => {
    try {
        dispatch({
            type: "GetTimeTableRequest"
        })
 
        const { data } = await axios.post(`${BaseUrl}/api/timetable/${EnrollmentId}`, Credentials);
        dispatch({
            type: "GetTimeTableSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "GetTimeTableError",
            payload: error
        })

    }
}



export const GetSubscriptionStatus = (EnrollmentId) => async (dispatch) => {
    try {
        dispatch({
            type: "SubscriptionRequest"
        })
        const { data } = await axios.get(`${BaseUrl}/api/Status/payment/${EnrollmentId}`, Credentials);
        // console.log(data)
        dispatch({
            type: "SubscriptionSuccess",
            payload: data,
        })


    } catch (error) {

        dispatch({
            type: "SubscriptionFailure",
            payload: error
        })

    }
}