import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { findDOMNode } from 'react-dom';
import './CourseInstitute.css'
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

        <div className='w-full bg-[#3E2663] flex justify-center'>
            <div className='w-11/12 flex gap-10'>
                <BuyingSide />

                <div className=''
                    ref={(e) => { setButtonsParent(e) }}
                >
                    <span className='flex gap-10 Border  [&>*]:text-2xs  [&>*]:SemiBold  [&>*]:text-white  [&>*]:bg-[#ffffff00]  [&>*]:cursor-pointer [&>*]:p-4'>
                        <button className='CourseDetailsNavigateBtns ButtonBorder'>About</button>
                        <button className='CourseDetailsNavigateBtns border-none'>Instructors</button>
                        <button className='CourseDetailsNavigateBtns border-none'>Syllabus</button>
                        <button className='CourseDetailsNavigateBtns border-none'>Vehicle Details</button>
                        <button className='CourseDetailsNavigateBtns border-none'>Reviews</button>
                    </span>

                    <div>
                        <h3 className='text-base text-white Boldfont'>Orem Ipsum Dolor Sit Amet, Consec</h3>
                        <p className='max-w-[1150px] text-white text-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicul
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
                            Lorem ipsum dolor sit amet,
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}
function BuyingSide() {
    let ButtonAsChildStyle = `[&>*]:text-white [&>*]:bg-[#A1A3EF] [&>*]:SemiBold [&>*]:text-[24px] 
                              [&>*]:text-center [&>*]:py-6 [&>*]:rounded-[9px] [&>*]:border-none 
                              [&>*]:px-10 [&>*]:cursor-pointer`


    return <div className='bg-white flex flex-col gap-9 px-12 py-14 rounded-[14px] relative -top-20 '>
        <div className=' flex flex-col gap-4'>
            <span className='[&>*]:SemiBold [&>*]:text-[#A1A3EF]'>
                <h3 className='text-[24px]'>Fee</h3>
                <h2 className='text-xl '>PKR 2000</h2>
            </span>
            <span className={`flex flex-col gap-5 ${ButtonAsChildStyle}`}>
                <button>Enroll for 2000/Rs </button>
                <button><img className='w-6' src={require('./Assets/DownloadIcon.svg').default} alt="" /> Download Curriculum</button>
            </span>
        </div>
        <hr className='w-full bg-[#707070] h-[1px]' />

        <div className='flex flex-col gap-10'>
            <h3 className='text-base SemiBold'>Course Outlines</h3>
            <span className='flex flex-col gap-8 [&>*]:flex [&>*]:items-center [&>*]:gap-4'>
                <span>
                    <img src={require('./Assets/BooksIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Books</h4>
                </span>
                <span>
                    <img src={require('./Assets/AssignmentsIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Assignments</h4>
                </span>
                <span>
                    <img src={require('./Assets/QuizIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Quiz</h4>
                </span>
            </span>
        </div>
    </div>
}
export default CourseDetails