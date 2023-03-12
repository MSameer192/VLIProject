import React, { useEffect, useState } from 'react'
import CourseCategory from './Components/CourseCategory/CourseCategory'
import CourseTitle from './Components/CourseTitle/CourseTitle'
import './AddCourseAdmin.css'
import SearchTags from './Components/SearchTags/SearchTags'
import ShortDescription from './Components/ShortDescription/ShortDescription'
import CourseThumnail from './Components/CourseThumnail/CourseThumnail'
import AddCoursePopup from './Components/AddCoursePopup/AddCoursePopup'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import { useDispatch } from 'react-redux'
import { GetLicenseTypes, GetVehicleTypes } from '../../../Actions/CategoryA'
import '../Css/Course_E-Book_Inputs.css'
import { CreateAdminCourseA } from '../../../Actions/AdminCourseA'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
const AddCourseAdminChild = () => {
    const [CourseData, setCourseData] = useState({});
    const [Err, setErr] = useState();
    const [Success, setSuccess] = useState();
    const [SubLicenseType, setSubLicenseType] = useState([]);
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(GetLicenseTypes())
        Dispatch(GetVehicleTypes())
    }, [Dispatch])


    const OnSubmit = e => SubmitFormData(e, CourseData, SubLicenseType, Err, setErr, Dispatch, setSuccess);
    useCheckLogin(true, ["Admin"])
    useEffect(() => {

    }, [])

    return (
        <form className='flex flex-col gap-9 bg-[#F7F7F7] py-10 items-center' onSubmit={OnSubmit}>
            <div className='flex justify-center items-center bg-[#F0F0F7] w-11/12 lg:w-[95%] xl:w-[88%] py-4 px-4 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-[90px]'>
                <div className='flex flex-col py-4 gap-16 w-full sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-4/5 2xl:w-3/4 '>
                    <span className='AddCourse_HeadingContainer '>
                        <h2 className='text-sm font-normal'>Overview</h2>
                    </span>
                    <div className='flex w-full flex-col gap-7'>
                        <CourseTitle setCourseData={setCourseData} CourseData={CourseData} />
                        <CourseCategory setCourseData={setCourseData} CourseData={CourseData}
                            SubLicenseType={SubLicenseType} setSubLicenseType={setSubLicenseType} />
                        <SearchTags setCourseData={setCourseData} CourseData={CourseData} />
                        <ShortDescription setCourseData={setCourseData} CourseData={CourseData} />
                        <CourseThumnail setCourseData={setCourseData} CourseData={CourseData} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:justify-end w-[88%] gap-7 mt-12'>
                <button className={`rounded-2xl whitespace-nowrap
                text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base
                py-2    md:py-2                 xl:py-3     
                px-3    md:px-4     lg:px-5     xl:px-6     2xl:px-7
                BrandingButton`} type="submit">
                    Preview Course
                </button>
                <button className={`rounded-2xl whitespace-nowrap
                text-4xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base
                py-2    md:py-2                 xl:py-3     
                px-3    md:px-4     lg:px-5     xl:px-6     2xl:px-7
                BrandingButton`} type="submit">
                    Save & Continue
                </button>
            </div>

            {Success ? <AddCoursePopup /> : null}
        </form>
    )
}
const AddCourseAdmin = () => <InstituteTemplate Element={AddCourseAdminChild} />



const SubmitFormData = (e, CourseData, SubLicenseType, Err, setErr, Dispatch, setSuccess) => {
    e.preventDefault();
    let Errors = {}
    e.preventDefault();
    const CourseFormData = new FormData();

    for (let [key, value] of Object.entries(CourseData)) {
        if (!value) Errors[key] = true
        else delete Errors[key]
    }
    if (SubLicenseType.length > 0 && !CourseData.SubLicenseTypeFK)
        Errors.SubLicenseTypeFK = true;


    setErr({ ...Err, ...Errors })

    if (Object.entries(Errors).length > 0)
        return


    CourseFormData.append("CourseThumbnail", CourseData.CourseThumbnail);
    delete CourseData.CourseThumbnail;
    delete CourseData.SubLicenseTypeName;
    delete CourseData.LicenseTypeName;
    delete CourseData.VehicleTypeName;
    if (!CourseData.SubLicenseTypeFK)
        delete CourseData.SubLicenseTypeFK;
    CourseFormData.append("VehicleInfo", JSON.stringify(CourseData));

    
    Dispatch(CreateAdminCourseA(CourseFormData, setSuccess))
}


export default AddCourseAdmin