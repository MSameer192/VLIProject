import 'devextreme/dist/css/dx.light.css';
import { Editing, Resource, Scheduler, View } from 'devextreme-react/scheduler';
import DataSource from 'devextreme/data/data_source';
// import { data } from './data';
import { useState } from 'react';

function DevExtremeScheduler() {
    const renderTimeCell = (data) => <i style={{ color: "green" }}>{data?.text}</i>;
    const [Data, setData] = useState([]);
    const rooms = new DataSource({
        store: {
            type: 'array',
            data: [

                {
                    id: 1,
                    text: 'Room101',
                    color: 'red'
                },
                { id: 2, text: 'Room102', color: 'green' },

            ]
        },
        paginate: false
    });
    const teachers = new DataSource({
        store: {
            type: 'array',
            data: [
                // Resource instances
                { guid: '6F96', name: 'John Heart', clr: 'yellow' },
                { guid: '3F32', name: 'Sandra Johnson', clr: 'blue' },
                // ...
            ]
        },
        paginate: false
    });

    var resources = [
        { fieldExpr: 'roomId', dataSource: rooms },
        { fieldExpr: 'teacherId', dataSource: teachers, allowMultiple: true }
    ];

    const OnUpdate = (e) => {
        console.log(e.appointmentData, Data)
    }

    const onAppointmentDeleting = (e) => {
        console.log(e)
    }
    const onAppointmentDeleted = (e) => {
        console.log(e)
    }
    return (
        <>
            <div className='h-[calc(100vh_-_250px)] max-h-[1350px]' style={{overflow: "scroll", marginTop: "100px" }}>
                <Scheduler id="scheduler"
                    dataSource={Data}
                    currentView='workWeek'
                    // views={["week"]}
                    startDayHour={9}
                    endDayHour={19}
                    onAppointmentUpdated={OnUpdate}
                    onAppointmentDeleted={onAppointmentDeleted}
                    onAppointmentDeleting={onAppointmentDeleting}
                >
                    <Editing allowDeleting={true} allowAdding={true} allowUpdating={true} />
                    <View type="workWeek"
                        cellDuration={30}
                    />

                </Scheduler>
            </div>

        </>
    );
}

export default DevExtremeScheduler;