
export function TitleAndDuration({ CourseInfo }) {

    return <div className='flex flex-row w-full justify-between items-center gap-3 px-3' >
        <div className='block sm:hidden min-w-[140px] max-w-[440px] w-[40%]'>
            <img className='w-full' src={require('./Assets/Course Image.png')} alt="" />
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-white text-xs sm:text-[40px] Blackfont'>{CourseInfo?.Course?.CoursePK}</h2>
            <span className='flex gap-16 items-center'>
                <span className='flex gap-3 items-center text-white'>
                    <img className='w-5  sm:w-auto' src={require('./Assets/TimeIcon.svg').default} alt="" />
                    <h4 className='text-4xs sm:text-xs SemiBold'> 2 - 3 weeks</h4>
                </span>
                <span className='hidden sm:flex gap-3 items-center text-white '>
                    <img className='w-5  sm:w-auto' src={require('./Assets/LaptopIcon.svg').default} alt="" />
                    <h4 className='text-4xs sm:text-xs SemiBold'> 100% Online Registration</h4>
                </span>
            </span>
        </div>
    </div>
}

export function ShortDetail() {
    return <span className={`text-white px-4 flex items-center justify-between sm:block`}>
        <p className='hidden sm:inline-block text-2xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.</p>
        <p className='text-4xs sm:text-2xs SemiBold'>22,000 Students already enrolled</p>
    </span>
}


export function RatingAndReviewd() {
    return <span className='flex flex-row sm:flex-col justify-between gap-2 px-3'>
        <span className='flex gap-3 items-center'>
            <span className='flex gap-1'>
                <img className='w-[14px] sm:w-auto' src={require('./Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('./Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('./Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('./Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('./Assets/StarIcon.svg').default} alt="" />
            </span>

            <h5 className='text-white text-4xs SemiBold' >(Reviewed by 2000 Students)</h5>
        </span>


        <span className='flex gap-1 items-center'>
            <img className='h-5 cursor-pointer' src={require('./Assets/ThumbIcon.svg').default} alt="" />
            <h5 className='text-base SemiBold text-white'>
                %100
            </h5>
        </span>
    </span>
}

