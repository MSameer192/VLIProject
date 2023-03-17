import axios from "axios";
import { DeleteLocalStorage, SetLocalStorage } from "../Helpers/LocalStorage/LocalStorage";
import { BaseUrl } from "./Base";
import { AgainOpenLoginSignUp, DoneLoginSignUp } from "./ToggleSignupA";
export const Headers = { headers: { "Content-Type": "application/json" } }
export const Credentials = { withCredentials: true }
export const LoginUser = (UserData, Dispatch, PageName) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/login`, UserData,
            Headers,

        );

        data.User.PhoneNumber = "";

        dispatch({
            type: "LoginSuccess",
            payload: data.User,
            Auth: true
        })
        dispatch({
            type: "GetNotificationsSuccess",
            payload: data.Notifications,
        })
        SetLocalStorage("UserInfo", { ...data.User, Notifications: data.Notifications })
        // SetLocalStorage("UserInfo", data.User)
        Dispatch(DoneLoginSignUp(false))
    } catch (error) {

        Dispatch(AgainOpenLoginSignUp(PageName))
        dispatch({
            type: "LoginError",
            payload: (error?.response?.data) ? (error?.response?.data) : {}
        })

    }
}
export const SignUpWithGoogleAction = (SignUpInfo, Dispatch, PageName) => async (dispatch) => {


    try {
        dispatch({
            type: "SignUpRequest",
        })
        const { data } = await axios.post('/api/signup/Google', SignUpInfo);

        dispatch({
            type: "SignUpSuccess",
            payload: data?.User,
        })
        dispatch({
            type: "GetNotificationsSuccess",
            payload: data.Notifications,
        })

        SetLocalStorage("UserInfo", { ...data.User, Notifications: data.Notifications });
        Dispatch(DoneLoginSignUp(false))
    } catch (error) {
        Dispatch(AgainOpenLoginSignUp(PageName))
        dispatch({
            type: "SignUpFailure",
            payload: error,
        })

    }
}
export const LoginWithGoogleAction = (LoginInfo, Dispatch, PageName) => async (dispatch) => {


    try {
        dispatch({
            type: "LoginRequest",
        })
        const { data } = await axios.post('/api/login/Google', LoginInfo,
            {
                headers: { "Content-Type": "application/json" }
            });


        dispatch({
            type: "LoginSuccess",
            payload: data.User,
            Auth: true
        })
        dispatch({
            type: "GetNotificationsSuccess",
            payload: data.Notifications,
        })
        SetLocalStorage("UserInfo", { ...data.User, Notifications: data.Notifications })
        Dispatch(DoneLoginSignUp(false))
    } catch (error) {
        Dispatch(AgainOpenLoginSignUp(PageName))
        dispatch({
            type: "LoginFailure",
            payload: error,
        })

    }
}

export const SignUpUser = (UserData, Dispatch, PageName) => async (dispatch) => {
    try {
        dispatch({
            type: "SignUpRequest"
        })
        const { data } = await axios.post(`${BaseUrl}/api/signup`, UserData,
            { withCredentials: true }
        )
        dispatch({
            type: "SignUpSuccess",
            payload: data,
            Auth: true
        })
        dispatch({
            type: "GetNotificationsSuccess",
            payload: data.Notifications,
        })
        SetLocalStorage("UserInfo", { ...data.User, Notifications: data.Notifications })
        Dispatch(DoneLoginSignUp(false))
    } catch (error) {
        Dispatch(AgainOpenLoginSignUp(PageName))
        dispatch({
            type: "SignUpError",
            payload: (error?.response?.data) ? (error?.response?.data) : {}
        })
    }
}


export const RegisterInstituteA = (UserData, cb) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterInstituteRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/Institute/Register`, UserData,
            { withCredentials: true }
        )
        dispatch({
            type: "RegisterInstituteSuccess",
            payload: data,
            Auth: true
        })
        dispatch({
            type: "GetNotificationsSuccess",
            payload: data.Notifications,
        })
        SetLocalStorage("UserInfo", { ...data.User, Notifications: data.Notifications })
        cb()
    } catch (error) {

        dispatch({
            type: "RegisterInstituteError",
            payload: (error?.response?.data) ? (error?.response?.data) : {}
        })
    }
}







export const SetUser = (UserInfo) => (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest"
        })

        if (UserInfo)
            dispatch({
                type: "LoginSuccess",
                payload: UserInfo,
                Auth: true
            })

        else
            dispatch({
                type: "LoginSuccess",
                payload: undefined,
                Auth: false
            })

    } catch (error) {
        dispatch({
            type: "LoginError",
            payload: error,
        })
    }
}

export const LogOut = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest"
        })

        const { data } = await axios.get(`/api/logout`, { withCredentials: true })
        DeleteLocalStorage("UserInfo")

        dispatch({
            type: "LoginSuccess",
            payload: undefined,
            Auth: false
        })

    } catch (error) {
        dispatch({
            type: "LoginError",
            payload: error,
        })
    }
}

export const GetWishList = () => async (dispatch) => {
    try {
        dispatch({
            type: "GetWishListRequest"
        })

        const { data } = await axios.get(`/api/wishlist`,
            { headers: { "Content-Type": "application/json" }, withCredentials: true });

        dispatch({
            type: "GetWishListSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "GetWishListError",
            payload: error,
        })
    }
}


export const RemoveFromWishList = (WishId) => async (dispatch) => {
    try {
        dispatch({
            type: "RemoveWishRequest"
        })

        const { data } = await axios.delete(`${BaseUrl}/api/wishlist`, { data: { WishId } },
            { headers: { "Content-Type": "application/json" }, withCredentials: true });
        console.log(data)
        dispatch({
            type: "RemoveWishSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "RemoveWishError",
            payload: error,
        })
    }
}

export const AddtoWishList = (InstitutetCourseId) => async (dispatch) => {
    try {
        dispatch({
            type: "AddToWishListRequest"
        })

        const { data } = await axios.post(`${BaseUrl}/api/wishlist`, { InstitutetCourseId },
            { headers: { "Content-Type": "application/json" }, withCredentials: true });

        dispatch({
            type: "AddToWishListSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "AddToWishListError",
            payload: error,
        })
    }
}

