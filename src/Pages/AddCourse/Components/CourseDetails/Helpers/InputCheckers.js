

export const CheckInput = (e, Key, MaxLength, MinLength, Name, AllowWrite, State, setState, ErrState, setErrState, TextLength, setTextLength) => {
    let CheckIfErr
    let Checks = {};

    if (MaxLength && e.target.value.length > MaxLength) {
        Checks = { Max: { Result: true, Message: `${Name} Should not be more than ${MaxLength}` } }
    }
    if (MinLength && e.target.value.length < MinLength)
        Checks = { Min: { Result: true, Message: `${Name} Should be less than ${MinLength}` } }

    if (TextLength)
        setTextLength({ ...TextLength, [Key]: e.target.value.length })

    for (const [, value] of Object.entries(Checks)) {
        if (value.Result) {
            setErrState({ ...ErrState, [Key]: value.Message })
            CheckIfErr = true
            break;
        }
    }
    if (CheckIfErr && AllowWrite)
        setState({ ...State, [Key]: e.target.value })
    else if (!CheckIfErr)
        setState({ ...State, [Key]: e.target.value })

}