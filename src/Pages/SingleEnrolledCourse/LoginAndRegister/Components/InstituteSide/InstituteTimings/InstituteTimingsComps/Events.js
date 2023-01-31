export const HrsChange = (e, TimeValue, setTimeValue) => {
    const Time = Number(e.target.value)

    if (Time >= 12) {
        setTimeValue({ ...TimeValue, Hrs: 1 })
        return
    }
    if (Time <= 0) {
        setTimeValue({ ...TimeValue, Hrs: 12 })
        return
    }
    if (Time <= 12 && Time > 0) {
        setTimeValue({ ...TimeValue, Hrs: Time })
        return
    }
}

export const MinsChange = (e, TimeValue, setTimeValue) => {
    const Time = Number(e.target.value)
    if (Time >= 59) {
        setTimeValue({ ...TimeValue, Mins: 0 })
        return
    }
    if (Time <= 0) {
        setTimeValue({ ...TimeValue, Mins: 59 })
        return
    }
    if (Time <= 59 && Time > 0) {
        setTimeValue({ ...TimeValue, Mins: Time })
        return
    }
}


export const KeyDown = (e, Period, setPeriod, TimeValue, setTimeValue) => {
    const CheckPeriod = !Period;//

    if (e.code === "KeyP") {
        setTimeValue({ ...TimeValue, Period: "PM" })
        setPeriod(!Period)
    }
    else if (e.code === "KeyA") {
        setTimeValue({ ...TimeValue, Period: "AM" })
        setPeriod(!Period)
    }
    else if (e.code === "ArrowUp" || e.code === "ArrowDown") {
        setPeriod(!Period)
        if (CheckPeriod) setTimeValue({ ...TimeValue, Period: "AM" })
        else setTimeValue({ ...TimeValue, Period: "PM" })
    }

}