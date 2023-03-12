import { v4 as uuidV4 } from 'uuid'
export const onConfirm = (event, action, Events, setEvents) => {
    if (action === 'create') {
        event.event_id = uuidV4();
        Events.push(event)
        setEvents(Events)

    }
    else if (action === 'edit') {
        let NewEvents = Events.map(value => {
            if (value.event_id === event.event_id)
                value = { ...value, ...event }
            return value
        })
        setEvents([...NewEvents])
    }
    console.log(event)

    return { ...event, event_id: event.event_id }
}

export const onDelete = (event_id, Events, setEvents) => {
    Events.forEach((value, index) => {
        if (value.event_id === event_id) {
            Events.splice(index, 1)
        }
    })
    setEvents(Events)
    return event_id
}

