import React, { useEffect, useState } from "react";
import InstituteTemplate from "../../../Components/InstituteTemplate/InstituteTemplate";
import ClientInfo from "../CourseProgress (Institute)/Components/ClientInfo";
import CourseInstructors from "./Components/CourseInstructors/CourseInstructors";
import StudentTimeTable from "./Components/StudentTimeTable/StudentTimeTable";
import InstructorSlider from "./Components/ManageStudentCarousel/ManageStudentCarousel";
import { useDispatch, useSelector } from "react-redux";
import { CreateScheduleA, GetClassScheduleA } from "../../../Actions/StudentA";
import { useParams } from "react-router-dom";
import { GetAboutInfoA } from "../../../Actions/CourseA";
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import StudentScheduleTimeTable from "./Components/StudentPreferreTimeTable/StudentPreferreTimeTable";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import MyCourses from "../../../Components/MyCourses/MyCourses";
import { InsEnrolledCourseButtons } from "../../../PageNames";

function ManageNewStudentChild() {
  const Dispatch = useDispatch();
  const { EnrollmentId } = useParams();
  const { Student, ScheduleTimeTable, loading } = useSelector(Store => Store.StudentReducer);
  const [Events, setEvents] = useState([]);
  const [StudentPrefrredTimeTable, setStudentPrefrredTimeTable] = useState([])
  const [OneInstructor, setOneInstructor] = useState();
  const [ShowSlider, setShowSlider] = useState({
    InstructorType: "",
    Show: false
  })

  const [Instructors, setInstructors] = useState([undefined, undefined, undefined])
  const ClassType = [
    { id: "Driving", text: "Driving" },
    { id: "Online", text: "Online" },
    { id: "InClass", text: "InClass" },
  ]
  useEffect(() => {
    if (EnrollmentId) {
      Dispatch(GetClassScheduleA(EnrollmentId))
      Dispatch(GetAboutInfoA(EnrollmentId))
    }
  }, [Dispatch, EnrollmentId])

  useCheckLogin(true, ["Institute"], ["Staff", "Admin"])
  useEffect(() => {
    if (ScheduleTimeTable) {
      const EditAble = JSON.parse(JSON.stringify(ScheduleTimeTable))
      setStudentPrefrredTimeTable(

        [...EditAble.map(value => {

          value.startDate = new Date(value.start)
          value.endDate = new Date(value.end)
          value.allDay = false
          value.description = ""
          value.text = ""
          return value
        })]
      )
    }
  }, [ScheduleTimeTable])

  return (
    !loading ?
      <div className="w-full flex flex-col items-center pt-16">
        <ClientInfo Student={Student} />
        <CourseInstructors ShowSlider={ShowSlider} setShowSlider={setShowSlider}
          Instructors={Instructors}
          setOneInstructor={setOneInstructor} OneInstructor={OneInstructor}
        />

        <StudentScheduleTimeTable
          Events={StudentPrefrredTimeTable}
          setEvents={setStudentPrefrredTimeTable}
        />

        <StudentTimeTable
          StudentInfo={Student}
          Events={Events} setEvents={setEvents}
          Resources={[
            { fieldExpr: "InstructorFK", dataSource: [...Instructors] },
            { fieldExpr: "ClassType", dataSource: [...ClassType] },
          ]
          }
          Edit={true}
          SubmitSchedule={() => SubmitData(Events, Dispatch, Instructors, OneInstructor, EnrollmentId)}
        />


        {ShowSlider?.Show
          ? <InstructorSlider
            setInstructors={setInstructors} Instructors={Instructors}
            ShowSlider={ShowSlider} setShowSlider={setShowSlider} InstructorType={ShowSlider?.InstructorType}
            Events={Events} setEvents={setEvents}
            SubmitSchedule={() => SubmitData(Events, Dispatch, Instructors, OneInstructor)}
          /> : null}


      </div>
      : <LoadingSpinner Bg="white" Width="full" Height="screen" Left="0" Position="fixed" />

  );
}







const SubmitData = (Events, Dispatch, Instructors, OneInstructor, EnrollmentId) => {

  let AssignedInstructors = []

  // for (const [key, value] of Object.entries(Instructors)) {
  //   if (!OneInstructor)
  //     AssignedInstructors.push({ InstructorFK: value?.InstructorFK, EnrollmentFK: EnrollmentId });

  //   else if (OneInstructor) {
  //     if (key === "Driving")
  //       AssignedInstructors.push({ InstructorFK: value?.InstructorFK, EnrollmentFK: EnrollmentId });
  //   }
  // }
  Instructors.forEach(element => {
    if (!OneInstructor && element?.InstructorFK)
      AssignedInstructors.push({ InstructorFK: element?.InstructorFK, EnrollmentFK: EnrollmentId });

    else if (OneInstructor && element.InstructorType === "Driving" && element?.InstructorFK)
      AssignedInstructors.push({ InstructorFK: element?.InstructorFK, EnrollmentFK: EnrollmentId });
  });
  Events = Events.map(value => {
    value.EnrollmentFK = EnrollmentId
    return value
  })
  Dispatch(CreateScheduleA({ Events: Events, AssignedInstructors }))
}

const ManageNewStudentPage = () => <MyCourses ButtonsInfo={InsEnrolledCourseButtons} PageName="PaymentSetting" Component={ManageNewStudentChild}  />

const ManageNewStudent = () => <InstituteTemplate Element={ManageNewStudentPage} m_top="mt-0" bg="bg-[#F0F0F7]" />

export default ManageNewStudent;