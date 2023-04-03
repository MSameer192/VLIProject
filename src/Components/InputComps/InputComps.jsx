import { CheckString } from "../../Helpers/TypeChecker/CheckString";

const Container = "w-full md:w-[45%] flex flex-col max-w-[600px] gap-3";
const TextStyle = "text-3xs md:text-2xs xl:text-xs";
const ResponsiveInpuyStyle = "text-5xs md:text-4xs lg:text-3xs";

export const Input = ({ Label, Placeholder, Id, onChange, Err, State }) => {
    const Border = "border-[#E2E2E2] border-[1px] border-solid"
    return <div className={Container}>

        <label htmlFor={Id} className={TextStyle}>{Label}</label>

        <h4 className="text-4xs text-[red] text-right font-normal">
            {Err
                ? CheckString(Err)
                    ? Err
                    : `${Label} is required`
                : null
            }
        </h4>

        <input id={Id} type="text" placeholder={Placeholder}
            className={`py-2 px-4  rounded-md ${Border} shadow-[4px_5px_6px_#00000029] ${ResponsiveInpuyStyle}`}
            value={State}
            onChange={onChange} />

    </div>
}



export const InputWithImage = ({ Label, Placeholder, Id, onChange, Err, Src, State }) => {

    const AddParentStyle = (e) => e.target.parentNode.style = "border:2px solid black";
    const RemoveParentStyle = (e) => e.target.parentNode.style = ""

    return <div className={Container}>
        <label htmlFor={Id} className={TextStyle}>{Label}</label>

        <h4 className="text-4xs text-[red] text-right font-normal">  {Err
            ? CheckString(Err)
                ? Err
                : `${Label} is required`
            : null
        }</h4>

        <span className='flex py-2 px-4 rounded-md w-full border-[#E2E2E2] border-[1px] border-solid shadow-[4px_5px_6px_#00000029]'>
            <input id={Id} type="text" placeholder={Placeholder}
                className={`w-full border-none outline-none ${ResponsiveInpuyStyle}`}
                onFocus={AddParentStyle}
                onBlur={RemoveParentStyle}
                value={State}
                onChange={onChange} />

            <img src={Src} className="h-8" alt="" />
        </span>
    </div>
}
export const SelectList = ({ Label, Id, onChange, OptionsArr, defaultValue, Text, Err, State }) => {

    const Border = "border-[#E2E2E2] border-[1px] border-solid";
    
    return <div className={Container}>
        <label htmlFor={Id} className={TextStyle}>{Label}</label>

        <h4 className="text-4xs text-[red] text-right font-normal">  {Err
            ? CheckString(Err)
                ? Err
                : `${Label} is required`
            : null
        }</h4>

        <select className={`flex py-2 px-4 rounded-md w-full ${Border} shadow-[4px_5px_6px_#00000029] ${ResponsiveInpuyStyle}`}
            id={Id}
            value={State}
            onChange={onChange}
        >
            <option disabled value="">{Text}</option>

            {OptionsArr ? <OptionsArr /> : null}

        </select>
    </div>
}

