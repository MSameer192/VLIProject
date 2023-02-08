import { Scheduler } from '@aldabil/react-scheduler'
import React, { useState } from 'react'


export const Colors = {
    Driving: {
        Color: "#A1A3EF",
        LightColor: "#8d90d380"
    },
    Online: {
        Color: "#7F82F9",
        LightColor: "#696bd080"
    },
    InClass: {
        Color: "#5456C7",
        LightColor: "#4446a480"
    },
}

const Timetable = () => {
    const [Events, setEvents] = useState([])
    return (
        <Scheduler
            events={Events}
            view="week"
            day={null}
            month={null}
            fields={[
                {
                    name: "ClassNo",
                    type: "select",
                    // Should provide options with type:"select"
                    options: [{ id: 1, text: "1", value: 1 }, { id: 2, text: "2", value: 2 }],
                    config: { label: "Class No.", required: true, errMsg: "Plz Select class no." }
                },
                {
                    name: "ClassType",
                    type: "select",
                    // Should provide options with type:"select"
                    options: [{ id: 1, text: "Driving", value: "Driving" }, { id: 2, text: "Online", value: "Online" }, { id: 3, text: "InClass", value: 'InClass' }],
                    config: { label: "Class Type", required: true, errMsg: "Plz Select class type" }
                },
                {
                    name: "Description",
                    type: "input",
                    default: " ",
                    config: { label: "Details", multiline: true, rows: 1 }
                },

            ]}
            onConfirm={(event, action) => {
                return { ...event, event_id: event.event_id || Math.random() }
            }}
            onDelete={(event_id) => {
                Events.forEach((value, index) => {
                    if (value.event_id === event_id) {
                        Events.splice(index, 1)
                    }
                })
                setEvents(Events)
                return event_id
            }}
            eventRenderer={(event) => {
                let Color, LightColor;
                if (event.ClassType === "Driving") {
                    Color = Colors.Driving.Color;
                    LightColor = Colors.Driving.LightColor;
                }
                else if (event.ClassType === "Online") {
                    Color = Colors.Online.Color;
                    LightColor = Colors.Online.LightColor;
                }
                else if (event.ClassType === "InClass") {
                    Color = Colors.InClass.Color;
                    LightColor = Colors.InClass.LightColor;
                }
                else {
                    Color = "red";
                    LightColor = "blue";
                }


                return (
                    <div className={`flex flex-col justify-between w-full h-full bg-[${Color}]`}>
                        <div className={`h-5 bg-[${Color}] text-white font-normal`} >
                            {event.start.toLocaleTimeString("en-US", { timeStyle: "short" })}
                        </div>

                        <div className={`bg-[${LightColor}] h-[calc(100%_-_40px)] text-[black]`}>{event.title}</div>
                        <div className={`h-20 text-white bg-[${Color}]`}>
                            {event.end.toLocaleTimeString("en-US", { timeStyle: "short" })}
                        </div>
                    </div>
                );
            }}
        />
    )
}

export default Timetable