
export const ValidateInstituteInfo = (InstituteData, setErr, Err, KeyNamesArr) => {

    let Errors;
    let CheckErrs = (key, value) => {
        KeyNamesArr.forEach(KeyValue => {
            if (KeyValue.key === key && value === "")
                Errors = { ...Errors, [key]: `${KeyValue.Name} is required` };

            else if (KeyValue.key === key && value !== "")
                delete Errors?.[key]
        })
    }
    for (const [key, value] of Object.entries(InstituteData)) {
        CheckErrs(key, value)
    }

    setErr({ ...Errors, ...Err })
    Errors = { ...Errors }

    if (Object.entries(Errors).length > 0)
        return true
    else
        return false
}
