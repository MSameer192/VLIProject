import React, { useState } from 'react'
import { useEffect } from 'react';
import BuyingSide from './BuyingSide';
import CourseAboutSide from './CourseAboutSide';

const CourseDetails = () => {
    const [ButtonsParent, setButtonsParent] = useState();


    let [CourseDetailsNavigateBtns, setCourseDetailsNavigateBtns] = useState([]);
    useEffect(() => {
        if (ButtonsParent) {
            setCourseDetailsNavigateBtns(ButtonsParent.getElementsByClassName("CourseDetailsNavigateBtns"));
        }
    }, [ButtonsParent])

    for (let i = 0; i < CourseDetailsNavigateBtns.length; i++) {

        CourseDetailsNavigateBtns[i]?.addEventListener("click", function (e) {

            for (let j = 0; j < CourseDetailsNavigateBtns.length; j++) {

                if (CourseDetailsNavigateBtns[j].innerHTML === this.innerHTML) {

                    CourseDetailsNavigateBtns[j].classList.add("ButtonBorder")
                    CourseDetailsNavigateBtns[j].classList.remove("border-none")
                } else {
                    CourseDetailsNavigateBtns[j].classList.remove("ButtonBorder");
                    CourseDetailsNavigateBtns[j].classList.add("border-none")
                }
            }

        })

    }
    return (

        <div className='w-full flex justify-center'>
            <div className='flex flex-col items-center w-full'>
                <div className='w-full sm:w-11/12 flex gap-10'>
                    <BuyingSide />
                    <CourseAboutSide setButtonsParent={setButtonsParent} />

                </div>
                <h3 className='text-[38px] text-white PrintBoldfont'>Instructors</h3>
            </div>
        </div>


    )
}


export default CourseDetails