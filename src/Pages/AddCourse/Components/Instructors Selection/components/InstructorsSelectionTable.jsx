// react States
import React, { useEffect } from "react";

// css
import '../../CourseSelection/CourseSelection.css';
import { useDispatch, useSelector } from "react-redux";
import { GetInstituteInstructorsA } from "../../../../../Actions/InstructorA";
import { InstructorRowTemplate } from "../../../../../Components/InstructorTemplate/InstructorTemplate";
import { BaseUrl } from "../../../../../Actions/Base";

const InstructorsSelectionTable = ({ CourseData, setCourseData }) => {
    const Dispatch = useDispatch();
    const { Instructors } = useSelector(Store => Store.InstructorReducer);

    useEffect(() => {
        Dispatch(GetInstituteInstructorsA())
    }, [Dispatch])


    const OnChangeInstructor = (e, value) => {
        let NewInstrucorList = [...CourseData.Instructors]
        if (e.target.checked && NewInstrucorList.length < 6) {
            setCourseData({ ...CourseData, Instructors: [...NewInstrucorList, { InstructorFK: value.Instructor.InstructorId }] })
        }
        else if (!e.target.checked) {
            let RemovedInstructor = NewInstrucorList.filter(({ InstructorFK }) => InstructorFK !== value.Instructor.InstructorId)
            setCourseData({ ...CourseData, Instructors: [...RemovedInstructor] })
        }

    }

    const ReturnInstructor = (ValueInstructorId) => {
        let Instructor = CourseData.Instructors.filter(({ InstructorFK }) => InstructorFK === ValueInstructorId)
        if (Instructor.length === 1 && CourseData?.Instructors?.length <= 6)
            return true
        else return false
    }
   
    return (
        <div className="addCOurse4Table">
            <table className="addCourse4Table">
                <thead>
                    <tr>
                        <th className="px-3 text-start w-[5%]">S.no</th>
                        <th className="text-center w-[3%]" ></th>
                        <th className="text-center w-[10%]">Name</th>
                        <th className="text-center w-[16.5%]">Email</th>
                        <th className="text-center w-[14%]">Status</th>
                        <th className="text-center w-[9%]">Joining Date</th>
                        <th className="text-center w-[16%]">Under Training Clients</th>
                        <th className="text-center w-[8%]">Total Classes</th>
                        <th className="text-center w-[3.5%]"></th>
                    </tr>
                </thead>
                <tbody>

                    {Instructors?.map((value, index) => {

                        const { ClientsTraining, Status, StudentsTraining } = value.Instructor
                        const PaymentOrClientsColor = !ClientsTraining || ClientsTraining === 0 ? "text-[green] bg-[#aaffbe]" : "text-white bg-[#b5aaff]"
                        const StatusColor = !Status ? "text-[green] bg-[#aaffbe]" : "text-white bg-[#b5aaff]";

                        const InstructorCheckBox = () =>
                            <input type="checkbox" className="addCourse4CheckBox" id="" name="Instructors"
                                value={value.Instructor.InstructorId}
                                checked={ReturnInstructor(value.Instructor.InstructorId)}
                                onChange={e => OnChangeInstructor(e, value)}
                            />

                        const ImageUrl = `${BaseUrl}/Instructors/images?url=${value?.Instructor?.ProfileImage}`

                        return <InstructorRowTemplate
                            key={value.Instructor.InstructorId}
                            value={value} index={index}
                            FirstName={value.FirstName}
                            Email={value.Email}
                            LastName={value.LastName}
                            Status={!Status ? "free" : Status}
                            createdAt={value.Instructor.createdAt}
                            ClientsTraining={value.Instructor.ClientsTraining}
                            PaymentOrUnderClients={!StudentsTraining ? "free" : StudentsTraining}
                            ImgUrl={ImageUrl}
                            PaymentOrClientsColor={PaymentOrClientsColor}
                            StatusColor={StatusColor}
                            LastComp={InstructorCheckBox}
                        />
                    }
                    )}

                </tbody>
            </table>
        </div>
    )
}



export default InstructorsSelectionTable;
