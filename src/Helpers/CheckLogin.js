import { DeleteLocalStorage } from "./LocalStorage/LocalStorage"

export const CheckLoginServer = (res, dispatch) => {

    if (res?.message === "Pleases login again") {
        DeleteLocalStorage("UserInfo")

        dispatch({
            type: "LoginSuccess",
            payload: undefined,
            Auth: false
        })
    }

}