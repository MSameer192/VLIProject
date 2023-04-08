import { CheckString } from "../../Helpers/TypeChecker/CheckString";

const InputWithIcon = ({
  Label,
  Placeholder,
  Id,
  onChange,
  Err,
  Src,
  value,
  Container,
  TextStyle,
  ResponsiveInpuyStyle,
  name,
}) => {
  if (!Container)
    Container = "w-full md:w-[45%] flex flex-col max-w-[600px] gap-3";

  if (!TextStyle) TextStyle = "text-3xs md:text-2xs xl:text-xs";

  if (!ResponsiveInpuyStyle)
    ResponsiveInpuyStyle = "text-5xs md:text-4xs lg:text-3xs";

  const AddParentStyle = (e) =>
    (e.target.parentNode.style = "border:2px solid black");
  const RemoveParentStyle = (e) => (e.target.parentNode.style = "");

  return (
    <div className={Container}>
      <label htmlFor={Id} className={TextStyle}>
        {Label}
      </label>

      <h4 className="text-right text-4xs font-normal text-[red]">
        {" "}
        {Err ? (CheckString(Err) ? Err : `${Label} is required`) : null}
      </h4>

      <span className="flex w-full rounded-md border-[1px] border-solid border-[#E2E2E2] py-2 px-4 shadow-[4px_5px_6px_#00000029]">
        <input
          id={Id}
          type="text"
          placeholder={Placeholder}
          className={`w-full border-none outline-none ${ResponsiveInpuyStyle}`}
          onFocus={AddParentStyle}
          onBlur={RemoveParentStyle}
          value={value}
          onChange={onChange}
          name={name}
        />

        <img src={Src} className="h-8" alt="" />
      </span>
    </div>
  );
};

export default InputWithIcon;
