import { Link } from 'react-router-dom'

export function RatingBtns({ value }) {
    return <div className={`flex justify-between items-end w-full md:w-[100%] mt-10
    gap-3 md:gap-4 lg:gap-4 xl:gap-8 2xl:gap-10 `}>
        <div className='flex flex-col'>
            <span className='flex gap-1'>{[...new Array(5)].map((value, index) => {
                return <img className='w-5' key={index + .6} src={require('../../CourseOverview/Assets/StarIcon.svg').default} alt='' />
            })}</span>
            <span className='SemiBold text-2xs'>
                <img className='w-5' src={require('../../LandingPage/PopularCourses/Assets/Thumb Icon.svg').default} alt="" /> 100%</span>
        </div>
        <span>

            <h5 className='Regularfont font-thin text-[12px] md:text-5xs whitespace-nowrap'>
                {value?.Institute?.InstituteName}
            </h5>
            <h5 className='Regularfont font-thin text-[12px] md:text-5xs whitespace-nowrap'>{value?.Institute?.Country} | {value?.Institute?.State}</h5>
        </span>
    </div>
}

export function CourseInfo({ value, Path }) {

    return <Link to={Path} className='flex flex-col items-center gap-2 text-black no-underline'>
        <h2 className='Blackfont text-[12px]  md:text-3xs'>{value?.CourseName}</h2>
        <p className='max-w-[250px] text-[12px] md:text-4xs Regularfont text-center break-words'>{value?.Description}</p>
    </Link>
}