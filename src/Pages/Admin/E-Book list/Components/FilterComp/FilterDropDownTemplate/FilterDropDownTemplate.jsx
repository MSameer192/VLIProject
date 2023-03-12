import DropDown from "../../../../../../Components/CustomDropdown/DropDown"

const FilterDropDownTemplate = ({ Title, DropDownOptions, Label, Name, onChange, StateValue, styles, SelectValueStyle }) => {
// console.log(StateValue)
    return <span className='flex flex-col'>
        <h3 className="text-4xs font-normal">{Title}</h3>
        <DropDown DropDownOptions={DropDownOptions} Label={Label} Name={Label} onChange={onChange}
            StateValue={StateValue} IconSrc="'./DropDown.svg'"
            styles="BookFilterDowpDown" TextStyle="text-4xs" SelectValueStyle={SelectValueStyle}
        />
    </span>
}
export default FilterDropDownTemplate