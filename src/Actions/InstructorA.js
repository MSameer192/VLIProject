import axios from "axios"
import { BaseUrl } from "./Base"

export const AddInstructorA = (InstructorData, setSuccess) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateInstructorRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/Instructor/add`, InstructorData, { withCredentials: true })
        console.log(data)
        dispatch({
            type: "CreateInstructorSuccess",
            payload: data
        })
        setSuccess(true)
    } catch (error) {
        console.log(error)
        dispatch({
            type: "CreateInstructorFailure",
            payload: error
        })
    }
}
