// react States
import React, { Component, useState } from "react";



const PackageInstallments = ({ Packages, setPackages }) => {

    const handleEditInstallment = () => {
        window.scrollTo(0, 0);
        let element = document.getElementById("installmentsEdit");

        if (element.style.display === "initial") {
            element.style.display = "none"
        } else {
            element.style.display = "initial"
        }
    }

    const [SPackage, setSPackage] = useState({})

    const OpenInstallmentWindow = (value, index) => {
        handleEditInstallment()
        setSPackage({ ...value, Index: index })
    }


    return (
        <>
            <div className="packageTable">
                <table className="addCourseTable addCourseTable2 table-fixed">
                    <thead>
                        <tr className="addCourseTableTH">
                            <th className="w-[45%]">Package Names</th>
                            <th className="w-[12%]">Installments</th>
                            <th className="w-[19%] max-w-[246px]">Schedule Set</th>
                            <th className="w-[10%]" >Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Packages.length > 0 ? Packages?.map((value, index) => {

                            return <tr key={index + Math.random()}>
                                <td className=" w-">
                                    {value?.DrivingHours} Hours Driving, {value?.InClassHours} Hours In Class, {value?.OnlineHours}
                                    Hours Online for {value?.TotalFee}$
                                </td>
                                
                                <td className=" w-">{value.Installments}</td>
                                <td className="w-[19%] max-w-[246px]">{value.InstallmentSchedule}, {value.TotalFee}$,
                                    {parseFloat(Number(value.TotalFee) / Number(value.Installments)).toFixed(2)}$
                                </td>
                                <td className="statusAddCourseTableBtn" onClick={() => OpenInstallmentWindow(value, index)}>
                                    <img src={require('./Assets/Edit.svg').default} alt="" />
                                </td>
                            </tr>
                        })
                            : null
                        }

                    </tbody>
                </table>
            </div>

            <InstallmentUpdate SPackage={SPackage} setSPackage={setSPackage} Packages={Packages} setPackages={setPackages}
                handleEditInstallment={handleEditInstallment} />
        </>
    )

}

const InstallmentUpdate = ({ SPackage, setSPackage, Packages, setPackages, handleEditInstallment }) => {
    const OnInstallmentChange = (e, name) => setSPackage({ ...SPackage, [name]: e.target.value })

    const onScheduleChange = e => setSPackage({ ...SPackage, InstallmentSchedule: e.target.value })


    const OnSave = (Save) => {
        if (Save) {
            let NewPackages = [...Packages]
            NewPackages[SPackage.Index] = SPackage;
            delete SPackage.Index
            setPackages([...NewPackages])
        }
        handleEditInstallment()
    }
    return <div id="installmentsEdit">
        <div className="installmentsEditPopup">
            <h5>Installment Payment Schedule :</h5>
            <div className="installmentPopupflex">
                <span>Frequency</span>
                <div>
                    <input type="radio" name="InstallmentType" value="Weekly"
                        checked={SPackage?.InstallmentSchedule === "Weekly"}
                        onChange={onScheduleChange}
                    />
                    <span>Weekly</span>
                </div>
                <div>
                    <input type="radio" name="InstallmentType" value="Bi-Weekly"
                        checked={SPackage?.InstallmentSchedule === "Bi-Weekly"}
                        onChange={onScheduleChange}
                    />
                    <span>Bi-Weekly</span>
                </div>
                <div>
                    <input type="radio" name="InstallmentType" value="Monthly"
                        checked={SPackage?.InstallmentSchedule === "Monthly"}
                        onChange={onScheduleChange}
                    />
                    <span>Monthly</span>
                </div>
            </div>

            <br />

            <div className="secinstallmentPopupflex">
                <div className="flex items-center">
                    <span>Total Amount</span>
                    <input type="text" className="text-base py-2 px-3 text-center" value={SPackage.TotalFee}
                        onChange={e => OnInstallmentChange(e, "TotalFee")} />
                </div>
                <div className="flex items-center">
                    <span>Payment</span>
                    <input type="text" className="text-base py-2 px-3 text-center" value={SPackage.Installments}
                        onChange={e => OnInstallmentChange(e, "Installments")}
                    />
                </div>
            </div>
            <p>{SPackage?.Installments} payments will be proceessed {SPackage?.InstallmentSchedule} in the amount of </p>
            <center className="installmentPopupButtons">
                <button onClick={() => OnSave(true)}>Save</button>
                <button onClick={() => OnSave()}>Cancel</button>
            </center>
        </div>
    </div>
}
export default PackageInstallments;
