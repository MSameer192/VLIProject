// react States
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import addCourse3HeadImg from "./Assets/addCourse3HeadImg.png";

// components

import VehicleDetailTiles from './components/VehicleDetailTiles.jsx';

// css
import "./SelectVehicle.css";
import "../.././ownBootstrap.css";

const SelectVehicle = ({ Steps, setSteps, CourseData, setCourseData, StepsIndicator, PageNo }) => {

    return (
        <div className={`addCoursesMainContainer ${Steps !== PageNo ? "hidden" : ""}`}>

            <div className="row addCourse1">


                <div className="col-12">
                    <div className="mainContainerAddCourse">
                        <StepsIndicator Steps={Steps} />
                        <div className="mainContainer1White">
                            <center className="descriptionIconTxt addCOurse3Desc">
                                <img src={addCourse3HeadImg} style={{ width: '90px' }} alt="addCourse3HeadImg" />
                                <h6 className="SemiBold">Select Vehicle</h6>
                            </center>

                            <VehicleDetailTiles CourseData={CourseData}  setCourseData={setCourseData} setSteps={setSteps} />

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default SelectVehicle;
