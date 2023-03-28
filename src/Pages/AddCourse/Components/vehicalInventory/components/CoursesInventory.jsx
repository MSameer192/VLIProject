// react States
import React, { useState, useEffect } from "react";

// Images
import addCourseVehical1 from "../../Description/Assets/addCourseVehical1.png";

import '../../CourseSelection/CourseSelection.css'
import '../vehicalInventory.css'
import { useDispatch, useSelector } from "react-redux";
import { GetAdminCoursesA } from "../../../../../Actions/CourseA";
import LoadingSpinner from "../../../../../Components/LoadingSpinner/LoadingSpinner";
import NoDataResponse from "../../../../../Components/NoDataResponse";

const CoursesInventory = ({ setSteps, CourseData, setCourseData }) => {
    const Dispatch = useDispatch();
    const { AdminCourses, loading } = useSelector(Store => Store.CourseReducer)
    useEffect(() => {
        Dispatch(GetAdminCoursesA())
    }, [Dispatch])

    const OnClick = (e, CoursePK) => {
        if (e.target === e.currentTarget) {
            setSteps(2);
            setCourseData({ ...CourseData, CourseFK: CoursePK })
        }
        e.stopPropagation()
    }

    return (
        !loading
            ? <div className="mainContainer1White addCourseFirstPage vehicleInventrory"
            >
                <div className="addCourse3Main" style={{ marginTop: '-100px' }}
                >
                    <div className="row"
                        onClick={e => e.stopPropagation()}>

                        {AdminCourses?.length > 0 ? AdminCourses?.map((value, index, arr) => {


                            return <CourseComp
                                key={value.CoursePK}
                                VehicleType={value?.VehicleType?.VehicleTypeName}
                                LicenseType={value?.LicenseType?.LicenseTypeName}
                                CourseName={value.CourseName}
                                Description={value.Description}
                                OnClick={(e) => OnClick(e, arr[index].CoursePK, value.CoursePK)}
                            />
                        }
                        )
                            : <div className='flex justify-center items-center min-h-[80vh] w-[calc(100%_-_80px)]'>
                                <NoDataResponse topText="No Course found" bottomText="VlI admin will add course tamplates for you" />
                            </div>
                        }
                    </div>
                </div>
            </div>
            : <LoadingSpinner />
    )
}


export const CourseComp = ({ VehicleType, LicenseType, CourseName, Description, OnClick }) => {
    const [Select, setSelect] = useState(false);

    const onclick = (e) => {
        setSelect(!Select);
        OnClick(e);
    }

    let ModifiedDescription = Description;

    let ModifiedCourseName = CourseName;


    if (ModifiedDescription && ModifiedDescription.split("").length > 90)
        ModifiedDescription = ModifiedDescription?.split('')?.slice(0, 90).join('') + "...";


    if (ModifiedCourseName && ModifiedCourseName?.split("").length > 30)
        ModifiedCourseName = ModifiedCourseName?.split("")?.slice(0, 30).join('') + "...";



    return <div className="col-3 aspect-[159_/_217] max-h-[440px] RecommendedCourses" >
        <div className="vehicalBox addCourseFIrstVehicalBox" onClick={(e) => setSelect(!Select)}>
            <div className="vehicalImgConainer">
                <div className="vehicleInventoryImgTopRate">
                    {Select
                        ? <div> 1 </div>
                        : null}

                </div>
                <center>
                    <img src={addCourseVehical1} alt="addCourseVehical1" />
                </center>
                <div className="vehicleInventoryPictureWaterPrints">
                    <div className="waterPrintsGreen">LType {LicenseType}</div>
                    <div className="waterPrintsGreen">VType {VehicleType}</div>
                </div>
            </div>
            <div className="vehicleInventoryContent">
                <h6 className="font-normal ">{ModifiedCourseName}</h6>
                <p className=" break-all w-full aspect-[257_/_95] h-[95px]">{ModifiedDescription}</p>
            </div>
            <center>
                <button className="vehicalSelectBtn cursor-pointer" type="button" onClick={e => onclick(e)}>
                    Select Course
                </button>
            </center>
        </div>
    </div>
}
export default CoursesInventory;
