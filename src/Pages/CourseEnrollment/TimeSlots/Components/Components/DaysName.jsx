export function DaysName({ day, Days, TimeSlot, BorderStyle, TimeIndex, Err }) {


    let DaysTextColor = Err?.ScheduleDays
        ? Err?.ScheduleDays[Days[TimeIndex]] === true ? "text-[red]" : "text-black"
        : "text-black";

    return <div className={`flex justify-center items-center w-28 border-l-0 ${BorderStyle}`}>
        <h4 className={`text-3xs Blackfont ${DaysTextColor}`}>{Days[TimeIndex]}</h4>
    </div>
}
