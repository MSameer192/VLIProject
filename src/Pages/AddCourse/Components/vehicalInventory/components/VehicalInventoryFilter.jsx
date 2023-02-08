// react States
import React, { Component } from "react";

// Images
import filteraddcourseDropdown from "../Assets/filteraddcourseDropdown.png";
import addCourseFilterSearch from "../Assets/addCourseFilterSearch.png";


import '../../Description/Description.css'
import '../../CourseSelection/CourseSelection.css'
import '../vehicalInventory.css'

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterForMobile: ''
        };
    }


    addOrRemoveClassFilterMobile(e) {
        if (e === "open") {
            this.setState({ filterForMobile: "open" })
            document.getElementById("filterAddCOurse1").classList.add("filterAddCOurse1Mobile")
            document.getElementById("vehicleInventorySearch").classList.add("vehicleInventorySearchMobile")
        } else {
            this.setState({ filterForMobile: "close" })
            document.getElementById("filterAddCOurse1").classList.remove("filterAddCOurse1Mobile")
            document.getElementById("vehicleInventorySearch").classList.remove("vehicleInventorySearchMobile")
        }
    }
    render() {
        return (
            <>
                <div className="filterForMobileVehicleInventory" onClick={() => {
                    if (this.state.filterForMobile === "" || this.state.filterForMobile === "close") {
                        this.addOrRemoveClassFilterMobile("open")
                    } else if (this.state.filterForMobile === "open") {
                        this.addOrRemoveClassFilterMobile("close")
                    }
                }}>
                    <h6>Filter</h6>
                    <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                </div>
                <div className="filterAddCOurse1" id="filterAddCOurse1">
                    <h5>Filter Vehicle</h5>
                    <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                    <div className="filterVehicleDiv">
                        <p>Type L</p>
                        <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                    </div>
                    <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                    <div className="filterVehicleDiv">
                        <p>Type L</p>
                        <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                    </div>
                    <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                    <div className="filterVehicleDiv">
                        <p>Type L</p>
                        <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                    </div>
                    <p className="addCOurseFilterVehicleCaption">Vehicle Type</p>
                    <div className="filterVehicleDiv">
                        <p>Type L</p>
                        <img src={filteraddcourseDropdown} alt="filteraddcourseDropdown" />
                    </div>

                    <div className="filterButtonDiv" onClick={() => {
                        this.addOrRemoveClassFilterMobile("close")
                    }}>
                        <img src={addCourseFilterSearch} alt="addCourseFilterSearch" />
                        <p>Apply Filters</p>
                        <span></span>
                    </div>
                </div>
            </>
        )
    }
}
export default Description;
