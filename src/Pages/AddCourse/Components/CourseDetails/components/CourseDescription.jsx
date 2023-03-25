// react States
import React, { Component, useState } from "react";
import { CheckInput } from "../Helpers/InputCheckers";

// css
import "../Pricing.css";

const CourseDescription = ({ CourseDetailsData, setCourseDetailsData, CourseDetailsErr, setCourseDetailsErr }) => {
    const [TextLength, setTextLengthc] = useState({})
    const OnChangeCheck = (e, Key, MaxLength, MinLength, Name) => {
        CheckInput(e, Key, MaxLength, MinLength, Name, true, CourseDetailsData, setCourseDetailsData, CourseDetailsErr, setCourseDetailsErr, TextLength, setTextLengthc)
    }

    return (
        <div className="addCourse2Main">
            <div className="col5Descriptions">
                <div className="row">
                    <div className="col-5">
                        <h6>Short Description</h6>
                        <p>Enter a short detail about <br /> the course</p>
                    </div>
                    <div className="col-7">
                        <textarea className="addCourse2Texterea1 resize-none"
                            onChange={e => OnChangeCheck(e, "ShortDescription", 50, 0, "Short Description")}
                            value={CourseDetailsData?.ShortDescription}
                        ></textarea>
                        <h3 className="font-normal text-[red] h-3">{CourseDetailsErr.ShortDescription}</h3>
                        <p className="addCourse2Texterea1WordsCount">
                            {!TextLength?.ShortDescription ? 0 : TextLength?.ShortDescription}  / 50 characters
                        </p>
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
                        <textarea className="addCourse2Texterea1 addCourse2Texterea2 resize-none"
                            onChange={e => OnChangeCheck(e, "LongDescription", 1500, 0, "Long Description")}
                            value={CourseDetailsData?.LongDescription}>
                        </textarea>
                        <h3 className="font-normal text-[red] h-3">{CourseDetailsErr.LongDescription}</h3>
                        <p className="addCourse2Texterea1WordsCount">
                            {!TextLength?.LongDescription ? 0 : TextLength?.LongDescription} / 1500 characters
                        </p>
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

export default CourseDescription;
