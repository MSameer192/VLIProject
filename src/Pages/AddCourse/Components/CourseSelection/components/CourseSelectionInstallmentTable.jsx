// react States
import React, { Component } from "react";

// css
import '../CourseSelection.css';

class AddCoursedashboardTabs extends Component {
    handleEditInstallment() {
        window.scrollTo(0, 0);
        let element = document.getElementById("installmentsEdit");
        console.log(element);
        if (element.style.display === "initial") {
            element.style.display = "none"
        } else {
            element.style.display = "initial"
        }
    }

    render() {
        return (
            <>
                <div className="packageTable">
                    <table className="addCourseTable addCourseTable2">
                        <tr className="addCourseTableTH">
                            <th>Package Names</th>
                            <th>Installments</th>
                            <th>Schedule Set</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>4 Hours Driving, 10 Hours In Class, 4 Hours Online for 260$</td>
                            <td>3</td>
                            <td>Weekly, 260$, 68$</td>
                            <td className="statusAddCourseTableBtn" onClick={() => this.handleEditInstallment()}>Edit</td>
                        </tr>
                        <tr>
                            <td>10 Hours Driving, 6 Hours In Class, 8 Hours Online for 400$</td>
                            <td>2</td>
                            <td>Weekly, 400$, 20$</td>
                            <td className="statusAddCourseTableBtn">Edit</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><span style={{ color: 'white' }}>.</span></td>
                            <td></td>
                            <td className="statusAddCourseTableBtn"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><span style={{ color: 'white' }}>.</span></td>
                            <td></td>
                            <td className="statusAddCourseTableBtn"></td>
                        </tr>
                    </table>
                </div>
                <div id="installmentsEdit">
                    <div className="installmentsEditPopup">
                        <h5>Installment Payment Schedule :</h5>
                        <div className="installmentPopupflex">
                            <span>Frequency</span>
                            <div>
                                <input type="checkbox" checked />
                                <span>Weekly</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Bi-Weekly</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Monthly</span>
                            </div>
                        </div>
                        <br />
                        <div className="secinstallmentPopupflex">
                            <div>
                                <span>Total Amount</span>
                                <input type="text" />
                            </div>
                            <div>
                                <span>Payment</span>
                                <input type="text" />
                            </div>
                        </div>
                        <p>3 payments will be proceessed weekly in the amount of </p>
                        <center className="installmentPopupButtons">
                            <button onClick={() => { this.handleEditInstallment() }}>Save</button>
                            <button onClick={() => { this.handleEditInstallment() }}>Cancel</button>
                        </center>
                    </div>
                </div>
            </>
        )
    }
}
export default AddCoursedashboardTabs;
