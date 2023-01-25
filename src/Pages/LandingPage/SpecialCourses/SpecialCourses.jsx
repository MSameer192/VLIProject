import React, { useEffect, useRef, useState } from 'react'
import CoursesTiles from '../CourseTilesComponent/CoursesTiles';
import "./SpecialCourses.css"
const SpecialCourses = () => {

    const [BackImageHeight,setBackImageHeight]=useState();
    const [ApplyBackImgHeight,setApplyBackImgHeight]=useState()

    useEffect(() => {
        // setImgHeight(Img?.current?.clientHeight)
    }, [])
    const [SpecialCoursesInfo, setSpecialCoursesInfo] = useState([
        {
            CourseName: "Automotive",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Vehicle Mechanics",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Memberpress Course",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
        {
            CourseName: "Memberpress Course",
            CourseDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            Price: 38000
        },
    ])
    useEffect(()=>{
        window.addEventListener("resize", () => {
            setApplyBackImgHeight(BackImageHeight?.offsetHeight+10+"px")
        })
        setApplyBackImgHeight(BackImageHeight?.offsetHeight+10+"px")
    },[BackImageHeight])
// console.log(BackImageHeight?.offsetHeight+10+"px",ApplyBackImgHeight)
    return (
        <div 
        // style={{height:ApplyBackImgHeight}}
        className={`relative w-full flex justify-start items-center flex-col py-14 Boldfont gap-16`}>
            <img src={require('./Assets/SpecialCoursesBG.png')}
                className='w-full absolute -z-10 top-0'
                ref={(e)=>{setBackImageHeight(e)}}
                alt="" />
            <h2 className='Reg text-white mx-2'>Here you will get the list of Special Courses</h2>
            <div className='w-full 2xl:w-4/5 flex gap-4 lg:gap-20 flex-col-reverse lg:flex-row'> 
                <img src={require('./Assets/Special Course Img.svg').default}
                    className='lg:w-[50%]   xl:w-[70%] 2xl:w-[80%] '
                    alt="" />
                <SpecialCoursesIntro />
            </div>


                <CoursesTiles CoursesInfo={SpecialCoursesInfo} />
    
            
            <button className='Regularfont px-3 py-3 bg-[#A1A3EF] text-white text-base cursor-pointer rounded-xl border-none ShowMoreBtn_BlackShadow'>
                Show More
            </button>
        </div>
    )
}
function SpecialCoursesIntro() {
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])
    let x = [
        {
            Heading: "Sponsorship",
            Info: "Your sponsored Courses will be listed Here"
        },
        {
            Heading: "Selling preposition",
            Info: "Unique selling proposition (USP) of your courses"
        },
        {
            Heading: "Traffic",
            Info: "You can Gain reasonable valuable insights"
        },
        {
            Heading: "Top Ranking",
            Info: "You can Rank up your courses through Sponsorship"
        }
    ]
    return  (
    <div className="w-full h-fit   relative mb-0 lg:mb-16 flex flex-col gap-5"> 
        <div className='w-[95%]  mx-2 mt-5 overflow-hidden  md:overflow-visible'>
        <div
        style={{ left: -Size + "px" }}
         className='flex  md:flex-row gap-7 duration-300 relative md:justify-center lg:justify-start  flex-nowrap md:flex-wrap'>
            {x.map((value,index) => {
                let Move;
                if(index===0||index===2)Move="lg:-top-6"
                
                return <div
                ref={(e)=>{setref(e)}}
                className={`${Move} flex relative min-w-[270px]  max-w-[270px] flex-col gap-  bg-white max-h-[230px] rounded-3xl p-5  gap-5 `}>
                
                    <span className='flex justify-start items-start flex-col SemiBold text-2xs gap-1 px-4'>
                        <img src={require("./Assets/Car Icon.svg").default}
                            className='h-14 '
                            alt=""
                        />
                        <h4 className='mx-2 text-[#707070]'>{value.Heading}</h4>
                    </span>
                    <p className='Regularfont text-[17px] text-center mb-6'>{value.Info}</p>
            
                </div>
            })}
        </div>
        </div>
        <div className='md:hidden w-full flex justify-center gap-4 my-10'>
            {x.map((value, index) => {
                return (
                    <span onClick={(e) => setSize(ref.offsetWidth * index)}
                        className='w-5 h-5 rounded-[28px]  bg-[#A1A3EF] cursor-pointer NavigateButton_DropShadow'>
                    </span>
                )
            })}
        </div>
    </div>
    )
}


export default SpecialCourses


// <div className='flex flex-col gap-7 w-1/2'>
           
// <div className='bg-white max-w-[270px] rounded-3xl p-5 flex flex-col gap-5 h-[]'>
//     <span className='flex justify-start items-start flex-col SemiBold text-2xs gap-1 px-4'>
//         <img src={require("./Assets/Car Icon.svg").default}
//             className='h-14 '
//             alt=""
//         />
//         <h4 className='mx-2 text-[#707070]'></h4>
//     </span>
//     <p className='Regularfont text-3xs text-center mb-6'></p>
// </div>
// </div>




// <div className='flex flex-col gap-7 relative top-7 w-1/2'>
// <div className='bg-white max-w-[270px] rounded-3xl p-5 flex flex-col gap-5 h-[]'>
//     <span className='flex justify-start items-start flex-col SemiBold text-2xs gap-1 px-4'>
//         <img src={require("./Assets/Car Icon.svg").default}
//             className='h-14 '
//             alt=""
//         />
//         <h4 className='mx-2 text-[#707070]'></h4>
//     </span>
//     <p className='Regularfont text-3xs text-center mb-6'></p>
// </div>
// <div className='bg-white max-w-[270px] rounded-3xl p-5 flex flex-col gap-5 h-[]'>
//     <span className='flex justify-start items-start flex-col SemiBold text-2xs gap-1 px-4'>
//         <img src={require("./Assets/Car Icon.svg").default}
//             className='h-14 '
//             alt=""
//         />
//         <h4 className='mx-2 text-[#707070]'></h4>
//     </span>
//     <p className='Regularfont text-3xs text-center mb-6'></p>
// </div>
// </div>