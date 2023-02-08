// react States
import React, { Component } from "react";

// css
import '../CourseSelection.css';

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="packageTable">
                <table className="addCourseTable">
                    <thead>
                        <tr className="addCourseTableTH">
                            <th>Driving Hours</th>
                            <th>In Class Hours</th>
                            <th>Online Hours</th>
                            <th>Discount Type</th>
                            <th>Fee</th>
                            <th>Installments</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>10</td>
                            <td>4</td>
                            <td>No Discount</td>
                            <td>260 $</td>
                            <td>3</td>
                            <td className="statusAddCourseTableBtn">Delete</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>9</td>
                            <td>2</td>
                            <td>30% Off</td>
                            <td>260 $</td>
                            <td>1</td>
                            <td className="statusAddCourseTableBtn">Delete</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>5</td>
                            <td>8</td>
                            <td>No Tax</td>
                            <td>400 $</td>
                            <td>2</td>
                            <td className="statusAddCourseTableBtn">Delete</td>
                        </tr>
                        <tr className="addCOurseRowLast">
                            <td>Min 1</td>
                            <td>Min 1</td>
                            <td>Min 1</td>
                            <td>Type</td>
                            <td>1 $</td>
                            <td>1</td>
                            <td className="statusAddCourseTableBtn">Add</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
