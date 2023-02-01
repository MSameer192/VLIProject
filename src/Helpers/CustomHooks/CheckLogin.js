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
    let User = CheckUser(UserType)

    useEffect(() => {

        if (GetLocalStorage("UserInfo")) {
            Dispatch(SetUser(GetLocalStorage("UserInfo")))

            if (UserType.length > 0) {
                if (GetLocalStorage("UserInfo")?.User === User) {
                    if (GetLocalStorage("UserInfo")?.User === "Institute" && !CheckInstitute(InstituteUserTypes))
                        Navigate('/')
                }
                else if (GetLocalStorage("UserInfo")?.User !== User)
                    Navigate('/')
            }
        }
        else if (!Authenticated || !GetLocalStorage("UserInfo")) {
            if (Navigation)
                Navigate('/')
        }

    }, [Dispatch, Navigate, Navigation, Institute, Authenticated])

}
function CheckInstitute(InstituteUserTypes) {
    let checkInstitute
    InstituteUserTypes?.forEach(InstituteUserTypeName => {
        if (GetLocalStorage("UserInfo")?.InstituteUserType === InstituteUserTypeName) checkInstitute = true
    });

    return checkInstitute
}
function CheckUser(UserTypes) {
    let checkUser
    UserTypes?.forEach(UserTypeName => {
        if (GetLocalStorage("UserInfo")?.User === UserTypeName) checkUser = UserTypeName
    });

    return checkUser
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