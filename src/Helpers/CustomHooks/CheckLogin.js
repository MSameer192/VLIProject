import { useEffect } from 'react'
import { SetUser } from '../../Actions/UserA'
import { useDispatch } from 'react-redux'
import { GetLocalStorage } from '../LocalStorage/LocalStorage'
const CheckLogin = () => {
    const Dispatch = useDispatch();
    useEffect(() => {
        if (GetLocalStorage("UserInfo")) 
            Dispatch(SetUser(GetLocalStorage("UserInfo")))
        
    }, [Dispatch])
}

export default CheckLogin