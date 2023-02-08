// react States
import React, { Component } from "react";

// Images
import addCOursePricingPlus from "../Assets/addCOursePricingPlus.png";

// css
import "../Pricing.css";

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="packageTable">
                <table className="addCourseTable">
                    <tr className="addCourseTableTH">
                        <th>S/no</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                        <span>
                            <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                        </span>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style={{ textAlign: 'start' }}>Hello, Welcome to the Vehicle </td>
                        <span>
                            <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                        </span>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                        <span>
                            <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                        </span>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style={{ textAlign: 'start' }}>Hello, Welcome to </td>
                        <span>
                            <img src={addCOursePricingPlus} style={{ marginTop: '8px' }} alt="addCOursePricingPlus" />
                        </span>
                    </tr>
                </table>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
