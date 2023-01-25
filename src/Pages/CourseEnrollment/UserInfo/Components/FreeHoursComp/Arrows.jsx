import { useState } from "react";

function Arrow({ ArrowColor, Rotate }) {
    return <svg xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer  w-5 h-[10px] ${Rotate}`} viewBox="0 0 18 9">
        <path id="Icon_ionic-md-arrow-dropright" style={{ "fill": ArrowColor ? "#dfdfdf" : "#818181", transition: "50ms" }} data-name="Icon ionic-md-arrow-dropright" d="M13.5,9l9,9-9,9Z" transform="translate(-9 22.5) rotate(-90)" fill="#dfdfdf"
        />
    </svg>

}

export function Arrows({ OnIncrease, OnDecrease, FreeTime, GetFocused, setFreeTime }) {
    const [ArrowColor, setArrowColor] = useState({ Up: true, Down: true });
    return <>
        <span className='cursor-pointer  absolute -top-3'
            onClick={() => {
                setArrowColor({ ...ArrowColor, Up: false });
                setTimeout(() => { setArrowColor({ ...ArrowColor, Up: true }); }, 50)
                OnIncrease(FreeTime, GetFocused, setFreeTime)
            }}

        >
            <Arrow ArrowColor={ArrowColor.Up} Rotate="rotate-0" />
        </span>
        <span className='cursor-pointer  absolute -bottom-2'
            onClick={() => {
                setArrowColor({ ...ArrowColor, Down: false });
                setTimeout(() => { setArrowColor({ ...ArrowColor, Down: true }); }, 50)
                OnDecrease(FreeTime, GetFocused, setFreeTime)
            }}
        >
            <Arrow ArrowColor={ArrowColor.Down} Rotate="rotate-180" />
        </span>
    </>
}
