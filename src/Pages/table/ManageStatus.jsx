import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import editIcon from "./table-icons/editIconTable.svg";
import deleteIcon from "./table-icons/deleteIconTable.svg";

function ManageStatusChild() {
  return (
    <div className="w-[58%] pb-[70px] bg-white rounded-[19px] tableContainer">
      <div className="w-full pl-[70px] pr-[69px] pt-[20px] flex justify-between tableContainerTop">
        <p className="text-[#C4C4C4] text-[1.1vw] leading-[21px] tableSubHeading">
          09 Aug 2022
        </p>
        <CancelIcon
          style={{ height: "30px", width: "30px" }}
          className="w-[3vw] h-[2.7vw] text-[#A1A3EF] cancelIconTable"
        />
      </div>
      <div className="text-center -mt-4">
        <h5 className="text-[1.14vw] font-medium tableHeading">
          Manage Available Status
        </h5>
        <p className="text-[1.1vw] font-normal tableSubHeading mt-1">
          Schedule Test
        </p>
      </div>
      {/* ......... */}

      <div className="w-[100%] px-[40px] tableItself mt-[30px]">
        <table className="table-auto mx-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-[1.1vw] font-normal tableHeadText">
                Type
              </th>
              <th className="px-4 py-2 text-[1.1vw] font-normal tableHeadText">
                From
              </th>
              <th className="px-4 py-2 text-[1.1vw] font-normal tableHeadText">
                To
              </th>
              <th className="px-4 py-2 text-[1.1vw] font-normal tableHeadText">
                Current Status
              </th>
              <th className="px-4 py-2 text-[1.1vw] font-normal tableHeadText">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-grey-light">
              <td className=" flex items-center text-center pt-[23px] pb-[41px] justify-around">
                <input
                  type="radio"
                  name="radioFortable"
                  className="w-[2.4vw] h-[1.4vw] tableRadioBtn"
                />
                <span className="text-[0.9vw] tableText">Hourly</span>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="text-[0.9vw] tableText">Unavailable</span>
              </td>
              <td className="px-4 py-2 text-center flex justify-center">
                <img
                  src={editIcon}
                  className="w-[1vw] h-fit mr-2 tableActionIcon"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="w-[1vw] h-[1vw] tableActionIcon"
                  alt=""
                />
              </td>
            </tr>
            <tr className="border border-grey-light">
              <td className=" flex items-center text-center pt-[23px] pb-[41px] justify-around">
                <input
                  type="radio"
                  name="radioFortable"
                  className="w-[2.4vw] h-[1.4vw] tableRadioBtn"
                />
                <span className="text-[0.9vw] tableText">Weekly</span>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="text-[0.9vw] tableText">Unavailable</span>
              </td>
              <td className="px-4 py-2 text-center flex justify-center">
                <img
                  src={editIcon}
                  className="w-[1vw] h-fit mr-2 tableActionIcon"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="w-[1vw] h-[1vw] tableActionIcon"
                  alt=""
                />
              </td>
            </tr>
            <tr className="border border-grey-light">
              <td className=" flex items-center text-center pt-[23px] pb-[41px] justify-around">
                <input
                  type="radio"
                  name="radioFortable"
                  className="w-[2.4vw] h-[1.4vw] tableRadioBtn"
                />
                <span className="text-[0.9vw] tableText">Daily</span>
              </td>

              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="text-[0.9vw] tableText">9 Sept, 2022</div>
                <div className="text-[0.9vw] tableText">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="text-[0.9vw] tableText">Unavailable</span>
              </td>
              <td className="px-4 py-2 text-center flex justify-center">
                <img
                  src={editIcon}
                  className="w-[1vw] h-fit mr-2 tableActionIcon"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="w-[1vw] h-[1vw] tableActionIcon"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ........... */}
    </div>
  );
}

const ManageStatus = ({ m_top }) => {
  if (!m_top) m_top = "mt-20";

  return (
    <div
      className={`flex flex-col items-center ml-0 ${m_top} sm:ml-24 w-full sm:w-[calc(100%-96px)]`}
    >
      <ManageStatusChild />
    </div>
  );
};
export default ManageStatus;
