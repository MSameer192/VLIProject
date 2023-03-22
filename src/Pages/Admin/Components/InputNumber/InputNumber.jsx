import './InputNumber.css'
const InputNumber = ({ Id, Placeholder, OnChange,State }) => {
    const AddParentStyle = (e) => e.target.parentNode.style = "border:2px solid #A1A3EF";
    const RemoveParentStyle = (e) => e.target.parentNode.style = "border:2px solid #a1a4ef00";

    const OnChangeFun = (e) => {
        if (e.target.value) {

        }
        OnChange(e)
    }
    return (

        <label className='NumberTextContainer' htmlFor={Id}>
            <input type="text" id={Id} className='NumberText' placeholder={Placeholder}
                value={State}
                onFocus={AddParentStyle}
                onBlur={RemoveParentStyle}
                onChange={OnChangeFun}
            />

            <span className='ArrowContainer'>
                <img className='UpArrow' src={require('./Assets/Arrow Head.svg').default} alt="" />
                <img className='DownArrow' src={require('./Assets/Arrow Head.svg').default} alt="" />
            </span>
        </label>

    )
}
export default InputNumber