import { BaseUrl } from '../../../../Actions/Base'

export function Tiles({ Heading, Detail, IMG }) {

    let TilesStyle=`relative flex flex-col items-center bg-white   rounded-2xl duration-[400ms] cursor-pointer overflow-hidden
    w-fit          sm:w-1/2
    max-w-[350px]   sm:max-w-[250px]    md:max-w-[280px]    lg:max-w-[300px]    xl:max-w-[320px]
    min-w-[220px]       
    h-[400px]                                                                   xl:h-[425px] 2xl:h-[450px]
    px-1                                md:px-2                                 xl:px-3 
    pt-3                                                    lg:pt-5             xl:pt-6 
    pb-8                                                    lg:pb-14            xl:pb-20
    hover-on-child LicenseShadow`
    return <div className={TilesStyle}>

        <img className='absolute left-0 top-4 ' src={IMG} alt="" />
        <span className='w-full'>
            <img className='w-[115%] ' src={`${BaseUrl}/api/LicenseType/image/?url=Public/LicenseType/LicenseTypeImage-1671042647442Class G.png`} alt="" />

        </span>
        <span className='flex flex-col w-full items-center  gap-10'>
            <h3 className='font-normal text-xs'>{Heading} </h3>
            <p className='text-4xs'>{Detail} </p>
        </span>
        <div className='z-10 w-12 h-12 rounded-[24px] absolute right-3 bottom-3 bg-[#A1A3EF] cursor-pointer btnShadow'>
            <img
                className='z-10 absolute left-[13px] top-[18px]  hover:'
                src={require('../../../LandingPage/LicenseTypes/Assets/Arrow Icon.svg').default}
                alt="" />
        </div>
    </div>

}