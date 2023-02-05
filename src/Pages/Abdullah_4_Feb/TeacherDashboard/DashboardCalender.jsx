// react States
import React, { Component } from "react";

// css
import "./DashboardCalender.css"

// Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class App extends Component {
    render() {

        return (
            <div style={{ backgroundColor: '#eee', height: '100vh', paddingTop: '50px', paddingLeft: '50px' }}>

                {/********************************** Calender Starts *****************************************/}

                {/* Alrslan if you want any change please have a look at that library */}
                {/* Very light calender library: https://www.npmjs.com/package/react-calendar */}
                <div className="calenderClassTecherDashDiv">
                    <h6 className="calenderClassTecherDashHeading">Calender</h6>
                    <Calendar className={"calenderClassTecherDash"}
                        // activeStartDate={new Date(2017, 0, 1)}
                        formatShortWeekday={(locale, date) =>
                            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
                        }
                        onChange={(date) => {
                            let newDate = new Date()
                            if (date > newDate) {
                                console.log("Selected", date);
                                console.log("Add check that user not select previous date");
                            } else {
                                console.log("Select Onward Date");
                            }
                        }}
                    />
                </div>
                {/********************************** Calender Ends *****************************************/}
            </div>
        );
    }
}

export default App;
