import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import editIcon from "./table-icons/editIconTable.svg";
import deleteIcon from "./table-icons/deleteIconTable.svg";

function ManageStatusChild() {
  return (
    <div className="tableContainer w-[58%] rounded-[19px] bg-white pb-[70px]">
      <div className="tableContainerTop flex w-full justify-between pl-[70px] pr-[69px] pt-[20px]">
        <p className="tableSubHeading text-[1.1vw] leading-[21px] text-[#C4C4C4]">
          09 Aug 2022
        </p>

        <CancelIcon
          style={{ height: "30px", width: "30px" }}
          className="cancelIconTable h-[2.7vw] w-[3vw] text-[#A1A3EF]"
        />
      </div>
      <div className="-mt-4 text-center">
        <h5 className="tableHeading text-[1.14vw] font-medium">
          Manage Available Status
        </h5>
        <p className="tableSubHeading mt-1 text-[1.1vw] font-normal">
          Schedule Test
        </p>
      </div>
      {/* ......... */}

      <div className="tableItself mt-[30px] w-[100%] px-[40px]">
        <table className="mx-auto w-full table-auto">
          <thead>
            <tr>
              <th className="tableHeadText px-4 py-2 text-[1.1vw] font-normal">
                Type
              </th>
              <th className="tableHeadText px-4 py-2 text-[1.1vw] font-normal">
                From
              </th>
              <th className="tableHeadText px-4 py-2 text-[1.1vw] font-normal">
                To
              </th>
              <th className="tableHeadText px-4 py-2 text-[1.1vw] font-normal">
                Current Status
              </th>
              <th className="tableHeadText px-4 py-2 text-[1.1vw] font-normal">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-grey-light border">
              <td className=" flex items-center justify-around pt-[23px] pb-[41px] text-center">
                <input
                  type="radio"
                  name="radioFortable"
                  className="tableRadioBtn h-[1.4vw] w-[2.4vw]"
                />
                <span className="tableText text-[0.9vw]">Hourly</span>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="tableText text-[0.9vw]">Unavailable</span>
              </td>
              <td className="flex justify-center px-4 py-2 text-center">
                <img
                  src={editIcon}
                  className="tableActionIcon mr-2 h-fit w-[1vw]"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="tableActionIcon h-[1vw] w-[1vw]"
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-grey-light border">
              <td className=" flex items-center justify-around pt-[23px] pb-[41px] text-center">
                <input
                  type="radio"
                  name="radioFortable"
                  className="tableRadioBtn h-[1.4vw] w-[2.4vw]"
                />
                <span className="tableText text-[0.9vw]">Weekly</span>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="tableText text-[0.9vw]">Unavailable</span>
              </td>
              <td className="flex justify-center px-4 py-2 text-center">
                <img
                  src={editIcon}
                  className="tableActionIcon mr-2 h-fit w-[1vw]"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="tableActionIcon h-[1vw] w-[1vw]"
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-grey-light border">
              <td className=" flex items-center justify-around pt-[23px] pb-[41px] text-center">
                <input
                  type="radio"
                  name="radioFortable"
                  className="tableRadioBtn h-[1.4vw] w-[2.4vw]"
                />
                <span className="tableText text-[0.9vw]">Daily</span>
              </td>

              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">09:00 AM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="tableText text-[0.9vw]">9 Sept, 2022</div>
                <div className="tableText text-[0.9vw]">05:00 PM</div>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="tableText text-[0.9vw]">Unavailable</span>
              </td>
              <td className="flex justify-center px-4 py-2 text-center">
                <img
                  src={editIcon}
                  className="tableActionIcon mr-2 h-fit w-[1vw]"
                  alt=""
                />
                <img
                  src={deleteIcon}
                  className="tableActionIcon h-[1vw] w-[1vw]"
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
      className={`ml-0 flex flex-col items-center ${m_top} w-full sm:ml-24 sm:w-[calc(100%-96px)]`}
    >
      <ManageStatusChild />
    </div>
  );
};
export default ManageStatus;
