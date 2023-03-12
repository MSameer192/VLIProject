import React, { useState, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GeneralEvent } from '../../../../../Actions/Events/FilterA';
import { SocketContext } from '../../../../../App';
import { GetLocalStorage, SetLocalStorage } from '../../../../../Helpers/LocalStorage/LocalStorage';
import ProfileDropdown from '../../ProfileDropDown'
import DropDownOptions from './DropDownOptions';
import Notification from '../../../../Notification/Notification'
const RightSide = ({ setShowSidebar, }) => {
    const [ShowNotifications, setShowNotifications] = useState(false);
    const { Notifications } = useSelector(Store => Store?.NotificationReducer);
    const Socket = useContext(SocketContext);
    const Dispatch = useDispatch()

    useEffect(() => {
        let NotifiArr
        Socket?.on("CourseRecommended", (data) => {

            NotifiArr = [...Notifications.map((value) => {
                return value
            })];

            NotifiArr.unshift(data[0])
            Dispatch(GeneralEvent(NotifiArr, "GetNotificationsSuccess"))
            let UserInfo = { ...GetLocalStorage("UserInfo") };
            delete UserInfo.Notifications
            SetLocalStorage("UserInfo", { ...UserInfo, Notifications: NotifiArr })
        })

    }, [Socket, Dispatch, Notifications])

 

    return (
        <div className='flex w-1/2 justify-end px-11 gap-10'>
            <span className='relative'>
                <span className='flex w-3 h-3 rounded-full bg-[#A1A3EF] border-[2px] border-solid border-white absolute          -top-[1px] right-[1px]'></span>
                <img className='h-[30px] cursor-pointer' src={require('../Assets/Notification.svg').default} alt=""
                    onClick={() => setShowNotifications(!ShowNotifications)}
                />
                <span className='fixed right-10 top-16'>
                    {ShowNotifications ? <Notification Notifications={Notifications} setShowNotifications={setShowNotifications} /> : null}
                </span>
            </span>

            <ProfileDropdown setShowSidebar={setShowSidebar} DropDownOptions={DropDownOptions} />
        </div>
    )
}

export default RightSide