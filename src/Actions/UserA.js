import axios from "axios";
import { SetLocalStorage } from "../Helpers/LocalStorage/LocalStorage";
import { BaseUrl } from "./Base";

export const LoginUser = (UserData, setDone) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest"
        })
        const { data } = await axios.post(`${BaseUrl}/api/login`, UserData);

        dispatch({
            type: "LoginSuccess",
            payload: data.User
        })
        dispatch({
            type: "LoginError",
            payload: { message: undefined }
        })
        SetLocalStorage("UserInfo", data.User)
        setDone(true)
    } catch (error) {
        dispatch({
            type: "LoginSuccess",
            payload: undefined
        })
        dispatch({
            type: "LoginError",
            payload: { message: error?.response?.data?.message ? error?.response?.data?.message : undefined }
        })

    }
}
export const SignUpUser = (UserData, setDone) => async (dispatch) => {
    try {
        dispatch({
            type: "SignUpRequest"
        })
        const { data } = await axios.post(`${BaseUrl}/api/signup`, UserData)
        dispatch({
            type: "SignUpSuccess",
            payload: data
        })
        dispatch({
            type: "LoginError",
            payload: { message: undefined }
        })
        setDone(true)
    } catch (error) {
        dispatch({
            type: "LoginError",
            payload: { message: error?.response?.data?.message ? error?.response?.data?.message : undefined }
        })
    }
}