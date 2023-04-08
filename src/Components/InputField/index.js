import { CheckString } from "../../Helpers/TypeChecker/CheckString";

const InputField = ({
  Label,
  Placeholder,

  onChange,
  Err,
  value,
  Container,
  TextStyle,
  ResponsiveInpuyStyle,
  name,
  ...rest
}) => {
  if (!Container)
    Container = "w-full md:w-[45%] flex flex-col max-w-[600px] gap-3";

  if (!TextStyle) TextStyle = "text-3xs md:text-2xs xl:text-xs";

  if (!ResponsiveInpuyStyle)
    ResponsiveInpuyStyle = "text-5xs md:text-4xs lg:text-3xs";

  const Border = "border-[#E2E2E2] border-[1px] border-solid";
  return (
    <div className={Container}>
      <label htmlFor={name} className={TextStyle}>
        {Label}
      </label>

      <h4 className="text-right text-4xs font-normal text-[red]">
        {Err ? (CheckString(Err) ? Err : `${Label} is required`) : null}
      </h4>

      <input
        name={name}
        type="text"
        placeholder={Placeholder}
        className={`rounded-md py-2  px-4 ${Border} shadow-[4px_5px_6px_#00000029] ${ResponsiveInpuyStyle}`}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputField;
