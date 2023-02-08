// react States
import React, { Component } from "react";

// Images
import addCourseToggler from "./CourseSelection/Assets/toggler.jpeg";
import searchIcon from "./CourseSelection/Assets/searchIcon.png";
import navBell from "./CourseSelection/Assets/navBell.png";
import verticalTogglerNav from "./CourseSelection/Assets/verticalTogglerNav.png";
import navUserImg from "./CourseSelection/Assets/navUserImg.png";
import navDropdown from "./CourseSelection/Assets/navDropdown.png";


// css
import './CourseSelection/CourseSelection.css';

class CourseSelection extends Component {
    render() {
        return (
            <div className="courseHeaderNav">
                <div className="row">
                    <div className="col-2">
                        <img className="togglerAddCourse" src={addCourseToggler} alt="addCourseToggler" />
                    </div>
                    <div className="col-4">
                        <input type="text" className="searchTopCourses" placeholder="Search" />
                        <span className="searchCoursesSearch">
                            <img src={searchIcon} alt="searchIcon" />
                        </span>
                    </div>
                    <div className="col-3">
                        <h1></h1>
                    </div>

                    <div className="col-3">
                        <span className="addCourseNavRightThings">
                            <img className="addCourseNavAlaram" src={navBell} alt="navBell" />
                            <img className="addCourseNavStraightToggle" src={verticalTogglerNav} alt="verticalTogglerNav" />
                            <img className="addCourseNavProfilePhoto" src={navUserImg} alt="navUserImg" />
                            <span className="addCourseNavProfileName">User123
                                <img className="addCourseNavdropdown" src={navDropdown} alt="navDropdown" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseSelection;
