import React from 'react'
import progressLine from "./Steps Indicator/Assets/progressLine.png";
const Steps = ({ Step }) => {
    return (
        <div className="addCourseProgress">
            <div>
                <br />
                <span className="addCourseindexNumber">{Step} 1</span>
                <span className="progressDiscription">Course<span className="colorEEE">_</span>Selection</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />

            <div>
                <br />
                <span className="addCourseindexNumber">2</span>
                <span className="progressDiscription">The<span className="colorEEE">_</span>price<span className="colorEEE">_</span>info</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className="addCourseindexNumber">3</span>
                <span className="progressDiscription">Brief<span className="colorEEE">_</span>description</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className="addCourseindexNumber">4</span>
                <span className="progressDiscription">Instructors<span className="colorEEE">_</span>Selection</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className="addCourseindexNumber">5</span>
                <span className="progressDiscription">Vehicle<span className="colorEEE">_</span>Selection</span>
            </div>
        </div>
    )
}

export default Steps