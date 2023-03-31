// react States
import React, { useState, useEffect } from "react";

import '../../CourseSelection/CourseSelection.css'
import '../vehicalInventory.css'
import { useDispatch, useSelector } from "react-redux";
import { GetAdminCoursesA } from "../../../../../Actions/CourseA";
import LoadingSpinner from "../../../../../Components/LoadingSpinner/LoadingSpinner";
import NoDataResponse from "../../../../../Components/NoDataResponse";
import { BaseUrl } from "../../../../../Actions/Base";

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
                                Image={value.CourseThumbnail}
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


export const CourseComp = ({ VehicleType, LicenseType, CourseName, Description, OnClick, Image }) => {
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
                <div className="flex justify-center items-center h-[160px] overflow-hidden">
                    <img src={`${BaseUrl}/api/Thumbnail/course?url=${Image}`} alt="addCourseVehical1" />
                </div>
                <div className="vehicleInventoryPictureWaterPrints">
                    <div className="waterPrintsGreen">LType {LicenseType}</div>
                    <div className="waterPrintsGreen">VType {VehicleType}</div>
                </div>
            </div>
            <div>
                <h3 className="font-normal text-3xs px-4 pt-4 m-0">
                    {ModifiedCourseName}
                </h3>
                <p className="text-[#333333] text-4xs break-all w-full aspect-[257_/_95] h-[95px] mb-9 mx-2 px-4 pt-1">
                    {ModifiedDescription}
                </p>
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
