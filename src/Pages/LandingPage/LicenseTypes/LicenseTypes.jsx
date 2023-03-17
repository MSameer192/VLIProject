import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetLicenseTypes } from '../../../Actions/CategoryA';
import './LicenseTypes.css';
import a from './Assets/Arrow Icon.svg'
import { BaseUrl } from '../../../Actions/Base';
import { Link } from 'react-router-dom';
import CoursesSlider from '../../../Components/CourseSlider/CourseSlider';
let ClassNames = `relative   duration-300 flex items-start my-10
                    w-[95%]                             lg:w-11/12                  xl:w-[97%]       
                    flex-nowrap     md:flex-wrap  
                    justify-start   md:justify-around   lg:justify-center
                    gap-7                               lg:gap-x-8 lg:gap-y-16
                    `
const LicenseTypes = () => {
    const Dispatch = useDispatch()
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);
    const [LicenseTypesState, setLicenseTypesState] = useState([]);
    const { LicenseTypes } = useSelector((state) => state.LicenseTypeReducer)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])
    useEffect(() => {
        Dispatch(GetLicenseTypes())
    }, [Dispatch])
    useEffect(() => {
        setLicenseTypesState(LicenseTypes)
    }, [LicenseTypes])
    return (
        <div id='LicenseTypes' className='lg:mt-28 flex flex-col jus items-center gap-9 lg:gap-28 overflow-hidden'>
            <h2 className='SemiBoldItalic'>Driving License Types</h2>
            <img
                className='w-full'
                src={require('./Assets/DrivingLicenseCars.png')}
                alt="" />


            <div className={`w-full relative`}>
                <img className="hidden lg:inline absolute  w-full -z-10" src={require('./Assets/Notes.png')} alt="" />
                {/* <div className='w-[95%] h-fit flex justify-center relative lg:-top-32 lg:mt-64 '>
                    <div
                        style={{ left: -Size + "px" }}
                        className='flex w-full flex-row gap-8 duration-150 justify-start lg:justify-center relative lg:flex-wrap'>
                        <LicenseTypeTiles LicenseTypesState={LicenseTypesState} setref={setref} />
                    </div>
                </div>
                <div className='lg:hidden w-full flex justify-center gap-4 my-10'>

                    {LicenseTypesState.map((value, index) => <span key={index + 0.1}
                        className='w-5 h-5 rounded-[10px] bg-[#A1A3EF] cursor-pointer'
                        onClick={() => setSize(ref.offsetWidth * index)}
                    ></span>)}
                </div> */}

                <CoursesSlider CoursesInfo={LicenseTypesState} ClassNames={ClassNames} CourseTiles={LicenseTypeTiles}
                    ShowMore={false} NavigateBtnClass='G1Licensing' SwitchSize={"md"} ExtraMove={28}
                />

            </div>
        </div>
    )
}
function LicenseTypeTiles({ CoursesInfo, setref }) {

    return CoursesInfo?.map((value) => {

        let LicenseTypeDescription = value.LicenseTypeDescription + ".";
        let words = value.LicenseTypeDescription.split(/[-\s(]/);

        if (words.length > 15)
            LicenseTypeDescription = value.LicenseTypeDescription.split(" ").slice(0, 15).join(' ') + " ...";

        let LicenseTypeName = value.LicenseTypeName
        if (value?.LicenseTypeName !== "Industrial Machinery") LicenseTypeName = value.LicenseTypeName + " Licensing";



        let HoverStyle = "hover:origin-top-left hover:gap-10 hover:md:gap-6 hover:scale-100 md:hover:scale-[1.04]"
        let TransitionDuration = "duration-[400ms]";

        if (LicenseTypeName !== "Industrial Machinery")
            LicenseTypeName = `Class ${LicenseTypeName}`
        return (
            <Link key={value.LicenseTypeId}
                to={`/license/category/${value.LicenseTypeId}`}
                ref={(e) => { setref(e) }}
                className={`flex flex-col items-center relative cursor-pointer text-black no-underline
                max-w-[320px] min-w-[220px] w-[60%] gap-7 bg-white rounded-2xl duration-[400ms] ${HoverStyle} ${TransitionDuration}

                h-[324px]                       lg:h-[480px] 
                hover-on-child LicenseShadow`}>
                <div className='w-full h-36 lg:h-56 flex items-center justify-center'>
                    <img id='LicenseTypeImage'
                        loading='lazy' src={`${BaseUrl}/api/LicenseType/image/?url=${value.LicenseTypeImage}`}
                        className={`w-[90%] ${TransitionDuration}`}
                        alt="" />
                </div>
                <div id='LicenseTypeInfo' className={`flex flex-col items-center gap-3 mx-8 ${TransitionDuration}`}>

                    <h3 className='font-thin  text-3xs lg:text-xs text-center Regularfont'>  {LicenseTypeName} </h3>


                    <p className="font-thin  text-center text-[12px] lg:text-4xs Regularfont">{LicenseTypeDescription}</p>
                </div>

                <div className='z-10 w-12 h-12 rounded-[24px] absolute right-3 bottom-3 bg-[#A1A3EF] cursor-pointer btnShadow'>
                    <img className='z-10 absolute left-[13px] top-[18px]  hover:' src={a} alt="" />
                </div>
            </Link>)
    })
}

export default LicenseTypes;