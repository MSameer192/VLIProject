import React from 'react'
import ClassScheduler from '../../../../../Components/Scheduler/Scheduler'

const StudentScheduleTimeTable = ({ Events, setEvents }) => {
    return (
        <div>
        
            <ClassScheduler
                Events={Events}
                setEvents={setEvents}
                Edit={false}
            />
        </div>

    )
}

export default StudentScheduleTimeTable