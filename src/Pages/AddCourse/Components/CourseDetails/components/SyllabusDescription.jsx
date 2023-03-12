// react States
import React from "react";

// Images
import addCOursePricingPlus from "../Assets/addCOursePricingPlus.png";

// css
import "../Pricing.css";

const SyllabusDescription = ({ CourseData, setCourseData }) => {
 
    const OnChange = (e, Index, value) => {
        let NewCourseDes = [...CourseData?.CourseSyllabus];
        
        NewCourseDes[Index].CourseDescription = e.target.value;
        setCourseData({ ...CourseData, CourseSyllabus: [...NewCourseDes] })
    }
    const AddTopic = () => {
        let NewTopic = { CourseDescription: "" }
        setCourseData({ ...CourseData, CourseSyllabus: [...CourseData?.CourseSyllabus, NewTopic] })
    }
    const RemoveTopic = (index) => {
        CourseData?.CourseSyllabus.splice(index, 1)
        setCourseData({ ...CourseData, CourseSyllabus: [...CourseData?.CourseSyllabus] })
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
                    {CourseData?.CourseSyllabus.map((value, index, arr) => {
                 
                        return <tr key={index }>
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
