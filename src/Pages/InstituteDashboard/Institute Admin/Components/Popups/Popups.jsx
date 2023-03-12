import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SocketContext } from '../../../../../App'
import './Popups.css'
const Popups = ({ setEdit, InstituteCourseId }) => {
    const [Response, setResponse] = useState()
    const { UserInfo } = useSelector(Store => Store.LoginSignupReducer)
    const Socket = useContext(SocketContext);



    const Close = () => setEdit(false)

    const RejectResponse = () => setResponse("reject")
    
    const ApproveResponse = () => {
        setResponse("approve")
        Socket.emit("ApproveCourse",{InstituteCourseId, InstituteId: UserInfo?.Institute?.InstituteId})
    }
    return (
        <div className='fixed w-screen h-screen bg-[#00000029] flex justify-center items-center left-0 top-0 z-30'>
            {!Response ? <ResponsePopup Close={Close} RejectResponse={RejectResponse} ApproveResponse={ApproveResponse} /> : null}
            {Response === "reject" ? <Reject Close={Close} InstituteCourseId={InstituteCourseId} /> : null}
            {Response === "approve" ? <Approved InstituteCourseId={InstituteCourseId} setEdit={setEdit} /> : null}

        </div>
    )
}

const ResponsePopup = ({ Close, RejectResponse, ApproveResponse }) => {


    return <div className='CourseResponsePopupContainer items-center gap-3 pb-7'>
        <img className='absolute top-2 right-5 h-[22px] cursor-pointer' src={require('./Assets/Cross.svg').default} alt=""
            onClick={Close}
        />
        <div className='text-xs text-center'>Change status</div>
        <img src={require('./Assets/Approve.svg').default} alt="" />
        <div className='text-3xs text-center'>Action needed</div>
        <div className='flex w-full justify-center gap-6'>
            <button className='ApprovePopupBtn bg-[#F13535] '
                onClick={RejectResponse}>
                Reject
            </button>
            <button className='ApprovePopupBtn bg-[#6CFF75]'
                onClick={ApproveResponse}>
                Approve
            </button>
        </div>


    </div>
}
const Reject = ({ Close, InstituteCourseId }) => {
    const { UserInfo } = useSelector(Store => Store.LoginSignupReducer)
    const Socket = useContext(SocketContext);
    const [Reason, setReason] = useState()
    const SubmitRejection = () => {
        Socket.emit("RejectCourse", { PublishResponse: Reason, InstituteCourseId, InstituteId: UserInfo?.Institute?.InstituteId })
        Close()
    }
    return <div className='CourseResponsePopupContainer px-9 py-7 gap-4'>
        <img className='absolute top-2 right-5 h-[22px] cursor-pointer' src={require('./Assets/Cross.svg').default} alt=""
            onClick={Close}
        />
        <div className='text-black text-2xs'>Rejection Reason</div>
        <label htmlFor="RejectionReason" className='text-black text-3xs'>Enter a rejection reason for the staff. </label>
        <textarea id='RejectionReason' className='w-full resize-none text-[17px] px-3' rows="4"
            placeholder='Enter a rejection reason for the staff.'
            onClick={e => setReason(e.target.value)}
        >
            Enter a rejection reason for the staff.
        </textarea>
        <div className='flex w-full justify-center gap-6'>
            <button className='ApprovePopupBtn bg-[#F13535] '
                onClick={Close}>
                Cancel
            </button>
            <button className='ApprovePopupBtn bg-[#6CFF75] '
                onClick={SubmitRejection} >
                Submit
            </button>
        </div>
    </div>
}
const Approved = ({ setEdit }) => {
    useEffect(() => {
        setTimeout(() => {
            setEdit(false)
        }, [1700])
    }, [setEdit])
    return <div className='flex px-5 py-6 gap-2 bg-white'>
        <img className='w-5' src={require('./Assets/Tick.svg').default} alt=""

        />
        <div className='text-[#4EC156] text-7xs'>SUBMITTED</div>

    </div>
}

export default Popups