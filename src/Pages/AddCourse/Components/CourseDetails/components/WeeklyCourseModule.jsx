// react States
import React from "react";
import addCOursePricingPlus from '../../CourseDetails/Assets/addCOursePricingPlus.png'
// css
import "../Pricing.css";

const WeeklyCourseModule = ({ CourseDetailsData, setCourseDetailsData }) => {

    const OnChange = (e, Index, key) => {
        let NewWeeklyModule = [...CourseDetailsData?.ClassSchedule];
        NewWeeklyModule[Index][key] = e.target.value;
        setCourseDetailsData({ ...CourseDetailsData, ClassSchedule: [...NewWeeklyModule] })
    }
    const AddTopic = () => {
        let NewClass = { ClassDescription: "", WeekNumber: "", ClassNumber: '' }
        setCourseDetailsData({ ...CourseDetailsData, ClassSchedule: [...CourseDetailsData?.ClassSchedule, NewClass] })
    }
    const RemoveTopic = (index) => {
        CourseDetailsData?.ClassSchedule.splice(index, 1)
        setCourseDetailsData({ ...CourseDetailsData, ClassSchedule: [...CourseDetailsData?.ClassSchedule] })
    }

    return (
        <div className="packageTable">
            <table className="addCourseTable">
                <thead>
                    <tr className="addCourseTableTH">
                        <th className="w-[16%]">Select week</th>
                        <th className="w-[16%]">Select class</th>
                        <th className="w-[50%]">Description</th>
                        <th className="w-[1.5%]"></th>
                    </tr>
                </thead>
                <tbody>


                    {CourseDetailsData?.ClassSchedule?.map((value, index, arr) => {

                        return <tr key={index + "a"}>

                            <td>
                                <input type="number" placeholder="" value={value?.WeekNumber} className="border-none text-center"
                                    onChange={e => OnChange(e, index, "WeekNumber")}
                                />
                            </td>

                            <td style={{ textAlign: 'start' }}>
                                <input type="number" placeholder="" value={value?.ClassNumber} className="border-none text-center"
                                    onChange={e => OnChange(e, index, "ClassNumber")}
                                />
                            </td>
                            <td>
                                <input type="text" placeholder="" value={value?.ClassDescription} className="border-none text-center"
                                    onChange={e => OnChange(e, index, "ClassDescription")}
                                />
                            </td>
                            {
                                index === arr.length - 1
                                    ? <td style={{ backgroundColor: "#ffffff00" }} className="cursor-pointer" onClick={AddTopic}>
                                        <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                                    </td>
                                    : <td style={{ backgroundColor: "#ffffff00" }} className="cursor-pointer bg-[#F7F7F7]" onClick={() => RemoveTopic(index)}> </td>
                            }

                        </tr>
                    })}



                </tbody>
            </table>
        </div>
    )
}

export default WeeklyCourseModule;
