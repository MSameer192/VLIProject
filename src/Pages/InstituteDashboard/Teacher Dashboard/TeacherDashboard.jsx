import React, { useEffect } from 'react'
import './TeacherDashboard.css';
import DashboardTop from './Components/DashboardTop/DashboardTop.jsx';
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux';
import { GetInstructorStudents } from '../../../Actions/InstructorA';
import { GetLocalStorage } from '../../../Helpers/LocalStorage/LocalStorage';
const TeacherDashboard = () => {
    const Dispatch = useDispatch();
    const { Students } = useSelector(Store => Store?.InstructorReducer)
    const InstructorId = GetLocalStorage("UserInfo")?.Instructor?.InstructorId;
    useEffect(() => {
        if (InstructorId)
            Dispatch(GetInstructorStudents(InstructorId))
    }, [Dispatch, InstructorId])
    return (
        <div className="flex flex-col items-center w-full">
            <DashboardTop />
            <div className='w-[95%] bg-[#FFFFFF] flex flex-col gap-16 px-16 py-8'>
                <div>
                    <h3 className='Boldfont text-xs text-[#174A84]'>Students</h3>
                </div>
                <table className=''>
                    <thead>
                        <tr>

                            <th className="text-[#174A84] font-normal text-2xs text-center w-[3%]">Name</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[10%]" ></th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[16.5%]">Email</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[14%]">Status</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[9%]">Joining Date</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[16%]">Next Class</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[8%]">Total Classes</th>
                            <th className="text-[#174A84] font-normal text-2xs text-center w-[3.5%]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Students?.map((value) => {

                            return <InstructorRowTemplate
                                FirstName
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export const InstructorRowTemplate = ({ FirstName, LastName, Status, createdAt, Email, LastComp, StatusColor, NextClass, PaymentOrClientsColor, OnClick, TrStyle, ImgUrl }) => {



    return <tr onClick={OnClick} className={`${TrStyle} [&>*]:text-[#174A84] [&>*]:text-2xs`}>
        <td className="text-center"><img className="addCourseinstructorImg" src={ImgUrl} alt="instructor1" /></td>
        <td className="text-center">{FirstName} {LastName}</td>
        <td className="text-center">{Email}</td>

        <td className="text-center">
            <div className={`addCourse4Status ${StatusColor}`}
            >
                {Status}
            </div>
        </td>

        <td className="text-center">
            {dayjs(new Date(createdAt)).format('DD/MM/YYYY')}
        </td>


        <td className="text-center relative">
            <div className={`addCourse4Status ${PaymentOrClientsColor}`}
            >
                {NextClass}
            </div>
        </td>



        <td className="text-center">04/10</td>
        <td className="text-center">
            {LastComp ? <LastComp /> : null}
        </td>
    </tr>
}

export default TeacherDashboard