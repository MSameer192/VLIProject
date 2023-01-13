import { useEffect } from 'react'
import { SetUser } from '../../Actions/UserA'
import { useDispatch, useSelector } from 'react-redux'
import { GetLocalStorage } from '../LocalStorage/LocalStorage'
import { useNavigate } from 'react-router-dom'
const useCheckLogin = (Navigation) => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch();
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);

    useEffect(() => {
        if (GetLocalStorage("UserInfo"))
            Dispatch(SetUser(GetLocalStorage("UserInfo")))

        else if (!Authenticated || !GetLocalStorage("UserInfo")) {
            if (Navigation)
                Navigate('/')
        }

    }, [Dispatch, Navigate, Authenticated,Navigation])

}

export default useCheckLogin