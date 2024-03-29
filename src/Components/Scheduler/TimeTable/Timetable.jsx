import 'devextreme/dist/css/dx.light.css';
import { Editing, Resource, Scheduler, View } from 'devextreme-react/scheduler';

function DevExtremeScheduler({ Events, setEvents, Edit, Resources }) {
    const renderTimeCell = (data) => <i style={{ color: "green" }}>{data?.text}</i>;

    const OnUpdate = (e) => {
        console.log(e, e.appointmentData, Events)
    }

    const onAppointmentDeleting = (e) => {
        // console.log(e)
    }
    const onAppointmentDeleted = (e) => {

        // let Index = Events.indexOf(e?.appointmentData);
        // let NewEvents = Events.splice(Index, 1)

        setEvents([...Events])
    }
    const onAppointmentAdding = (e) => {
    }
    const onAppointmentAdded = (e) => {
        const { appointmentData } = e
        const NewEvents = Events.map(value => {
            if (value.endDate === appointmentData.endDate
                && value.startDate === appointmentData.startDate
                && value.startDate === appointmentData.startDate
                && value.description === appointmentData.description
                && value.text === appointmentData.text) {
                value.InstructorFK = appointmentData.InstructorFK;
                value.ClassType = appointmentData.ClassType;
            }
            return value
        })
        setEvents([...NewEvents]);
    }

    return (
        <>

            <Scheduler id="scheduler"
                dataSource={Events}
                currentView='workWeek'
                views={["week", "workWeek"]}
                startDayHour={9}
                endDayHour={19}
                onAppointmentUpdated={OnUpdate}
                onAppointmentDeleted={onAppointmentDeleted}
                onAppointmentDeleting={onAppointmentDeleting}
                onAppointmentAdding={onAppointmentAdding}
                onAppointmentAdded={onAppointmentAdded}
                showCurrentTimeIndicator={true}
                shadeUntilCurrentTime={true}

            >
                <Editing allowDeleting={Edit} allowAdding={Edit} allowUpdating={Edit} />
                <View type="workWeek"
                    cellDuration={45}
                    dateCellRender={renderTimeCell}
                />
                {
                    Resources?.length > 0
                        ? Resources.map(value =>
                            <Resource key={value.fieldExpr} fieldExpr={value.fieldExpr} dataSource={value.dataSource} />
                        )
                        : null
                }
            </Scheduler>

        </>
    );
}

export default DevExtremeScheduler;