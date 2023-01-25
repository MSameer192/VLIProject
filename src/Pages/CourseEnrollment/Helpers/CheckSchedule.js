
export const CheckSchedule = (EnrollmentData, Err, setErr, DayName, Attempted) => {
    let Errors = {}
    for (const [key, value] of Object.entries(EnrollmentData.StudentData.Schedule)) {
        if (value === undefined) {

            if (Err) {
                Errors = { ...Errors, ScheduleDays: { ...Errors.ScheduleDays, [key]: true } }
            } else {
                Errors = { ...Errors, ScheduleDays: { ...Errors.ScheduleDays, [key]: false } }
            }
            Errors = { ...Errors, Schedule: "Complete Schedule is required." }
        }
    }
    if (Err) {
        if (DayName)
            Errors = { ...Errors, ScheduleDays: { ...Errors.ScheduleDays, [DayName]: false } }

        if (!DayName || Attempted)
            setErr({ ...Err, ...Errors })

    }



    return Errors
}

