import React from 'react'
import { Link } from 'react-router-dom'
import { Tiles } from './Tiles'

const IntroPart = () => {
  return (
    <div className={`relative flex flex-col items-center h-fit overflow-x-hidden pb-10
                     min-h-[675px]  xl:min-h-[750px]  2xl:min-h-[860px]`}
    >
      <div className={`absolute -z-10 rounded-b-full
      w-full                                  xl:w-full min-h-[750px]
      h-[calc(100vh_-_100px)]       sm:h-full xl:h-auto
      ClassGLicensingMobileGradient`}>
        <img className='hidden sm:block w-auto xl:w-full h-full xl:h-auto' src={require('../Assets/Category G License.png')} alt="" />
      </div>

      <div className='hidden sm:flex w-[85%] items-start my-2'>
        <Link className='text-white text-[21px] no-underline SemiBold'>
          Home  {'>'}  Vehicle License Type  {'>'}  Category G
        </Link>
      </div>

      <MainPart />

    </div>
  )
}

export default IntroPart


function MainPart() {
  return <div className='flex flex-col gap-[88px] mt-10 sm:mt-0'>
    <div className='w-full flex justify-center'>
      <h1 className='text-white p-5 pt-0 text-center HeadingBorder SemiBoldItalic'>
        Class G Licensing
      </h1>
    </div>

    <div className={`flex w-auto justify-center flex-wrap
  gap-4 sm:gap-10 md:gap-20 lg:gap-28 xl:gap-36 2xl:gap-40 
  `}>
      <Tiles Heading='Class G1 Licensing' Detail='Level One of graduated licensing' IMG={require('../Assets/Level1Icon.svg').default} />
      <Tiles Heading='Class G2 Licensing' Detail='Level Two of graduated licensing.' IMG={require('../Assets/Level2Icon.svg').default} />
      <Tiles Heading='Class G Licensing' Detail='Allowed to drive any car.' />
    </div>
  </div>
}


