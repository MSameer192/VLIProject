import React, { useRef } from 'react'
import './SignUp.css';
import SignInLeftSide from './LeftSide';
import SigninRightSide from './RightSide';
import { useOutsideAlerter } from '../../Helpers/CustomHooks/useOutsideChecker';

const SignUp = ({ AuthPageName, setAuthPageName }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setAuthPageName);
    return (
        <>
            <div className='bg-[#00000037] h-[100%] fixed top-0 w-full z-50 overflow-scroll overflow-x-hidden flex justify-center items-center'>
                <div className=' h-screen w-[95%] flex flex-col justify-center items-center mt-28 '
                    ref={wrapperRef}
                >
                    <div className='w-full BG_Image h-80 overflow-hidden'>

                        <div
                            className='w-full h-80 bg-[#00000070]'
                        >

                        </div>
                    </div>

                    <div className='bg-white w-full flex flex-col justify-between items-center h-auto pb-8'>
                        <div className='w-full flex h-full'>
                            <SignInLeftSide AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
                            <CenterORline />
                            <SigninRightSide AuthPageName={AuthPageName} setAuthPageName={setAuthPageName} />
                        </div>

                        <SubmitButton AuthPageName={AuthPageName} />
                    </div>

                </div>
            </div>
        </>
    )
}

function CenterORline() {
    return <span className='h-full relative justify-center items-center flex '>
        <hr className=' h-[70%] relative -top-[3%]' />
        <span className='w-16 h-16 p-2 absolute top-1/2 -translate-y-1/2 text-center border-[#707070] border-[1px] border-solid text-[30px] bg-[#A1A3EF] text-white Regularfont rounded-[32px]'>OR</span>
    </span>
}

function SubmitButton({ AuthPageName }) {
    return <span className='relative flex justify-center w-4/5 max-w-[575px]'>
        <img
            className='absolute -top-[111px] left-[200px]'
            src={require("./Assets/Sign up Avater.png")} alt="" />
        <button className='bg-[#A1A3EF] Regularfont text-base text-white cursor-pointer border-none rounded-[42px] py-6 w-full  ' type="submit">
            {AuthPageName}
        </button>
    </span>
}
export default SignUp