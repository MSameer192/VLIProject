import axios from "axios"
import { CheckLoginServer } from "../Helpers/CheckLogin";
import { BaseUrl } from "./Base";
import { Credentials } from "./UserA";

export const CreateAdminCourseA = (CourseData, setSuccess) => async (dispatch) => {
    try {
        dispatch({
            type: "Admin_AddCourseRequest"
        })
        const { data } = await axios.post(`${BaseUrl}/api/course/create`, CourseData, Credentials);
        dispatch({
            type: "Admin_AddCourseSuccess",
            payload: data
        })
        setSuccess(true)
    }
    catch (err) {
        CheckLoginServer(err?.response?.data, dispatch)
        dispatch({
            type: "Admin_AddCourseFailure",
            payload: err
        })
    }
}