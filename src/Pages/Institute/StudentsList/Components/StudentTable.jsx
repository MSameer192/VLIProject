import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { InstructorRowTemplate } from "../../../../Components/InstructorTemplate/InstructorTemplate";

function StudentTable({ Students }) {
  const Navigate = useNavigate();
  return (
    <>
      <table className="addCourse4Table">
        <thead>
          <tr>
            <th className="px-3 text-start w-[5%]">S.no</th>
            <th className="text-center w-[3%]"></th>
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

            const PaymentOrClientsColor =
              !PaymentStatus === 0
                ? "text-[green] bg-[#aaffbe]"
                : "text-white bg-[#b5aaff]";
            const StatusColor = !Status
              ? "text-[green] bg-[#aaffbe]"
              : "text-white bg-[#b5aaff]";
            const PaymentMethod =
              "Installments | " +
              CoursePackage.InstallmentSchedule +
              " | " +
              CoursePackage.Installments;
            const OnClick = () => {
              Navigate(`/enrolledcourse/${EnrollmentId}`);
            };
            const Edit = () => (
              <Link to={`/enrolledcourse/${EnrollmentId}`}>
                <img
                  src={require("../../Instructors/Assets/Edit.svg").default}
                  alt="Edit"
                />
              </Link>
            );

            return (
              <InstructorRowTemplate
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default StudentTable;
