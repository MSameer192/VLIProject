import React from "react";
import { Link } from "react-router-dom";
import { GetLocalStorage } from "../../../../../../Helpers/LocalStorage/LocalStorage";
import "./LeftCards.css";

const LeftCards = () => {
  return (
    <div className="LeftCardsContainer">
      <div>
        <Link to="/students/list" className="StaffCards bg-white no-underline">
          <img
            className="w-[65px]"
            src={require("../Assets/Students.svg").default}
            alt=""
          />
          <div className="flex flex-col items-center gap-5">
            <h4 className="Boldfont text-center text-3xs text-[#6DBCDB] lg:text-4xs">
              Students
            </h4>
            <p className="text-xs font-normal text-black sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl">
              56
            </p>
          </div>

          <p className="max-w-[200px] text-center text-4xs text-[#707070]">
            10% More students have enrolled this month
          </p>
        </Link>
        {GetLocalStorage("UserInfo").InstituteUserType === "Staff" ? (
          <div className="StaffCards ClickNoCard">
            <img
              className="w-[30px]"
              src={require("../Assets/Cursor.svg").default}
              alt=""
            />
            <div className="flex flex-col items-center gap-5">
              <h4 className="Boldfont text-center text-5xs text-white lg:text-4xs">
                No of Clicks
              </h4>
              <p className="text-xs font-normal text-white sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl">
                1250
              </p>
            </div>

            <p className="max-w-[200px] text-center text-3xs text-white lg:text-4xs">
              25% increase in number of clicks
            </p>
          </div>
        ) : GetLocalStorage("UserInfo").InstituteUserType === "Admin" ||
          GetLocalStorage("UserInfo").User === "Admin" ? (
          <Link
            className="StaffCards ClickNoCard no-underline"
            to="/Admin/add-staff"
          >
            {GetLocalStorage("UserInfo").InstituteUserType === "Admin" && (
              <img
                // className="w-[30px]"
                src="./group-two.png"
                alt="staff"
                height={80}
                width={80}
              />
            )}
            {GetLocalStorage("UserInfo").InstituteUserType === "Staff" && (
              <img
                className="w-[30px]"
                src={require("../Assets/Dollar.svg").default}
                alt="sales"
              />
            )}

            <div className="flex flex-col items-center gap-5">
              <h4 className="Boldfont text-center text-3xs text-white lg:text-4xs">
                {(GetLocalStorage("UserInfo").InstituteUserType === "Admin" &&
                  "Add Staff") ||
                  (GetLocalStorage("UserInfo").InstituteUserType === "Staff" &&
                    "Sales")}
              </h4>
              <p className="text-xs font-normal text-white sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl">
                $ 30,400
              </p>
            </div>

            <p className="max-w-[200px] text-center text-3xs text-white lg:text-4xs">
              16 % increase in sales
            </p>
          </Link>
        ) : null}
      </div>

      <div>
        <Link
          to={"/vehicle/inventory"}
          className="StaffCards CarCard text-white no-underline"
        >
          <img
            className="w-[60px]"
            src={require("../Assets/Car.svg").default}
            alt=""
          />
          <div className="flex flex-col items-center gap-5">
            <h4 className="Boldfont text-center text-3xs text-white lg:text-4xs">
              Vehicle Inventory
            </h4>
            <p className="text-xs font-normal text-white sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl">
              27
            </p>
          </div>

          <p className="max-w-[200px] text-center text-3xs text-white lg:text-4xs">
            In Use = 5 <br />
            Broke Down = 2 <br />
            Available = 20
          </p>
        </Link>

        <Link
          to={"/Instructors/list"}
          className="StaffCards InstructorCard no-underline"
        >
          <img
            className="w-[60px]"
            src={require("../Assets/Instructor.svg").default}
            alt=""
          />
          <div className="flex flex-col items-center gap-5">
            <h4 className="Boldfont text-center text-3xs text-white lg:text-4xs">
              Instructors
            </h4>
            <p className="text-xs font-normal text-white sm:text-sm md:text-base lg:text-[29px] xl:text-lg 2xl:text-xl">
              23
            </p>
          </div>

          <p className="max-w-[200px] text-center text-3xs text-white lg:text-4xs">
            In Class = 5 <br />
            Un available = 2 <br />
            Available = 20
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LeftCards;
