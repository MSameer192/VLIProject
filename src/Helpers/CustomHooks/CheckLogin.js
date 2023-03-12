import { useEffect } from 'react'
import { SetUser } from '../../Actions/UserA'
import { useDispatch, useSelector } from 'react-redux'
import { GetLocalStorage } from '../LocalStorage/LocalStorage'
import { useNavigate } from 'react-router-dom'
import { GeneralEvent } from '../../Actions/Events/FilterA'

const useCheckLogin = (Navigation, UserType, InstituteUserTypes) => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch();
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);
    let Institute = CheckInstitute(InstituteUserTypes, UserType)
    let User = CheckUser(UserType)

    useEffect(() => {

        if (GetLocalStorage("UserInfo")) {
            Dispatch(SetUser(GetLocalStorage("UserInfo")))

            if (UserType.length > 0) {
                if (GetLocalStorage("UserInfo")?.User === User) {
                    if (GetLocalStorage("UserInfo")?.User === "Institute" && !Institute)
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Dispatch, Navigate, Navigation, Institute, Authenticated])

}


function CheckInstitute(InstituteUserTypes, UserType) {
    let checkInstitute = false;
    let UserTypeName
    UserType.forEach((UserName) => {
        if (UserName === "Institute")
            UserTypeName = UserName
    })

    if (UserTypeName === "Institute")
        InstituteUserTypes?.forEach(InstituteUserTypeName => {
            if (GetLocalStorage("UserInfo")?.InstituteUserType === InstituteUserTypeName) checkInstitute = true
        });
    else return true


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
            Dispatch(GeneralEvent(GetLocalStorage("UserInfo").Notifications,"GetNotificationsSuccess"))
        }
    }, [Dispatch])
}
export default useCheckLogin