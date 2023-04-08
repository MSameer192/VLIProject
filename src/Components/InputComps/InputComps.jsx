import { CheckString } from "../../Helpers/TypeChecker/CheckString";

export const Input = ({
  Label,
  Placeholder,
  Id,
  onChange,
  Err,
  State,
  Container,
  TextStyle,
  ResponsiveInpuyStyle,
}) => {
  if (!Container)
    Container = "w-full md:w-[45%] flex flex-col max-w-[600px] gap-3";

  if (!TextStyle) TextStyle = "text-3xs md:text-2xs xl:text-xs";

  if (!ResponsiveInpuyStyle)
    ResponsiveInpuyStyle = "text-5xs md:text-4xs lg:text-3xs";

  const Border = "border-[#E2E2E2] border-[1px] border-solid";
  return (
    <div className={Container}>
      <label htmlFor={Id} className={TextStyle}>
        {Label}
      </label>

      <h4 className="text-right text-4xs font-normal text-[red]">
        {Err ? (CheckString(Err) ? Err : `${Label} is required`) : null}
      </h4>

      <input
        id={Id}
        type="text"
        placeholder={Placeholder}
        className={`rounded-md py-2  px-4 ${Border} shadow-[4px_5px_6px_#00000029] ${ResponsiveInpuyStyle}`}
        value={State}
        onChange={onChange}
      />
    </div>
  );
};

export const InputWithImage = ({
  Label,
  Placeholder,
  Id,
  onChange,
  Err,
  Src,
  State,
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
          value={State}
          onChange={onChange}
          name={name}
        />

        <img src={Src} className="h-8" alt="" />
      </span>
    </div>
  );
};

export const SelectList = ({
  Label,
  Id,
  onChange,
  OptionsArr,
  defaultValue,
  Text,
  Err,
  State,
  Container,
  TextStyle,
  ResponsiveInpuyStyle,
}) => {
  if (!Container)
    Container = "w-full md:w-[45%] flex flex-col max-w-[600px] gap-3";

  if (!TextStyle) TextStyle = "text-3xs md:text-2xs xl:text-xs";

  if (!ResponsiveInpuyStyle)
    ResponsiveInpuyStyle = "text-5xs md:text-4xs lg:text-3xs";

  const Border = "border-[#E2E2E2] border-[1px] border-solid";

  return (
    <div className={Container}>
      <label htmlFor={Id} className={TextStyle}>
        {Label}
      </label>

      <h4 className="text-right text-4xs font-normal text-[red]">
        {" "}
        {Err ? (CheckString(Err) ? Err : `${Label} is required`) : null}
      </h4>

      <select
        className={`flex w-full rounded-md py-2 px-4 ${Border} shadow-[4px_5px_6px_#00000029] ${ResponsiveInpuyStyle}`}
        id={Id}
        value={State}
        onChange={onChange}
      >
        <option disabled value="">
          {Text}
        </option>

        {OptionsArr ? <OptionsArr /> : null}
      </select>
    </div>
  );
};
