import React from 'react'
import { GetLocalStorage } from '../../../../../../../Helpers/LocalStorage/LocalStorage'
import './ButtonsSide.css'
const ButtonsSide = ({ value, OnClick, DeleteCourse,Color }) => {
    return (
        <div className="w-full lg:w-[27%] lg:max-w-[230px] xl:mt-[24px] px-2 pr-2 py-2 xs:pr-3 sm:pr-4 md:pr-5 lg:pr-6 xl:pr-7 2xl:pr-[30px] InsAdminCourseTilesBorder  ">
            <div className="flex flex-col  items-center cardFoter">
                <p className="text-[24px] leading-[24px] ">Status</p>
                <button
                    className={`rounded-[6px] py-[11px] px-[16px] text-center text-[13px] leading-[13px]  bg-opacity-20 mt-[18px] mb-[25px] w-[118px] border-none ${Color}`}
                >
                    {value?.Publish}
                </button>

                {GetLocalStorage("UserInfo").InstituteUserType === "Admin" ? (
                    <div className="flex gap-[15px]">
                        <img
                            className="w-[28px] h-[25px] cursor-pointer"
                            src={require("../images/edit_icon.svg").default}
                            alt="Edit Icon"
                            onClick={() => OnClick(value?.InstituteCourseId)}
                        />

                        <img
                            className="w-[19px] h-[25px] cursor-pointer"
                            src={require("../images/delete_icon.svg").default}
                            alt="Delete Icon"
                            onClick={() => DeleteCourse(value.InstituteCourseId)}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ButtonsSide