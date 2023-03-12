import axios from 'axios';
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
        dispatch({
            type: "GetAllBooksError",
            payload: error
        })
    }
}