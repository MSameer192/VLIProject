
export const DateInput = ({ Err, onChange, State }) => {

    let DivStyle = "w-full md:w-[45%] flex flex-col justify-center items-start gap-3 max-w-[600px]";
    let HeadingStyle = "text-4xs sm:text-3xs md:text-2xs lg:text-xs text-[#404040] font-normal  whitespace-nowrap";
    let ExceptionSpanStyle = "flex items-center w-full rounded-[8px] bg-white px-5 border-[#E8E8E8] border-solid border-[2px]"
    let ExceptionInputStyle = "w-full text-6xs md:text-5xs lg:text-2xs xl:text-3xs py-2 rounded-[8px] border-none focus:border-none focus:outline-none"
    const AddParentStyle = (e) => e.target.parentNode.style = "border:2px solid black";
    const RemoveParentStyle = (e) => e.target.parentNode.style = ""

    const ShowDate = (e) => e.target.parentElement.previousElementSibling.showPicker()
console.log(State)
    return <div className={DivStyle}>
        <label htmlFor='RemoveDateIcon' className={HeadingStyle}>Date of Birth (DD/MM//YYYY)</label>

        <h4> {Err ? Err : null}</h4>

        <span className={ExceptionSpanStyle}> 

            <input className={`${ExceptionInputStyle} RemoveDateIcon`} type="date" placeholder='DD/MM/YYYY' id='RemoveDateIcon' required
                onFocus={AddParentStyle}
                onBlur={RemoveParentStyle}
                value={State}
                onChange={onChange}
            />


            <label htmlFor="RemoveDateIcon">
                <img src={require('./Assets/BirtPlaceIcon.svg').default} alt=""
                    onClick={ShowDate}
                />
            </label>
        </span>
    </div>
}

