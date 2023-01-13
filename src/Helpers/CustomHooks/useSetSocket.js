import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetSocketA } from '../../Actions/SocketA';
import { GetLocalStorage } from '../LocalStorage/LocalStorage';

const useSetSocket = (Socket) => {
    const Dispatch = useDispatch();
    const { Authenticated, UserInfo } = useSelector((Store) => Store.LoginSignupReducer)
    const { SocketUserId } = useSelector((Store) => Store.SocketReducer)

    useEffect(() => {
        if (!SocketUserId) {

            if (Authenticated && GetLocalStorage('UserInfo'))
                Dispatch(SetSocketA({ UserId: UserInfo.UserId, Authenticated: true }))

            else if (GetLocalStorage('UserInfo'))
                return
                
            else
                Dispatch(SetSocketA({ UserId: window.crypto.randomUUID(), Authenticated: false }))

        }
    }, [Socket, Authenticated, Dispatch, UserInfo, SocketUserId])
}

export const useSaveSocketUser = (Socket) => {
    const { SocketUserId } = useSelector((Store) => Store.SocketReducer)

    useEffect(() => {
        if (SocketUserId)
            Socket?.emit("SaveUser", { ...SocketUserId })

    }, [Socket, SocketUserId])
}

export default useSetSocket