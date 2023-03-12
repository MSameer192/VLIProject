import { Scheduler } from '@aldabil/react-scheduler'
import React from 'react'
import { onConfirm, onDelete } from './Helpers/events'
import { Fields } from './Helpers/fields'
import { eventRenderer } from './Helpers/renderer'

const Timetable = ({ Events, setEvents }) => {

    return (
        <Scheduler
            events={Events}
            view="week"
            day={null}
            month={null}
            fields={Fields}
            onConfirm={(event, action) => onConfirm(event, action, Events, setEvents)}
            onDelete={event_id => onDelete(event_id, Events, setEvents)}
            eventRenderer={event => eventRenderer(event)}
        />
    )
}

export default Timetable