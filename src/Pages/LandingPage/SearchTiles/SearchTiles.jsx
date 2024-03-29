import React, { useState } from 'react'
import './SearchTiles.css';
import FrontCarImage from './Assets/FrontCarImage.png';
import StudentsImage from './Assets/StudentsImage.png';
import SideCarImg from './Assets/SideCarImg.png';
import BulbIcon from './Assets/BulbIcon.png'
const SearchTiles = () => {
  const [TilesInfo] = useState([
    { ImageLink: SideCarImg, Heading: "Search by Vehicle", Text: "Lorem Ipsum is simply dummy text  of the printing and typesetting.", href: '#VehicleTypes' },
    { ImageLink: FrontCarImage, Heading: "Search by License", Text: "Lorem Ipsum is simply dummy text  of the printing and typesetting.", href: "#LicenseTypes" },
    { ImageLink: StudentsImage, Heading: "Show All Courses", Text: "Lorem Ipsum is simply dummy text  of the printing and typesetting.", href: "#CourseSearch" }

  ])
  // [rgba(238,238,238,1)]
  return (


    <div className='relative flex flex-col justify-center items-center w-full flex-wrap gap-5 bg-[#4d4d4d00]  md:top-0 md:flex-row md:gap-10 2xl:gap-20'>


      {TilesInfo.map((value, index) =>

        <a href={value.href} key={index} className={`border-solid border-2 border-[rgba(238,238,238,1)] bg-white max-w-[350px]  max-h-[355px] text-black no-underline
        flex justify-center  items-center flex-col gap-5
        transition-all rounded-2xl cursor-pointer 
        hover:scale-100 hover:origin-top-left hover:bg-[#ABACEF] md:hover:scale-[1.09] 
        TilesShadow`}>
          <div className='w-20 md:w-28'>
            <img loading='lazy' src={value.ImageLink} alt="" className='w-full' />
          </div>
          <div className='flex flex-col gap-[5px]'>
            <h3 className='text-center Blackfont'>{value.Heading}</h3>
            <p className='w-56 md:w-72 text-center Regularfont '>{value.Text}</p>
          </div>
        </a>

      )}
      <picture>
        {/* <source media="(max-width:640px )" srcset="" /> */}
        <img loading='lazy' className='hidden xl:inline-block absolute -z-10 -left-32 -top-48 h-[380px]' src={BulbIcon} alt="" />
      </picture>

    </div>


  )
}

export default SearchTiles