import axios from 'axios';
import { CheckLoginServer } from '../Helpers/CheckLogin';
import { BaseUrl } from './Base';
import { Credentials } from './UserA'
export const AddBookA = (BookData, setSuccess) => async (dispatch) => {
    try {

        dispatch({
            type: "AddBookRequest",
        })

        const { data } = await axios.post(`${BaseUrl}/api/Book/Create`, BookData, Credentials);

        dispatch({
            type: "AddBookSuccess",
            payload: data,
        })
        setSuccess(true)
    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "AddBookError",
            payload: error
        })
    }
}
export const GetBooksA = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllBooksRequest",
        })

        const { data } = await axios.get(`${BaseUrl}/api/Books`, Credentials);

        dispatch({
            type: "GetAllBooksSuccess",
            payload: data,
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetAllBooksError",
            payload: error
        })
    }
}
export const GetStudentBooksA = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllBooksRequest",
        })

        const { data } = await axios.get(`${BaseUrl}/api/Students/Books`, Credentials);

        dispatch({
            type: "GetAllBooksSuccess",
            payload: data,
        })

    } catch (error) {
        CheckLoginServer(error?.response?.data, dispatch)
        dispatch({
            type: "GetAllBooksError",
            payload: error
        })
    }
}