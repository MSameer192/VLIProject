// react States
import React, { Component } from "react";
import $ from 'jquery'
import 'jquery-circle-progress/dist/circle-progress.js'

// css
import "./SchoolAdminProgress.css"
import '../../AddCourse/ownBootstrap.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            approvedPercent: 48,
            UnderReviewPercent: 30,
            rejectedPercent: 22,
        };
    }
    async componentWillMount() {
        setTimeout(() => {
            console.log(window.screen.width);
            let size;
            if (window.screen.width < 670) {
                size = 100;
            } else {
                size = 140;
            }
            $('#circle').circleProgress({
                value: `0.${this.state.approvedPercent}`,
                size: size,
                thickness: 12,

                fill: {
                    gradient: ["#06FF17", "#E1FEE2"]
                }
            });
            $('#circleUnderReview').circleProgress({
                value: `0.${this.state.UnderReviewPercent}`,
                size: size,
                thickness: 12,

                fill: {
                    gradient: ["#FFBE87", "#FFF3E9"]
                }
            });
            $('#circleRejected').circleProgress({
                value: `0.${this.state.rejectedPercent}`,
                size: size,
                thickness: 12,

                fill: {
                    gradient: ["#F85C5C", "#FCA0A0"]
                }
            });
        }, 100);
    }
    render() {

        return (
            <div style={{ backgroundColor: '#eee', height: '100vh', paddingTop: '50px', paddingLeft: '50px' }}>
                <div className="mainSectionProgress">
                    <div className="approvedSection">
                        <div className="row">
                            <div className="col-6">
                                <h6>Approved Courses</h6>

                                <p>Total Courses = 6</p>
                                <p>Approved Courses = 5</p>
                            </div>
                            <div className="col-6">
                                <div id="circle" style={{ marginTop: '-10px' }}>
                                    <div className="approvedDiv">
                                        <p>48%</p>
                                        <span>Approved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="approvedSection">
                        <div className="row">
                            <div className="col-6">
                                <h6>Approved Courses</h6>

                                <p>Total Courses = 6</p>
                                <p>Approved Courses = 5</p>
                            </div>
                            <div className="col-6">
                                <div id="circleUnderReview" style={{ marginTop: '-10px' }}>
                                    <div className="approvedDiv underReviewProgress">
                                        <p>30%</p>
                                        <span>Under Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="approvedSection">
                        <div className="row">
                            <div className="col-6">
                                <h6>Approved Courses</h6>

                                <p>Total Courses = 6</p>
                                <p>Approved Courses = 5</p>
                            </div>
                            <div className="col-6">
                                <div id="circleRejected" style={{ marginTop: '-10px' }}>
                                    <div className="approvedDiv rejectedProgress">
                                        <p>22%</p>
                                        <span>Rejected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
