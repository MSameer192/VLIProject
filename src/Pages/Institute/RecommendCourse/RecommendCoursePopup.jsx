import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../../../App'

const RecommendCoursePopup = ({ CoursePK, setPopup }) => {

    const [Forward, setForward] = useState()

    return (
        <div className='flex w-screen h-screen items-center justify-center fixed top-0 left-0 z-20 bg-[#00000029]'>
            {Forward ? <ForwardInfo setPopup={setPopup} CoursePK={CoursePK} /> : null}

            {!Forward ? <AskForForward setPopup={setPopup} setForward={setForward} CoursePK={CoursePK} /> : null}
        </div>
    )
}


const AskForForward = ({ setPopup, setForward, CoursePK }) => {
    const ForwardCourse = () => {
        setForward(true)
    }
    const Navigate = useNavigate()
    return <div className='w-full max-w-[580px] bg-white flex flex-col items-center rounded-3xl relative overflow-hidden'>
        <img className='absolute top-5 right-6 cursor-pointer' src={require('./Recommend Course Cross.svg').default} alt=""
            onClick={(e) => { setPopup(false); e.stopPropagation() }}
        />
        <div className='text-[#4D4F5C] bg-[#F1F1F1] text-center text-xs py-5 SemiBold w-full'>
            Adding Course To Inventory
        </div>

        <div className='text-3xs text-[#4D4F5C] text-center max-w-[375px] SemiBold my-7'>
            You can add a new course by filling the forms
            by your self or can forward to Staff
        </div>

        <div className='flex gap-5 my-10 w-full justify-center' >
            <button className='BrandingButton text-white whitespace-nowrap text-3xs w-2/5 max-w-[205px] py-4 px-2 rounded-lg' type='button' onClick={ForwardCourse}>
                Forward to Staff
            </button>
            <button
                onClick={() =>
                    Navigate('/addcourse', { state: { CoursePK } })
                }

                className='BrandingButton no-underline text-white text-3xs whitespace-nowrap w-2/5 max-w-[205px] py-4 px-2 rounded-lg' type='button'>
                Fill requirements now
            </button>
        </div>
    </div>
}


const ForwardInfo = ({ setPopup, CoursePK }) => {
    const [Note, setNote] = useState();
    const Socket = useContext(SocketContext);
    const Send = (e) => {
        Socket.emit("RecommendCourse", { CoursePK: CoursePK, Note })
        setPopup(false);
        e.stopPropagation()
    }
    return <div className='w-full max-w-[580px] bg-white flex flex-col items-center rounded-3xl relative overflow-hidden'>
        <img className='absolute top-5 right-6 cursor-pointer' src={require('./Recommend Course Cross.svg').default} alt=""
            onClick={(e) => { setPopup(false); e.stopPropagation() }}
        />
        <div className='text-[#4D4F5C] bg-[#F1F1F1] text-center text-xs py-5 SemiBold w-full'>
            Adding Course To Inventory
        </div>

        <textarea name="" id="" cols="30" rows="4"
            className=' resize-none px-[22px] py-4 text-3xs w-4/5 mt-4 mb-6'
            placeholder={`1) Discount of 30 %
2) Provide an 2 Installment for this course
3) Course fee should be 450 $ max for full course.`}
            onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <div className='flex gap-5 mb-10 w-full justify-center'  >
            <button className='BrandingButton text-white whitespace-nowrap text-3xs w-2/5 max-w-[205px] py-4 px-2 rounded-lg' type='button'
                onClick={Send}
            >
                Send
            </button>
        </div>
    </div>
}

export default RecommendCoursePopup