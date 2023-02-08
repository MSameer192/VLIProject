// react States
import React, { Component } from "react";

// css
import "../Pricing.css";

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="addCourse2Main">
                <div className="col5Descriptions">
                    <div className="row">
                        <div className="col-5">
                            <h6>Short Description</h6>
                            <p>Enter a short detail about <br /> the course</p>
                        </div>
                        <div className="col-7">
                            <textarea className="addCourse2Texterea1"></textarea>
                            <p className="addCourse2Texterea1WordsCount">0 / 50 characters</p>
                        </div>
                    </div>
                </div>
                <div className="col5Descriptions">
                    <div className="row">
                        <div className="col-5">
                            <h6>Long Description</h6>
                            <p>Enter a detailed detail about <br /> the course</p>
                        </div>
                        <div className="col-7">
                            <textarea className="addCourse2Texterea1 addCourse2Texterea2"></textarea>
                            <p className="addCourse2Texterea1WordsCount">0 / 1500 characters</p>
                        </div>
                    </div>
                </div>
                <div className="col5Descriptions">
                    <div className="row">
                        <div className="col-5">
                            <h6>Course Syllabus</h6>
                            <p>Enter Syllabus for this course</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
