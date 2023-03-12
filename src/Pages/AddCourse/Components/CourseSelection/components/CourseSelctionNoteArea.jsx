// react States
import React, { Component } from "react";



class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="noteSec">
                <div className="addPackgeTxt">
                    <h6>Add Packages</h6>
                    <p>You can create your own packags according to the traning hours.</p>
                </div>
                <div className="noteSctionMain">
                    <br />
                    {/* <span className="noteSectionMainCross">x</span> */}
                    <h6>Note</h6>
                    <p>The amount entered here will be the first impression for the students.</p>
                    <p className="noteSectionDotsRotate">....</p>
                    <div className="noteSectionButtonsSec">
                        <span className="noteSectionButtonsSecPrev">Previous</span>
                        <span className="noteSectionButtonsSecNext">Next</span>
                    </div>
                </div>
                <div className="pricingPackTxt">
                    <h6>Pricing & Packages</h6>
                </div>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
