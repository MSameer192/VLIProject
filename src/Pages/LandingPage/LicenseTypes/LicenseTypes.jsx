import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetLicenseTypes } from '../../../Actions/CategoryA';
import './LicenseTypes.css';
import a from './Assets/Arrow Icon.svg'
const LicenseTypes = () => {
    const Dispatch = useDispatch()
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);
    const [LicenseTypesState, setLicenseTypesState] = useState([
        {
            "LicenseTypeId": "0f5af8b5-02b0-4cc2-9943-e3e05dc363f7",
            "LicenseTypeName": "CLASS G",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668261905635Class G.png",
            "LicenseTypeDescription": "Allowed to drive any car, van or small truck or combination of vehicle and towed vehicle up to 11,000 kilograms provided the vehicle towed is not over 4,600 kilograms. House trailer exceeds 4,600 kilograms, but the total combined weight of the truck and trailer does not exceed 11,000 kilograms is deemed a Class G vehicle.",
            "SubLicenseTypes": [
                {
                    "SubLicenseTypeName": "CLASS G1",
                    "SubLicenseTypeId": "53a173ce-83a6-43ca-ba59-e53a27833712"
                },
                {
                    "SubLicenseTypeName": "CLASS G2",
                    "SubLicenseTypeId": "e24a3914-1820-4925-ace6-0b65869c27cd"
                },
                {
                    "SubLicenseTypeName": "CLASS G",
                    "SubLicenseTypeId": "0e3544f6-7f77-41d4-94b9-1540d633a053"
                }
            ]
        },
        {
            "LicenseTypeId": "8382fc96-f341-491a-8003-d988e630b78b",
            "LicenseTypeName": "CLASS M",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262361816Class M.png",
            "LicenseTypeDescription": "Allowed to drive any motorcycles, including motor tricycles, limited-speed motorcycles (motor scooters) and motor-assisted bicycles (mopeds). Holders may also drive a Class G vehicle under the conditions that apply to a Class G1 licence holder.",
            "SubLicenseTypes": [
                {
                    "SubLicenseTypeName": "CLASS M1",
                    "SubLicenseTypeId": "8469b94a-1eb9-45bd-9776-adb3facf16aa"
                },
                {
                    "SubLicenseTypeName": "CLASS M2",
                    "SubLicenseTypeId": "1624a02b-1d41-49fd-93a6-f87b465dad27"
                },
                {
                    "SubLicenseTypeName": "CLASS M WITH L CONDITION",
                    "SubLicenseTypeId": "00136533-0146-4876-8669-e6e11ae7db64"
                },
                {
                    "SubLicenseTypeName": "CLASS M2 WITH L CONDITION",
                    "SubLicenseTypeId": "cff764b3-e5f3-4c10-8f19-7c707eefa971"
                },
                {
                    "SubLicenseTypeName": "CLASS M WITH M CONDITION",
                    "SubLicenseTypeId": "4e22e545-0e18-4723-8618-9446a0401581"
                },
                {
                    "SubLicenseTypeName": "CLASS M2 WITH M CONDITION",
                    "SubLicenseTypeId": "b3b2d751-dbc2-4f0a-a95f-435c9fe4374b"
                },
                {
                    "SubLicenseTypeName": "CLASS M2 WITH M CONDITION",
                    "SubLicenseTypeId": "48f51907-e0ce-44d3-8ea5-19405cf3bbc2"
                },
                {
                    "SubLicenseTypeName": "CLASS M2 WITH M CONDITION",
                    "SubLicenseTypeId": "59d2a3b1-4b35-4431-b526-b2c670cfe0c9"
                }
            ]
        },
        {
            "LicenseTypeId": "74e7dd9b-b9f8-4cb3-af3b-5d96cb0c6b53",
            "LicenseTypeName": "CLASS D",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262105745Class D.png",
            "LicenseTypeDescription": "A motor vehicle exceeding 11,000 kilograms gross weight or registered gross weight or any truck or combination provided the towed vehicle is not over 4,600 kilograms",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "f36e0c1f-9ade-4196-b845-1fcf518c7ab1",
            "LicenseTypeName": "CLASS E",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262183648Class E.png",
            "LicenseTypeDescription": "Allowed to drive any school purposes bus, maximum of 24-passenger capacity",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "4d27d9e0-6059-4723-be1b-ed5d580df816",
            "LicenseTypeName": "CLASS B",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262030669Class B.png",
            "LicenseTypeDescription": "Allowed to drive any school purposes bus",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "07a1ad53-3dd1-4808-b405-19abac826a04",
            "LicenseTypeName": "Industrial Machinery",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262408956Industrial Machinery.png",
            "LicenseTypeDescription": "A motor vehicle exceeding 11,000 kilograms gross weight or registered gross weight or any truck",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "83130188-3139-4273-bca0-0e3b600677c9",
            "LicenseTypeName": "CLASS C",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262063733Class C.png",
            "LicenseTypeDescription": "Allowed to drive any regular bus",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "c12df256-71df-4b3d-846f-5dbfee3af5a2",
            "LicenseTypeName": "CLASS A",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668261977615Class A.png",
            "LicenseTypeDescription": "Allowed to drive any tractor–trailer combination",
            "SubLicenseTypes": []
        },
        {
            "LicenseTypeId": "6985a4f2-f2e4-449c-86f4-47210dfde928",
            "LicenseTypeName": "CLASS F",
            "LicenseTypeImage": "Public/LicenseType/LicenseTypeImage-1668262234451Class F.png",
            "LicenseTypeDescription": "Allowed to drive any regular bus - maximum of 24-passenger capacity and ambulances",
            "SubLicenseTypes": []
        }
    ]);
    const { LicenseTypes } = useSelector((state) => state.LicenseTypeReducer)

    useEffect(() => {
        // console.log(ref.offsetWidth)
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])
    useEffect(() => {
        Dispatch(GetLicenseTypes())
    }, [Dispatch])
    useEffect(() => {
        // setLicenseTypesState(LicenseTypes)
    }, [LicenseTypes])
    return (
        <div className='lg:mt-28 flex flex-col jus items-center gap-9 lg:gap-28 overflow-hidden'>
            <h2 className='SemiBoldItalic'>Driving License Types</h2>
            <img
                className='w-full'
                src={require('./Assets/DrivingLicenseCars.png')}
                alt="" />
            <div className={`w-full  flex justify-start items-center flex-col`}>
                <img className="hidden lg:inline absolute  w-full -z-10" src={require('./Assets/Notes.png')} alt="" />
                <div className='w-[95%] h-fit flex justify-center  overflow-hidden relative lg:-top-32 lg:mt-64 '>
                    <div
                        style={{ left: -Size + "px" }}
                        className='flex w-full flex-row gap-8 duration-150 justify-start lg:justify-center relative lg:flex-wrap'>
                        <LicenseTypeTiles LicenseTypesState={LicenseTypesState} setref={setref} />
                    </div>
                </div>
                <div className='lg:hidden w-full flex justify-center gap-4 my-10'>

                    {LicenseTypesState.map((value, index) => <span
                        className='w-5 h-5 rounded-[10px] bg-[#A1A3EF] cursor-pointer'
                        onClick={() => { setSize(ref.offsetWidth * index) }}
                    ></span>)}
                </div>

            </div>
        </div>
    )
}
function LicenseTypeTiles({ LicenseTypesState, setref }) {

    return LicenseTypesState?.map((value) => {

        let LicenseTypeDescription = value.LicenseTypeDescription + ".";
        let words = value.LicenseTypeDescription.split(/[-\s(]/);
        // if(value.LicenseTypeName==="CLASS M") console.log(words.length)
        if (words.length > 15)
            LicenseTypeDescription = value.LicenseTypeDescription.split(" ").slice(0, 15).join(' ') + " ...";

        let LicenseTypeName = value.LicenseTypeName
        if (value?.LicenseTypeName !== "Industrial Machinery") LicenseTypeName = value.LicenseTypeName + " Licensing"

        return (
            <div key={value.LicenseTypeId}
                ref={(e) => { setref(e) }}
                className='relative cursor-pointer max-w-[320px] min-w-[220px] w-[60%] h-[324px] flex flex-col items-center lg:h-[480px] gap-7 bg-white rounded-2xl duration-[400ms] hover-on-child'>
                <div className='w-full h-36 lg:h-56 flex items-center justify-center'>
                    <img loading='lazy' src={`/api/LicenseType/image/?url=${value.LicenseTypeImage}`}
                        className='w-[90%]'
                        alt="" />
                </div>
                <div className='flex flex-col items-center gap-3 mx-8 '>
                    <span className=''>
                        <h3 className='font-thin Regularfont text-3xs lg:text-xs text-center'>{LicenseTypeName}</h3>
                        {/* <p className='Regularfont text-center text-4xs'>Vehicles carrying passengers.</p> */}
                    </span>
                    <p className='font-thin Regularfont text-center text-[12px] lg:text-4xs'>{LicenseTypeDescription}</p>
                </div>

                <div className='z-10 w-12 h-12 rounded-[24px] absolute right-3 bottom-3 bg-[#A1A3EF] cursor-pointer btnShadow'>
                    <img className='z-10 absolute left-[13px] top-[18px]  hover:' src={a} alt="" />
                </div>
            </div>)
    })
}

export default LicenseTypes;