import React from 'react'
import progressLine from './Assets/progressLine.png';

const StepsIndicator = ({ Steps, PageNo }) => {

    return (
        <div className="addCourseProgress">
            <div>
                <br />
                <span className={`addCourseindexNumber ${Steps > 1 ? "addCourseindexNumberActive" : ""} `}>1</span>
                <span className="progressDiscription">Course Selection</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />

            <div>
                <br />
                <span className={`addCourseindexNumber ${Steps > 2 ? "addCourseindexNumberActive" : ""} `}>2</span>
                <span className="progressDiscription">The price info</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className={`addCourseindexNumber ${Steps > 3 ? "addCourseindexNumberActive" : ""} `}>3</span>
                <span className="progressDiscription">Brief description</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className={`addCourseindexNumber ${Steps > 4 ? "addCourseindexNumberActive" : ""} `}>4</span>
                <span className="progressDiscription">Vehicle Selection</span>
            </div>
            <img className="addCourseline" src={progressLine} alt="progressLine" />
            <div>
                <br />
                <span className={`addCourseindexNumber ${Steps > 5 ? "addCourseindexNumberActive" : ""} `}>5</span>
                <span className="progressDiscription">Instructors Selection</span>
            </div>
        </div>
    )
}

export default StepsIndicator