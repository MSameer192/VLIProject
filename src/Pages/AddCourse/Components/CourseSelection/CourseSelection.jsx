// react States
import React, { useEffect, useState } from "react";

import RichTextEditor from "../../../Institute/AddVehicle/Components/VehicleInfoComps/RichTextEditor";

// components
import CourseSelctionNoteArea from './components/CourseSelctionNoteArea.jsx';
import CreateCoursePackage from './components/CreateCoursePackage.jsx';
import PackageInstallments from './components/PackageInstallments.jsx';

// css
import './CourseSelection.css'
import { PackagesDone } from "./Helpers/PackagesDone";

const CoursePricing = ({ Steps, setSteps, CourseData, setCourseData, StepsIndicator, PageNo, Err, setErr }) => {

    const [Packages, setPackages] = useState([]);

    useEffect(() => {
        setCourseData({ ...CourseData, Packages: Packages })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Packages])

    const OnClick = (e) =>
        PackagesDone(e, CourseData, setErr, Err, setSteps)

    // console.log(document.getElementsByClassName("grecaptcha-badge"))
    return (
        <>
            <div className={`addCoursesMainContainer ${Steps !== PageNo ? "hidden" : ""}`}>

                <div className="row addCourse1">

                    <div className="col-12">
                        <div className="mainContainerAddCourse">
                            <StepsIndicator Steps={Steps} PageNo={PageNo} />
                            <div className="mainContainer1White">


                                <CourseSelctionNoteArea />


                                <CreateCoursePackage
                                    Err={Err} setErr={setErr}
                                    setPackages={setPackages}
                                    Packages={Packages}
                                />

                                <div className="installmantTable">
                                    <div className="addPackgeTxt installmentsTxt">
                                        <h6>Installments</h6>
                                        <p>Create Frequency for each Installments</p>
                                    </div>


                                    <PackageInstallments setPackages={setPackages} Packages={Packages} />


                                </div>
                                <div className="courseCVDiv gap-[15%]" >
                                    <div className="courseCVDivHeading">
                                        <h6 className="font-normal">Course Curriculum</h6>
                                        <p>You can attach or write Curriculum for your Course here</p>
                                    </div>

                                    <div className="max-w-[675px]" id="CourseCurriculum">
                                        <RichTextEditor KeyName="CourseCurriculum"
                                            setData={setCourseData} Data={CourseData}
                                            Errors={Err} setErrors={setErr}
                                        />
                                        <h3 className="text-[red] font-normal text-3xs">
                                            {Err?.CourseCurriculum}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center>
                            <button className="SaveAndContinueBtn cursor-pointer" type="button"
                                onClick={OnClick}
                            >Save & Continue
                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );

}

export default CoursePricing;
