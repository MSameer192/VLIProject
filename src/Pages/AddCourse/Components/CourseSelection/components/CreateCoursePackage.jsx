// react States
import React, { useEffect, useState } from "react";
import { PackageOnChange } from "../Helpers/Events";


const CreateCoursePackage = ({ Packages, setPackages, Err, setErr }) => {
    const [CourseErrs, setCourseErrs] = useState([])


    const AddPackage = (e) => {
        let EmptyPackage = { DrivingHours: 1, InClassHours: 1, OnlineHours: 1, DiscountType: 1, TotalFee: 1, InstallmentSchedule: "Weekly", Installments: 1 }
        setPackages([...Packages, EmptyPackage])
        setErr({ ...Err, Packages: [...CourseErrs] })
    }

    const RemovePackage = (Index) => {
        let RemovedPackages = Packages.filter((value, index) => Index !== index);
        setPackages(RemovedPackages)
        if (RemovedPackages.length <= 0)
            setErr({ ...Err, Packages: "At least one package is required" })
    }


    const onChange = (e, INDEX, ClassType, ClassName) =>
        PackageOnChange(e, INDEX, ClassType, ClassName, Packages, setPackages, CourseErrs, setCourseErrs)

    useEffect(() => {
        setErr({ ...Err, Packages: [...CourseErrs] })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseErrs])

    return (
        <div className="packageTable" id="Packages">
            <table className="addCourseTable">
                <thead>
                    <tr className="addCourseTableTH">
                        <th className="w-[12%] max-w-[150px]">Driving Hours</th>
                        <th className="w-[12%] max-w-[150px]">In Class Hours</th>
                        <th className="w-[12%] max-w-[150px]">Online Hours</th>
                        <th className="w-[12%] max-w-[150px]">Discount Type</th>
                        <th className="w-[12%] max-w-[150px]">Fee</th>
                        <th className="w-[12%] max-w-[150px]">Installments</th>
                        <th className="w-[12%] max-w-[150px]">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Packages.length > 0 ? Packages?.map((value, index) =>
                        <NewPackge key={index} value={value} Packages={Packages} onChange={onChange} RemovePackage={RemovePackage} index={index} />
                    )
                        : null
                    }


                    <tr className="addCOurseRowLast">
                        <td>Min 1</td>
                        <td>Min 1</td>
                        <td>Min 1</td>
                        <td>Type</td>
                        <td>1 $</td>
                        <td>1</td>
                        <td className="statusAddCourseTableBtn cursor-pointer text-xs py-3"
                            onClick={AddPackage}>
                            Add
                        </td>
                    </tr>
                </tbody>
            </table>
            {CourseErrs.map((value, index) =>
                <h3 key={index + Object.keys(value)?.[0]} className="text-[red] font-normal">{value?.[Object.keys(value)?.[0]]} </h3>
            )}
            <h3 className="text-[red] font-normal text-3xs">
                {
                    typeof Err?.Packages === "string"
                        ? Err?.Packages
                        : null
                }
            </h3>
        </div>
    )


}

const NewPackge = ({ Packages, value, onChange, index, RemovePackage }) => {
    return <tr >
        <td className="max-w-[150px]">
            <input type="number" min={1}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.DrivingHours}
                onChange={(e) => onChange(e, index, "DrivingHours", "Driving Hours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" min={1}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.InClassHours}
                onChange={(e) => onChange(e, index, "InClassHours", "InClass Hours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" min={1}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.OnlineHours}
                onChange={(e) => onChange(e, index, "OnlineHours", "Online Hours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" min={0}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.DiscountType}
                onChange={(e) => onChange(e, index, "DiscountType", "Discout Type")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" min={1}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.TotalFee}
                onChange={(e) => onChange(e, index, "TotalFee", "Total Fee")}
            />
        </td>
        <td className="max-w-[150px]">
            <input type="number" min={1}
                className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.Installments}
                onChange={(e) => onChange(e, index, "Installments", "Installments")}
            />
        </td>
        <td className="statusAddCourseTableBtn cursor-pointer text-xs py-3" onClick={() => { RemovePackage(index) }}>Delete</td>
    </tr>
}
export default CreateCoursePackage;
