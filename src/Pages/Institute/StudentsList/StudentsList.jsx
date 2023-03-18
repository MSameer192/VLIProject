import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetStudentsA } from '../../../Actions/StudentA'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import { InstructorRowTemplate } from '../../../Components/InstructorTemplate/InstructorTemplate'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import StudentFilter from './Components/StudentFilter'

const StudentsListChild = () => {
    const { Students } = useSelector(Store => Store?.StudentReducer);
    const [MaxHeight, setMaxHeight] = useState("max-h-[0px]")
    const Dispatch = useDispatch();
    const Navigate = useNavigate()
    useEffect(() => {
        Dispatch(GetStudentsA())
    }, [Dispatch])
    useCheckLogin(true, ["Institute"], ["Staff", "Admin"])
    return (
        <div className='w-11/12 bg-white mt-16 rounded-[35px]'>

            <div className='flex w-full px-16 items-center'>
                <div className='text-[#174A84] text-xs Boldfont w-1/4 '>
                    Students
                </div>
                <div className='flex w-3/4 justify-end gap-12'>

                    <span className='InstructorPageBtns  relative'
                        onMouseEnter={() => setMaxHeight("max-h-[1000px]")}
                        onMouseLeave={() => setMaxHeight("max-h-[0px]")}>

                        Filter Instructor

                        <StudentFilter MaxHeight={MaxHeight} />

                    </span>

                </div>

            </div>
            <table className="addCourse4Table">
                <thead>
                    <tr>
                        <th className="px-3 text-start w-[5%]">S.no</th>
                        <th className="text-center w-[3%]" ></th>
                        <th className="text-center w-[10%]">Name</th>
                        <th className="text-center w-[16.5%]">Email</th>
                        <th className="text-center w-[14%]">Status</th>
                        <th className="text-center w-[9%]">Joining Date</th>
                        <th className="text-center w-[16%]">Payment Method</th>
                        <th className="text-center w-[8%]">Total Classes</th>
                        <th className="text-center w-[3.5%]"></th>
                    </tr>
                </thead>
                <tbody>

                    {Students?.map((value, index) => {
                        const { CoursePackage, EnrollmentId } = value.CourseEnrollment;
                        const { PaymentStatus, Status } = value;

                        const PaymentOrClientsColor = !PaymentStatus === 0 ? "text-[green] bg-[#aaffbe]" : "text-white bg-[#b5aaff]"
                        const StatusColor = !Status ? "text-[green] bg-[#aaffbe]" : "text-white bg-[#b5aaff]";
                        const PaymentMethod = "Installments | " + CoursePackage.InstallmentSchedule + " | " + CoursePackage.Installments
                        const OnClick = () => { Navigate(`/enrolledcourse/${EnrollmentId}`) }
                        const Edit = () =>
                            <Link to={`/enrolledcourse/${EnrollmentId}`}>
                                <img src={require('../Instructors/Assets/Edit.svg').default} alt="Edit" />
                            </Link>

                        return <InstructorRowTemplate
                            OnClick={OnClick}
                            TrStyle="cursor-pointer"
                            key={value.UserId}
                            index={index}
                            LastComp={Edit}
                            FirstName={value.FirstName}
                            Email={value.Email}
                            LastName={value.LastName}
                            Status={!Status ? "New Enrollment" : Status}

                            createdAt={value.CourseEnrollment.createdAt}
                            PaymentOrUnderClients={!PaymentStatus ? PaymentMethod : "free"}

                            StatusColor={StatusColor}
                            PaymentOrClientsColor={PaymentOrClientsColor}
                        />
                    }
                    )}

                </tbody>
            </table>
        </div>
    )
}






const StudentsList = () => <InstituteTemplate Element={StudentsListChild} bg="bg-[#F7F7F7] min-h-screen items-center" />

export default StudentsList