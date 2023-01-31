import { useEffect } from 'react'
import { SetUser } from '../../Actions/UserA'
import { useDispatch, useSelector } from 'react-redux'
import { GetLocalStorage } from '../LocalStorage/LocalStorage'
import { useNavigate } from 'react-router-dom'

const useCheckLogin = (Navigation, UserType, InstituteUserTypes) => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch();
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);
    let Institute = CheckInstitute(InstituteUserTypes)

    useEffect(() => {

        if (GetLocalStorage("UserInfo")) {
            Dispatch(SetUser(GetLocalStorage("UserInfo")))

            if (GetLocalStorage("UserInfo")?.User === UserType) {
                if (GetLocalStorage("UserInfo")?.User === "Institute" && !CheckInstitute(InstituteUserTypes))
                    Navigate('/')
            }
            else if (GetLocalStorage("UserInfo")?.User !== UserType)
                Navigate('/')

        }
        else if (!Authenticated || !GetLocalStorage("UserInfo")) {
            if (Navigation)
                Navigate('/')
        }

    }, [Dispatch, Navigate, UserType, Navigation, Institute, Authenticated])

}
function CheckInstitute(InstituteUserTypes) {
    let checkInstitute
    InstituteUserTypes?.forEach(InstituteUserTypeName => {
        if (GetLocalStorage("UserInfo")?.InstituteUserType === InstituteUserTypeName) checkInstitute = true
    });

    return checkInstitute
}
export const useSetLoginInfo = () => {
   
    const Dispatch = useDispatch();
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);
    useEffect(() => {
        if (GetLocalStorage("UserInfo")) {
            Dispatch(SetUser(GetLocalStorage("UserInfo")))
        }
    }, [])
}
export default useCheckLogin