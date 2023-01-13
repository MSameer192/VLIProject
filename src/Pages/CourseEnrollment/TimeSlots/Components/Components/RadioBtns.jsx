export function RadioBtns({ Days, BorderStyle, TimeIndex, Change, EnrollmentData, DaysIndex, TimeArr }) {

    return <span className={`w-52 flex justify-center py-5 ${BorderStyle}`}>
        <label className='Radio-Btn'>
            <input className='relative left-1/2 -translate-x-1/2' value={TimeArr[DaysIndex]} type="radio" name={`${Days[TimeIndex]}`}
                checked={EnrollmentData.StudentData.Schedule[Days[TimeIndex]] === TimeArr[DaysIndex]}
                onChange={(e) => Change(Days[TimeIndex], TimeArr[DaysIndex])}
            />
            <span className='CheckMark'>
            </span>
        </label>
    </span>
}
// `${Days[TimeIndex]} + ${TimeSlot}`