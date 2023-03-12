// react States
import React, { Component } from "react";

// images
import addCourse4FilterDropdown from "../../CourseDetails/Assets/addCourse4FilterDropdown.png";

// css
import '../../CourseSelection/CourseSelection.css';

class AddCoursedashboardTabs extends Component {
    render() {
        return (
            <div className="addCourse4Heading">
                <h4>Instuctors</h4>
                <div className="FilterInstructorDiv">
                    <p>Filter Instructor <span><img src={addCourse4FilterDropdown} alt="addCourse4FilterDropdown" /></span></p>
                </div>
            </div>
        )
    }
}
export default AddCoursedashboardTabs;
