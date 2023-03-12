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
import ClassScheduler from "../../../Components/Scheduler/Scheduler";

function ManageNewStudentChild() {
  const Dispatch = useDispatch();
  const { EnrollmentId } = useParams();
  const { Student, ScheduleTimeTable } = useSelector(Store => Store.StudentReducer);
  const [Events, setEvents] = useState([]);
  const [StudentPrefrredTimeTable, setStudentPrefrredTimeTable] = useState([])
  const [OneInstructor, setOneInstructor] = useState();
  const [ShowSlider, setShowSlider] = useState({
    InstructorType: "",
    Show: false
  })
  // console.log(ShowSlider)
  const [Instructors, setInstructors] = useState({
    "Driving": { InstructorFK: "" },
    "Online": { InstructorFK: "" },
    "InClass": { InstructorFK: "" }
  })

  useEffect(() => {
    if (EnrollmentId) {
      Dispatch(GetClassScheduleA(EnrollmentId))
      Dispatch(GetAboutInfoA(EnrollmentId))
    }
  }, [Dispatch, EnrollmentId])

  useCheckLogin(true, ["Institute"], ["Staff", "Admin"])
  useEffect(() => {
    if (ScheduleTimeTable)
      setStudentPrefrredTimeTable([...ScheduleTimeTable?.map(value => value)])
  }, [ScheduleTimeTable])


  return (
    <div className="w-full flex flex-col items-center pt-16">
      <ClientInfo Student={Student} />
      <CourseInstructors ShowSlider={ShowSlider} setShowSlider={setShowSlider} Instructors={Instructors}
        setOneInstructor={setOneInstructor} OneInstructor={OneInstructor} />

      {StudentPrefrredTimeTable.length > 0 ? <ClassScheduler Events={StudentPrefrredTimeTable} setEvents={() => { }} /> : null}

      <StudentTimeTable StudentInfo={Student} Events={Events} setEvents={setEvents}
        SubmitSchedule={() => SubmitData(Events, Dispatch, Instructors, OneInstructor, EnrollmentId)}
      />
 
      {ShowSlider?.Show
        ? <InstructorSlider
          setInstructors={setInstructors} Instructors={Instructors}
          ShowSlider={ShowSlider} setShowSlider={setShowSlider} InstructorType={ShowSlider?.InstructorType}
          Events={Events} setEvents={setEvents} SubmitSchedule={() => SubmitData(Events, Dispatch, Instructors, OneInstructor)}
        /> : null}


    </div>

  );
}







const SubmitData = (Events, Dispatch, Instructors, OneInstructor, EnrollmentId) => {

  const NewEvents = [...Events.map((EventValue,) => {
    // console.log(EventValue?.ClassType)
    for (const [key, value] of Object.entries(Instructors)) {
      console.log(EventValue?.InstructorFK, value?.InstructorFK)
      if (!OneInstructor) {
        if (key === EventValue?.ClassType)
          EventValue.InstructorFK = value?.InstructorFK;
      }
      else if (OneInstructor) {
        if (key === "Driving")
          EventValue.InstructorFK = value?.InstructorFK;
      }

    }
    return EventValue
  })]
  let AssignedInstructors = []

  for (const [key, value] of Object.entries(Instructors)) {
    if (!OneInstructor)
      AssignedInstructors.push({ InstructorFK: value?.InstructorFK, EnrollmentFK: EnrollmentId });

    else if (OneInstructor) {
      if (key === "Driving")
        AssignedInstructors.push({ InstructorFK: value?.InstructorFK, EnrollmentFK: EnrollmentId });
    }
  }


  Dispatch(CreateScheduleA({ Events: NewEvents, AssignedInstructors }))
}



const ManageNewStudent = () => <InstituteTemplate Element={ManageNewStudentChild} m_top="mt-0" bg="bg-[#F0F0F7]" />

export default ManageNewStudent;