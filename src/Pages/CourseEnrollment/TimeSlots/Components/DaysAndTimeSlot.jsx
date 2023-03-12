import { CheckSchedule } from "../../Payment/Components/Helper/CheckSchedule"
import { DaysName } from "./Components/DaysName"
import { RadioBtns } from "./Components/RadioBtns"
import { TimeSlotsNames } from "./Components/TimeSlotsName"

export const DaysAndTimeSlot = ({ Days, TimeIndex, TimeSlot, BorderStyle, TimeArr, SetSchedule, Err, setErr, EnrollmentData, FirstTimeAttempted }) => {
    const Change = (DayName, TimeSlotChecked) => {

        SetSchedule(DayName, TimeSlotChecked)
        CheckSchedule(EnrollmentData, Err, setErr, DayName, FirstTimeAttempted)
    }

    return Days.map((day, DaysIndex) => {

        // This would Display Time Slots
        if (TimeIndex === 0) {
            return (<TimeSlotsNames key={`${day} + ${TimeSlot}`} BorderStyle={BorderStyle} TimeArr={TimeArr} DaysIndex={DaysIndex} />)
        }

        //This would diplay days of the week
        if (DaysIndex === 0) {
            return (<DaysName key={`${day} + ${TimeSlot}`} day={day} Days={Days} TimeSlot={TimeSlot} BorderStyle={BorderStyle} DaysIndex={DaysIndex} TimeIndex={TimeIndex} Err={Err} />)
        }

        //This would display radio buttons
        return (<RadioBtns key={`${day} + ${TimeSlot}`} Days={Days} BorderStyle={BorderStyle} TimeIndex={TimeIndex} Change={Change} EnrollmentData={EnrollmentData} DaysIndex={DaysIndex} TimeArr={TimeArr} />)
    })

}


