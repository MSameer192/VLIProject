import { useNavigate } from "react-router-dom";
import { EnrollIntoCourse } from "../../Actions/CourseA";
import { CheckSchedule } from "./Helpers/CheckSchedule";

export const SubmitForm = (e, EnrollmentData, Err, setErr, Dispatch, Navigate) => {

    e.preventDefault();
    let Errors = {}
    for (const [key, value] of Object.entries(EnrollmentData.StudentData)) {

        if (value === "")
            Errors = { ...Errors, [key]: `${key} is required` }
        else
            Errors = { ...Errors, [key]: undefined }
 
    }

    EnrollmentData?.StudentData?.FreeHours?.forEach((Value, index) => {
        if (Value.Start)
            for (const [key, value] of Object.entries(Value.Start))
                if (value === "")
                    Errors = { ...Errors, FreeHours: `Please enter a valid value` }
                else
                    Errors = { ...Errors, FreeHours: undefined }
    })
    let Serr = CheckSchedule(EnrollmentData);
    Errors = { ...Errors, ...Serr }

    setErr({ ...Err, ...Errors })
    let CheckErr = false;
    for (const [key, value] of Object.entries(Errors)) {

        if (value === undefined)
            CheckErr = true
    }
    console.log(Errors, CheckErr)
    if (!CheckErr)
        return
    Dispatch(EnrollIntoCourse(EnrollmentData, Navigate))
}

