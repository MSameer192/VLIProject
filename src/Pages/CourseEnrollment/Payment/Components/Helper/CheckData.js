import { CheckSchedule } from "./CheckSchedule"

export const CheckData = (EnrollmentData, Err, setErr) => {
    let Errors = {};
    for (const [key, value] of Object.entries(EnrollmentData.StudentData)) {

        if (value === "")
            Errors = { ...Errors, [key]: `${key} is required` }
        else {
            delete Errors?.[key]
            Errors = { ...Errors }
        }

    }
    for (const [key, value] of Object.entries(EnrollmentData)) {

        if (value === "" || value === undefined)
            if (key === "Package")

                Errors = { ...Errors, [key]: `Please select a Package` }


            else
                Errors = { ...Errors, [key]: `${key} is required` }
        else {
            delete Errors?.[key]
            Errors = { ...Errors }
        }

    }

    EnrollmentData?.StudentData?.FreeHours?.forEach((Value, index) => {
        if (Value.Start)
            for (const [key, value] of Object.entries(Value.Start))
                if (value === "")
                    Errors = { ...Errors, FreeHours: `Please enter a valid value` }
                else {
                    delete Errors?.FreeHours;
                    Errors = { ...Errors }
                }
    })
    let Serr = CheckSchedule(EnrollmentData);

    Errors = { ...Errors, ...Serr }

    setErr({ ...Err, ...Errors })

    for (const [key, value] of Object.entries(Errors)) {
        if (value) {

            const EmptyElementTop = document.getElementById(key);
            EmptyElementTop.scrollIntoView()
            // window.scroll({
            //     top: EmptyElementTop.getBoundingClientRect().top + window.scrollY + "350",
            //     behavior: 'smooth'
            // });

            break;
        }
    }

    if (Object.entries(Errors).length > 0 || Object.entries(Serr).length > 0) return false
    else return true
}