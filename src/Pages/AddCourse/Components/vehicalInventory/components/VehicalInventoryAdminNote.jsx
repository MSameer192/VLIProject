// react States
import React, { Component } from "react";

// Images
import noteFromAdminFIlter from "../Assets/noteFromAdminFIlter.png";

import '../../Description/Description.css'
import '../../CourseSelection/CourseSelection.css'
import '../vehicalInventory.css'

class Description extends Component {
    render() {

        return (

            <div className="filterAddCOurse1 noteFromAdminFilter" id="filterAddCOurse1">
                <h5 style={{ fontSize: '15px' }}>Note from admin</h5>
                <img src={noteFromAdminFIlter} style={{ width: '7px', height: '15px', marginTop: '2px' }} alt="noteFromAdminFIlter" />
            </div>
        )
    }
}
export default Description;
