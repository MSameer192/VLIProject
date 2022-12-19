import axios from "axios"
import { BaseUrl } from "./Base"

export const GetCourse = (InstituteCourseId) => async (dispatch) => {
    try {
        dispatch({
            type: "CourseRequest"
        })

        const { data } = await axios.get(`${BaseUrl}/api/institute/course/${InstituteCourseId}`)

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