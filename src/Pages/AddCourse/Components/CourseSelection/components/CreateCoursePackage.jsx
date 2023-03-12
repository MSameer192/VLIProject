// react States
import React from "react";


const CreateCoursePackage = ({ Packages, setPackages }) => {



    const AddPackage = (e) => {
        let EmptyPackage = { DrivingHours: 1, InClassHours: 1, OnlineHours: 1, DiscountType: 1, TotalFee: 1, InstallmentSchedule: "Weekly", Installments: 1 }
        setPackages([...Packages, EmptyPackage])
    }
    const RemovePackage = (Index) => {
        let RemovedPackages = Packages.filter((value, index) => Index !== index)
        console.log(RemovedPackages)
        setPackages(RemovedPackages)
    }
    const onChange = (e, INDEX, ClassType) => {
        let NewPackage = [...Packages]
        NewPackage[INDEX][ClassType] = e.target.value;
        setPackages(NewPackage)
    }


    return (
        <div className="packageTable">
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
                        <td className="statusAddCourseTableBtn cursor-pointer text-xs py-3" onClick={AddPackage}>Add</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}

const NewPackge = ({ Packages, value, onChange, index, RemovePackage }) => {
    return <tr >
        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.DrivingHours}
                onChange={(e) => onChange(e, index, "DrivingHours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.InClassHours}
                onChange={(e) => onChange(e, index, "InClassHours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.OnlineHours}
                onChange={(e) => onChange(e, index, "OnlineHours")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.DiscountType}
                onChange={(e) => onChange(e, index, "DiscountType")}
            />
        </td>

        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.TotalFee}
                onChange={(e) => onChange(e, index, "TotalFee")}
            />
        </td>
        <td className="max-w-[150px]">
            <input type="number" className="w-full px-6 py-2 border-none text-center h-full text-2xs RemoveInputNumArrows"
                value={value?.Installments}
                onChange={(e) => onChange(e, index, "Installments")}
            />
        </td>
        <td className="statusAddCourseTableBtn cursor-pointer text-xs py-3" onClick={() => { RemovePackage(index) }}>Delete</td>
    </tr>
}
export default CreateCoursePackage;
