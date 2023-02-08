// react States
import React, { Component } from "react";

// css
import "../Pricing.css";

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="packageTable">
                <table className="addCourseTable">
                    <tr className="addCourseTableTH">
                        <th>Select week</th>
                        <th>Select class</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>4</td>
                        <td>Hello, Welcome to the Vehicle Mechanics Course !!</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
