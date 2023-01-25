export function TimeSlotsNames({ BorderStyle, TimeArr, DaysIndex }) {
    let Width = DaysIndex === 0 ? "w-28" : "w-52"
    return <h4
        className={`text-6xs md:text-5xs lg:text-4xs xl:text-3xs text-[#A1A3EF] text-center ${Width} Blackfont border-l-0 border-t-0 ${BorderStyle}`}>
        {TimeArr[DaysIndex]}
    </h4>
}
