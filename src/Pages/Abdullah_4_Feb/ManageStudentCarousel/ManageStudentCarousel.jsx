// react States
import React, { Component } from "react";
import $ from 'jquery'
import './jquery.hislide.js'


import idCardIcon from "./Assets/idCardIcon.png";
import addCourseVehical2 from "./Assets/addCourseVehical2.png";
import studenInstCarIcon from "./Assets/studenInstCarIcon.png";
import studenInstEmailIcon from "./Assets/studenInstEmailIcon.png";
import studenInstCallIcon from "./Assets/studenInstCallIcon.png";
import studentInstImg from "./Assets/studentInstImg.png";

// css
import './ManageStudentCarousel.css'
import '../../AddCourse/Components/Description/Description.css'
class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            $('.slide').hiSlide();
        }, 100);
    }

    render() {
        return (
            <div style={{ backgroundColor: '#eee', height: '100vh', paddingTop: '50px',}}>

                {/********************************** Carousel Starts *****************************************/}
                {/* https://y.com/wtc?v=Cbhp2NL_p1Y */}
                {/* for now we are hiding the first and last tile for screen 1070 to 630 */}

                <div>
                    <div className="slide hi-slide">
                        <div className="hi-prev "></div>
                        <div className="hi-next "></div>
                        <ul>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="studenCarouselBoxes">
                                    <div className="vehicalBox">
                                        <div className="vehicalImgConainer">
                                            <center>
                                                <img src={studentInstImg} alt="studentInstImg" style={{ height: '270px' }} />
                                            </center>
                                        </div>
                                        <div className="managingStudentCarouselTxt">
                                            <p>Alex Chench</p>
                                            <center>
                                                <button className="cauraselInstructorTxt">Instructor</button>
                                            </center>
                                            <hr className="vehicalHr" style={{ marginBottom: '7px' }} />
                                            <div className="infoCaurasel">
                                                <img src={studenInstCarIcon} alt="studenInstCarIcon" /> <span>Type: G,A,B,C</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstEmailIcon} alt="studenInstEmailIcon" style={{ width: '26px', height: '15px' }} /> <span>Akhomelearners@gmail.com</span><br />
                                            </div>
                                            <div className="infoCaurasel">
                                                <img src={studenInstCallIcon} alt="studenInstCallIcon" style={{ width: '20px' }} /> <span>+92 123 456 789</span><br />
                                            </div>
                                            <hr className="vehicalHr" style={{ marginTop: '12px' }} />
                                            <center>
                                                <button className="vehicalSelectBtn">
                                                    Select Instructor
                                                </button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li>
                                <img
                                    src="https://images.pexels.com/photos/219582/pexels-photo-219582.jpeg?cs=srgb&dl=attractive-beautiful-beauty-219582.jpg&fm=jpg"
                                    alt="Img 1" />
                            </li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/405240/pexels-photo-405240.jpeg?cs=srgb&dl=attractive-beautiful-curtain-405240.jpg&fm=jpg"
                                    alt="Img 2" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/1784982/pexels-photo-1784982.jpeg?cs=srgb&dl=attractive-beautiful-beauty-1784982.jpg&fm=jpg"
                                    alt="Img 3" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/219582/pexels-photo-219582.jpeg?cs=srgb&dl=attractive-beautiful-beauty-219582.jpg&fm=jpg"
                                    alt="Img 4" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/247124/pexels-photo-247124.jpeg?cs=srgb&dl=attractive-beautiful-beauty-247124.jpg&fm=jpg"
                                    alt="Img 5" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/1808777/pexels-photo-1808777.png?cs=srgb&dl=attractive-beautiful-beautiful-girl-1808777.jpg&fm=jpg"
                                    alt="Img 6" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/754448/pexels-photo-754448.jpeg?cs=srgb&dl=attractive-beautiful-beauty-754448.jpg&fm=jpg"
                                    alt="Img 7" /></li>
                            <li>
                                <img
                                    src="https://images.pexels.com/photos/761536/pexels-photo-761536.jpeg?cs=srgb&dl=attractive-beautiful-beauty-761536.jpg&fm=jpg"
                                    alt="Img 8" /></li> */}
                        </ul>
                    </div>
                </div>
                {/********************************** Calender Ends *****************************************/}
            </div>
        );
    }
}

export default App;
