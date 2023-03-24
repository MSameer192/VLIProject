// react States
import React from "react";

// Images
import addCOursePricingPlus from "../Assets/addCOursePricingPlus.png";

// css
import "../Pricing.css";

const SyllabusDescription = ({ CourseDetailsData, setCourseDetailsData }) => {

    const OnChange = (e, Index, value) => {
        let NewCourseDes = [...CourseDetailsData?.CourseSyllabus];

        NewCourseDes[Index].CourseDescription = e.target.value;
        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...NewCourseDes] })
    }
    const AddTopic = () => {
        let NewTopic = { CourseDescription: "" }
        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...CourseDetailsData?.CourseSyllabus, NewTopic] })
    }
    const RemoveTopic = (index) => {
        CourseDetailsData?.CourseSyllabus.splice(index, 1)
        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...CourseDetailsData?.CourseSyllabus] })
    }
    return (
        <div className="packageTable">
            <table className="addCourseTable">
                <thead>
                    <tr className="addCourseTableTH">
                        <th className="w-[18%]">S/no</th>
                        <th className="w-[58%]">Description</th>
                        <th className="w-[10%]"></th>
                    </tr>
                </thead>
                <tbody>
                    {CourseDetailsData?.CourseSyllabus?.map((value, index, arr) => {

                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ textAlign: 'start' }}>
                                <input type="text" placeholder="" value={value?.CourseDescription}
                                    onChange={e => OnChange(e, index, value)}
                                />
                            </td>
                            {
                                index === arr.length - 1
                                    ? <td className="cursor-pointer" onClick={AddTopic}>
                                        <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                                    </td>
                                    : <td className="cursor-pointer bg-[#F7F7F7]" onClick={() => RemoveTopic(index)}> </td>
                            }

                        </tr>
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default SyllabusDescription;
