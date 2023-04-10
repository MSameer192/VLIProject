import React, { useEffect, useState } from 'react'
import CourseCategory from './Components/CourseCategory/CourseCategory'
import CourseTitle from './Components/CourseTitle/CourseTitle'
import './AddCourseAdmin.css'
import SearchTags from './Components/SearchTags/SearchTags'
import ShortDescription from './Components/ShortDescription/ShortDescription'
import CourseThumnail from './Components/CourseThumnail/CourseThumnail'
import AddCoursePopup from './Components/AddCoursePopup/AddCoursePopup'
import InstituteTemplate from '../../../Components/InstituteTemplate/InstituteTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { GetLicenseTypes, GetVehicleTypes } from '../../../Actions/CategoryA'
import '../Css/Course_E-Book_Inputs.css'
import { CreateAdminCourseA } from '../../../Actions/AdminCourseA'
import useCheckLogin from '../../../Helpers/CustomHooks/CheckLogin'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
const AddCourseAdminChild = ({ children }) => {
    const [CourseData, setCourseData] = useState({
        CourseName: "",
        VehicleTypeFK: "",
        LicenseTypeFK: "",
        PossibleKeywords: [],
        Description: "",
        CourseThumbnail: ""
    });
    const [Err, setErr] = useState();
    const { loading } = useSelector(Store => Store.AdminCourseReducer)
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
        !loading ?
            <form className='flex flex-col gap-9 bg-[#F7F7F7] py-10 items-center' onSubmit={OnSubmit}>
                <div className='flex justify-center items-center bg-[#F0F0F7] w-11/12 lg:w-[95%] xl:w-[88%] py-4 px-4 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-[90px]'>
                    <div className='flex flex-col py-4 gap-16 w-full sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-4/5 2xl:w-3/4 '>
                        <span className='AddCourse_HeadingContainer '>
                            <h2 className='text-sm font-normal'>Overview</h2>
                        </span>
                        <div className='flex w-full flex-col gap-7'>
                            <CourseTitle
                                setCourseData={setCourseData} CourseData={CourseData}
                                setErr={setErr} Err={Err}
                            />

                            <CourseCategory
                                setCourseData={setCourseData} CourseData={CourseData}
                                SubLicenseType={SubLicenseType} setSubLicenseType={setSubLicenseType}
                                Err={Err} setErr={setErr}
                            />
                            <SearchTags
                                setCourseData={setCourseData} CourseData={CourseData}
                                Err={Err} setErr={setErr}
                            />
                            <ShortDescription
                                setCourseData={setCourseData} CourseData={CourseData}
                                Err={Err} setErr={setErr}
                            />
                            <CourseThumnail
                                setCourseData={setCourseData} CourseData={CourseData}
                                Err={Err} setErr={setErr}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-end w-[88%] gap-7 mt-12'>

                    <button className="Admin_SubmitButton BrandingButton" type="submit">
                        Save & Continue
                    </button>
                </div>

                {Success ? <AddCoursePopup /> : null}
            </form>
            : <LoadingSpinner Width="full" Height="screen" Left="0" Position="fixed" Bg="white" />
    )
}
const AddCourseAdmin = () => <InstituteTemplate Element={AddCourseAdminChild} />



const SubmitFormData = (e, CourseData, SubLicenseType, Err, setErr, Dispatch, setSuccess) => {
    e.preventDefault();
    let Errors = {}
    e.preventDefault();
    const CourseFormData = new FormData();

    for (let [key, value] of Object.entries(CourseData)) {
        if (!value || value === "") Errors[key] = `${key} is required`;
        else delete Errors[key]
    }
    if (CourseData.PossibleKeywords.length <= 0)
        Errors = { ...Errors, PossibleKeywords: `Possible Keyword is required` };
    else
        delete Errors?.PossibleKeywords;

    if (SubLicenseType.length > 0 && !CourseData.SubLicenseTypeFK)
        Errors.SubLicenseTypeFK = `SubLicense type is required`;


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