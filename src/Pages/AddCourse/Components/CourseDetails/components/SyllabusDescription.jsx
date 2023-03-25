// react States
import React, { useEffect, useState } from "react";

// Images
import addCOursePricingPlus from "../Assets/addCOursePricingPlus.png";

// css
import "../Pricing.css";

const SyllabusDescription = ({ CourseDetailsData, setCourseDetailsData, CourseDetailsErr, setCourseDetailsErr }) => {

    const [SyllabusErr, setSyllabusErr] = useState([])

    const OnChange = (e, Index, value) => {
        let NewCourseDes = [...CourseDetailsData?.CourseSyllabus];
        NewCourseDes[Index].CourseSyllabus = e.target.value;


        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...NewCourseDes] })
        if (e.target.value === "") {
            let New
            const MappedErrs = SyllabusErr.map(value => {
                if (value?.CourseSyllabus && value.Index === Index)
                    New = true
                return value
            })
            if (New)
                setSyllabusErr(MappedErrs)
            else {
                const Sorted = SyllabusErr.sort((a, b) => a.Index - b.Index)
                setSyllabusErr([...Sorted,
                { Index, CourseSyllabus: `Syllabus Description in  point ${1 + Index} cannot be empty` }]
                )
            }
        }
        else if (e.target.value !== "") {
            const RemovedErrs = SyllabusErr.filter(ErrObj =>
                ErrObj.Index !== Index
            )
            const Sorted = RemovedErrs.sort((a, b) => a.Index - b.Index)
            setSyllabusErr(Sorted)
        }
    }
    const AddTopic = () => {

        let NewTopic = { CourseSyllabus: "" }
        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...CourseDetailsData?.CourseSyllabus, NewTopic] })
    }
    const RemoveTopic = (INDEX) => {
        const RemovedErrs = SyllabusErr.filter(ErrObj => {
            let CheckIndex = ErrObj.Index
            if (INDEX < ErrObj.Index) {
                ErrObj.Index = ErrObj.Index - 1
                ErrObj.CourseSyllabus = `Syllabus Description in  point ${1 + ErrObj.Index} cannot be empty`;
            }
            return CheckIndex !== INDEX
        });
        const Sorted = RemovedErrs.sort((a, b) => a.Index - b.Index);
        setSyllabusErr(Sorted)
        CourseDetailsData?.CourseSyllabus.splice(INDEX, 1)
        setCourseDetailsData({ ...CourseDetailsData, CourseSyllabus: [...CourseDetailsData?.CourseSyllabus] })
    }

    useEffect(() => {
        setCourseDetailsErr({ ...CourseDetailsErr, SyllabusDescription: SyllabusErr })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SyllabusErr])


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
                                <input type="text" placeholder="" value={value?.CourseSyllabus}
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
            {
                SyllabusErr.map(value =>
                    <h4 className="text-[red] font-normal mb-1">{value.CourseSyllabus}</h4>
                )
            }

        </div>
    )
}

export default SyllabusDescription;
