

export function RatingAndReviewd() {
    return <span className='flex flex-row sm:flex-col justify-between gap-2  mt-3 order-2'>
        <span className='flex gap-3 items-center'>
            <span className='flex gap-1'>
                <img className='w-[14px] sm:w-auto' src={require('../Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('../Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('../Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('../Assets/StarIcon.svg').default} alt="" />
                <img className='w-[14px] sm:w-auto' src={require('../Assets/StarIcon.svg').default} alt="" />
            </span>
            <h5 className='text-white text-4xs SemiBold' >Reviewed by 2000 Students</h5>
        </span>


        <span className='flex gap-1 items-center '>
            <img className='h-5 cursor-pointer' src={require('../Assets/ThumbIcon.svg').default} alt="" />
            <h5 className='text-base SemiBold text-white'>
                %100
            </h5>
        </span>
    </span>
}

