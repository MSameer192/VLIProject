import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import InstituteDocuments from './InstituteSide/InstituteCredentials/InstituteDocuments'
import InstituteInfo from './InstituteSide/InstituteCredentials/InstituteInfo'
import InstituteTimings from './InstituteSide/InstituteTimings/InstituteTimings'
import InstituteUserInfo from './InstituteSide/InstituteUserInfo/InstituteUserInfo'
import { CenterORline } from './UserSigning'

const InstituteSide = () => {
    const [LeftPosition, setLeftPosition] = useState();

    const OnClickFunction = (Position) => setLeftPosition(Position)

    const DocumentRef = useRef();
    const UserInfoRef = useRef()
    return (
        <div className='w-full h-fit flex items-start overflow-hidden'>
            <div
                style={{ left: `-${LeftPosition}%` }}
                className='min-w-[300%] flex items-start relative left-0 duration-300'>
                <div className='w-[33.33%] flex items-center' ref={DocumentRef} >
                    <InstituteDocuments />
                    <CenterORline Visible={false} />
                    <InstituteInfo OnClickFunction={OnClickFunction} Position={100} DocumentRef={DocumentRef} UserInfoRef={UserInfoRef} />
                </div>


                <div className='w-[33.33%]  items-center justify-center hidden' ref={UserInfoRef}>
                    <InstituteUserInfo OnClickFunction={OnClickFunction} Position={200} />
                </div>
                
                
                <div className='w-[33.33%]  items-center justify-center flex flex-col'>
                    <InstituteTimings OnClickFunction={OnClickFunction} Position={200} />
                </div>
            </div>

        </div>


    )
}

export default InstituteSide