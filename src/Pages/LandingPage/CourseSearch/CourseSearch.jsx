import React from 'react'
import './CourseSearch.css'
const CourseSearch = () => {

    return (
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h2 className='PrintBoldfont text-xl'>Course Search</h2>
            <img src={require("./Assets/Course Search Big Img.svg").default}
               className='w-full max-w-[1125px]'
                alt="" />

            <div className='flex justify-center items-center gap-4'>
                <input className={`pt-3 pb-2 px-8 w-[325px] lg:w-[400px] Regularfont text-[14px] lg:text-xs rounded-[20px] h-[54px] outline-none  border-none focus:border-[1px] focus:border-solid focus:border-black SearchBox_DropShadow`}
                    type="text"
                    placeholder='Search Course With Code...... '
                />
                <div className='h-10 lg:h-14 w-10 lg:w-14 bg-white rounded-[28px] SearchIcon_DropShadow flex justify-center items-center  cursor-pointer'>
                    <span className='flex justify-center items-center cursor-pointer'><SearchIcon /></span>
                </div>
            </div>
        </div>
    )
}
function SearchIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 31.205 31.21">
        <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M30.78,26.983,24.7,20.906a1.462,1.462,0,0,0-1.036-.427h-.994a12.672,12.672,0,1,0-2.194,2.194v.994a1.462,1.462,0,0,0,.427,1.036l6.077,6.077a1.457,1.457,0,0,0,2.066,0l1.725-1.725a1.47,1.47,0,0,0,.006-2.072Zm-18.1-6.5a7.8,7.8,0,1,1,7.8-7.8A7.8,7.8,0,0,1,12.678,20.48Z" transform="translate(0)" fill="#b1b1b1" />
    </svg>

}
export default CourseSearch