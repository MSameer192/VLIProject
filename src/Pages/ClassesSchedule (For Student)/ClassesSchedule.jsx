import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { GetScheduleA } from '../../Actions/StudentA';
import ClassScheduler from '../../Components/Scheduler/Scheduler'
import useCheckLogin from '../../Helpers/CustomHooks/CheckLogin';
import { GetLocalStorage } from '../../Helpers/LocalStorage/LocalStorage';
import MyCourses from '../../Components/MyCourses/MyCourses';
import { EnrolledCourseButtonsInfo } from '../../PageNames';
const ClassesScheduleChild = () => {
    const { EnrollmentId } = useParams()
    const { UserInfo } = useSelector(Store => Store.LoginSignupReducer);
    const { Schedule } = useSelector(Store => Store.StudentReducer);
    const [Events, setEvents] = useState([]);
    const Dispatch = useDispatch()
    useEffect(() => {
        if (EnrollmentId)
            Dispatch(GetScheduleA(EnrollmentId))
    }, [Dispatch, EnrollmentId])

    useEffect(() => {
        const EditableSchedule = JSON.parse(JSON.stringify(Schedule))
        setEvents(EditableSchedule.map(Value => {
            Value.endDate = new Date(Value.endDate)
            Value.startDate = new Date(Value.startDate)
            return Value
        }))
    }, [Schedule])


    useCheckLogin(true, ["Student", "Institute"], ["Admin", "Staff"]);

    return (
        <div>
            {Events.length >= 0
                ? <ClassScheduler Name={UserInfo?.FirstName + " " + UserInfo?.LastName}
                    Events={Events} setEvents={setEvents}
                    Edit={GetLocalStorage("UserInfo").User === "Institute"}
                />
                : null
            }

        </div>
    )
}

const ClassesSchedule = () => <MyCourses ButtonsInfo={EnrolledCourseButtonsInfo} PageName="UpcomingClasses" Component={ClassesSchedule} />

export default ClassesSchedule