import React from 'react'
import CourseSearch from './CourseSearch/CourseSearch';
import './LandingPage.css';
import LatestNews from './LatestNews/LatestNews';
import LicenseTypes from './LicenseTypes/LicenseTypes';
import PopularCourses from './PopularCourses/PopularCourses';
import Footer from '../../Components/Footer/Footer'
import SearchTiles from './SearchTiles/SearchTiles.jsx';
import SpecialCourses from './SpecialCourses/SpecialCourses';
import VehicleType from './VehicleType/VehicleType';
import {GetLocalStorage} from '../../Helpers/LocalStorage/LocalStorage.js'
const LandingPage = () => {

  return (
    <>
      <div className='w-full bgGradient absolute rounded-b-[300px] h-[745px] -z-10'>

      </div>
      <div className='relative mb-40 md:mb-10 overflow-hidden w-full flex flex-col items-center md:block'>

        <picture className='hidden md:block -z-10'>

          <img  className='LandingContainerLite relative -top-5 -left-28'
            src={require('./Assets/LiteLandingContainer.svg').default} alt="" />

        </picture>



        <div className='-top-0 rounded-b-[300px] w-full md:h-auto h- md:absolute md:rounded-[0px] md:min-h-fit md:bg-[#291c5f00] '>
          <picture className=' '>

            <source media="(max-width:635px)"
              className=''
              srcSet={require("./Assets/Rectangle.svg").default} />

            <source media="(min-width:768px)" srcSet={require('./Assets/LandingContainer.svg').default} />
            <img className='hidden w-full md:inline-block'
            loading='lazy'
              src={require('./Assets/LandingContainer.svg').default} alt="" />
          </picture>
        </div>

   
        <div className='flex flex-row justify-around items-center mt-[150px] md:mt-0 md:absolute top-32 xl:top-28 left-0 w-full'>

          <div className='flex flex-col mx-1 w-4/5 md:w-auto md:z-10 md:m-0 relative -top-10 gap-10 md:gap-5 lg:gap-10'>
            <h2 className='LandingPagetext text-white text-[30px] md:text-base lg:text-lg xl:text-xl text-center md:text-left md:w-auto '>
              The No. 1 Website as a &nbsp;
              <br className='hidden md:inline' />
              Vehicle Innovation
            </h2>
            <p className='text-white font-thin md:text-left text-4xs md:text-3xs lg:text-2xs xl:text-base Regularfont text-center '>
              Lorem Ipsum is simply dummy text <br />
              of the printing and typesetting industry <br />
              Lorem Ipsum.
            </p>
          </div>

          <img className='w-[35%] xl:w-1/2 relative xl:top-[40px] 2xl:top-[60px] hidden md:inline-block'
            src={require('./Assets/LandingPageCar.png')} alt="" />
        </div>

      </div>
      <SearchTiles />
      <VehicleType />
      <LicenseTypes />
      <PopularCourses />
      <SpecialCourses />
      <CourseSearch />
      <LatestNews />
      <Footer FooterBgColor="#F1FAFF" />
    </>
  )
}

export default LandingPage
