import { useEffect, useState } from 'react';
import './CoursesTiles.css'
const CoursesTiles = ({ CoursesInfo }) => {
    const [ref, setref] = useState({});
    const [Size, setSize] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(0)
        })
    }, [ref])

    return <div className='w-full h-fit relative mb-16 flex justify-center flex-col gap-5'>
        <div  className='w-[95%]  mx-2 mt-5 overflow-hidden'>
            <div

                style={{ left: -Size + "px" }}
                className="flex w-full flex-row gap-6 duration-150 justify-start md:justify-center relative lg:gap-8 mt-0 md:flex-wrap "
            >
                {CoursesInfo?.map((value) => {
                    return (
                        <div
                            ref={(e) => { setref(e) }}
                            className='w-[325px] bg-white flex flex-col rounded-[20px] p-5 items-center h- relative hover:cursor-pointer hover:bg-[#BCBEFF] duration-300 CourseTile'>
                            <div className='flex flex-col items-center '>
                                <div className='w-fit relative m-8 mb-0'>
                                    <img className='rounded-[20px]' src={require('./Assets/images.jpg')} alt="" />
                                    <span className='p-3 bg-white absolute top-5 right-5 rounded-[14px]'>
                                        <FavouriteIcon Classes={"FavIcon"} />
                                    </span>
                                </div>

                                <span className='min-w-[145px] w-fit min-h-[50px] relative -top-[40px] flex justify-center items-center bg-white  rounded-[14px] PriceShadow'>
                                    <h4 className='text-center font-extralight text-4xs Regularfont text-black'>PKR {value.Price}</h4>
                                </span>

                            </div>

                            <div className='flex flex-col items-center gap-2'>
                                <h2 className='Blackfont text-3xs'>{value.CourseName}</h2>
                                <p className='max-w-[250px] Regularfont text-center'>{value.CourseDescription}</p>
                            </div>


                            <div className='flex  justify-between items-center w-[85%] mt-10 '>
                                <div className='flex flex-col'>
                                    <span className='RatingStars'>* * * * *</span>
                                    <span className='SemiBold text-xs'>
                                        <ThumbIcon Classes={"ThumbIcon"} /> 100%
                                    </span>
                                </div>
                                <h5 className='Regularfont font-thin text-4xs'>30 Lectures course</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='md:hidden w-full flex justify-center gap-4 my-10'>
            {CoursesInfo.map((value, index) =>
                <span onClick={(e) => setSize(ref.offsetWidth * index)}
                    className='w-5 h-5 rounded-[28px] bg-[#A1A3EF] cursor-pointer NavigateButton_DropShadow'>
                </span>)}
        </div>
    </div>
}

function ThumbIcon({ Classes }) {


    return <svg id="Icon_ionic-md-thumbs-up" data-name="Icon ionic-md-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="22.28" height="20.571" viewBox="0 0 22.28 20.571">
        <defs>

        </defs>
        <path id="Path_79847" data-name="Path 79847" className={Classes} d="M13.286,25.071H22.5a1.966,1.966,0,0,0,1.832-1.254l3.059-7.254a2.05,2.05,0,0,0,.139-.75V13.746a2.363,2.363,0,0,0-2.025-2.389H19.12l.964-4.366.032-.321a1.553,1.553,0,0,0-.445-1.088L18.589,4.5l-6.75,6.82a2.062,2.062,0,0,0-.589,1.452V23.057A2.02,2.02,0,0,0,13.286,25.071Z" transform="translate(-5.25 -4.5)" />
        <path id="Path_79848" data-name="Path 79848" className={Classes} d="M3.375,15.75H6.8v12H3.375Z" transform="translate(-3.375 -7.179)" />
    </svg>
}
function FavouriteIcon({ Classes }) {

    return <svg xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037" viewBox="0 0 24.037 24.037">
        <defs>

        </defs>
        <path id="Path_79849" data-name="Path 79849" className={Classes} d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772ZM14.346-1.314v-.679l-.005-.158A4.434,4.434,0,0,0,9.912-6.363,4.433,4.433,0,0,0,5.478-2.077V7.53h8.87V7.507l.821.023h.064a4.434,4.434,0,0,0,.007-8.868h-.083l-.132,0-.66.036v-.017Z" transform="translate(2.717 20.496) rotate(-45)" />
    </svg>
}
export default CoursesTiles  