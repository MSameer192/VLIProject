import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesTiles.css'
const CoursesSlider = ({ CoursesInfo, CourseTiles, NavigateBtnClass, ClassNames, ShowMoreUrl }) => {
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])
    const [Btns, setBtns] = useState(document?.querySelectorAll(`.${NavigateBtnClass}Remove,.${NavigateBtnClass}`));

    useEffect(() => {
        if (Btns.length === 0) {
            setBtns(document?.querySelectorAll(`.${NavigateBtnClass}Remove,.${NavigateBtnClass}`));

        }
    }, [NavigateBtnClass, Btns,])

    return <div className='w-full h-fit relative mb-16 flex justify-center items-center flex-col gap-5 sm:gap-8 '>
        <div className='w-[95%] sm:w-full mx-2 mt-5 sm:flex items-center justify-center overflow-hidden'>
            <div
                style={{ left: -Size + "px" }}
                className={ClassNames}
            > 
                <CourseTiles CoursesInfo={CoursesInfo} setref={setref} />
            </div>
        </div>
        <div className='sm:hidden w-full flex justify-center gap-4'>
            {CoursesInfo.map((value, index) => {

                let Class = NavigateBtnClass
                if (index === 0) { Class = NavigateBtnClass } else { Class = NavigateBtnClass + "Remove" }

                return (
                    <span className={`w-5 h-5 rounded-[28px] bg-[#A1A3EF] cursor-pointer NavigateButton_DropShadow ${Class}`}
                        onClick={(e) => { Btn(e, Btns, NavigateBtnClass, setBtns); setSize(ref.offsetWidth * index); }}
                    >
                    </span>
                )
            })}

        </div>

        <Link to={ShowMoreUrl} className='Regularfont px-4 py-3 no-underline bg-[#A1A3EF] text-white cursor-pointer rounded-xl border-none text-4xs md:text-base ShowMoreBtn_BlackShadow'>
            Show More
        </Link>
    </div>
}

function Btn(e, BtnsArr, BtnClass, setBtns) {
    let ChildIndex = Array.from(BtnsArr).indexOf(e.target);


    for (let i = 0; i < BtnsArr.length; i++) {
        if (e.target === BtnsArr[i] && ChildIndex === i) {
            BtnsArr[i].classList.add(BtnClass)
            BtnsArr[i].classList.remove(BtnClass + "Remove")
        }
        else {
            BtnsArr[i].classList.add(BtnClass + "Remove")
            BtnsArr[i].classList.remove(BtnClass)
        }
    }
    setBtns(e.target.parentNode.childNodes)
}

export default CoursesSlider  