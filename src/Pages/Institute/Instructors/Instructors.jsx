import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../../Actions/Base";
import {
  GetInstituteInstructorsA,
  GetInstructorsA,
} from "../../../Actions/InstructorA";
import InstituteTemplate from "../../../Components/InstituteTemplate/InstituteTemplate";
import { InstructorRowTemplate } from "../../../Components/InstructorTemplate/InstructorTemplate";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import NoDataResponse from "../../../Components/NoDataResponse";
import useCheckLogin from "../../../Helpers/CustomHooks/CheckLogin";
import TeacherFilter from "./Components/TeacherFilter";
import "./InstructorsList.css";

const InstructorsListChild = () => {
  const { Instructors, loading } = useSelector(
    (Store) => Store.InstructorReducer
  );
  const [MaxHeight, setMaxHeight] = useState("max-h-[0px]");
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(GetInstituteInstructorsA());
  }, [Dispatch]);
  useCheckLogin(true, ["Institute"], ["Staff", "Admin"]);

  return (
    <div className="w-11/12 bg-white mt-16 rounded-[35px]">
      <div className="flex w-full items-center flex-col sm:flex-row px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16">
        <div className="text-[#174A84] w-full sm:w-1/5 md:w-1/4  text-3xs lg:text-2xs xl:text-xs Boldfont text-center sm:text-left">
          Instructors
        </div>
        <div className="flex justify-between sm:justify-end w-full sm:w-4/5 md::w-3/4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          <Link to="/Instructor/add" className="InstructorPageBtns px-4 ">
            Add a New Instructor
          </Link>
          <span
            className="InstructorPageBtns  relative"
            onMouseEnter={() => setMaxHeight("max-h-[1000px]")}
            onMouseLeave={() => setMaxHeight("max-h-[0px]")}
          >
            Filter Instructor
            <TeacherFilter MaxHeight={MaxHeight} />
          </span>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : Instructors?.length === 0 ? (
        <NoDataResponse
          topText="Sorry, there are no instructors to show!"
          bottomText="Admin/Institute can add instructors by click on 'Add a New Instructor' button."
        />
      ) : (
        <table className="addCourse4Table">
          <thead>
            <tr>
              <th className="px-3 text-start w-[5%]">S.no</th>
              <th className="text-center w-[3%]"></th>
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
              const { ClientsTraining, Status, StudentsTraining } =
                value.Instructor;
              const PaymentOrClientsColor =
                !ClientsTraining || ClientsTraining === 0
                  ? "text-[green] bg-[#aaffbe]"
                  : "text-white bg-[#b5aaff]";
              const StatusColor = !Status
                ? "text-[green] bg-[#aaffbe]"
                : "text-white bg-[#b5aaff]";

              const Edit = () => (
                <Link
                  to={`/instructor/update/${value.Instructor.InstructorId}`}
                >
                  <img src={require("./Assets/Edit.svg").default} alt="Edit" />
                </Link>
              );

              const ImageUrl = `${BaseUrl}/Instructors/images?url=${value?.Instructor?.ProfileImage}`;
              console.log(
                value?.Instructor?.TimeTable,
                !Status ? "free" : Status
              );
              return (
                <InstructorRowTemplate
                  key={value.Instructor.InstructorId}
                  value={value}
                  index={index}
                  FirstName={value.FirstName}
                  Email={value.Email}
                  LastName={value.LastName}
                  Status={!Status ? "free" : Status}
                  createdAt={value.Instructor.createdAt}
                  ClientsTraining={value.Instructor.ClientsTraining}
                  PaymentOrUnderClients={
                    !StudentsTraining ? "free" : StudentsTraining
                  }
                  ImgUrl={ImageUrl}
                  PaymentOrClientsColor={PaymentOrClientsColor}
                  StatusColor={StatusColor}
                  LastComp={Edit}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const InstructorsList = () => (
  <InstituteTemplate
    Element={InstructorsListChild}
    bg="bg-[#F7F7F7] min-h-screen items-center"
  />
);

export default InstructorsList;
