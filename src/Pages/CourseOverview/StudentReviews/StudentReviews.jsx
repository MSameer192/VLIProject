import React from 'react'

const StudentReviews = ({StudentReviewRef}) => {
    return (
        <div className='flex flex-col gap-10 items-center pt-10 pb-40' ref={StudentReviewRef}>
            <h2 className='text-[38px] text-white PrintBoldfont '>Students Reviews</h2>
            <div className='flex gap-6 flex-wrap justify-center w-[95%]'>
                <div className='flex items-start px-10 pt-20 pb-10 rounded-[18px]  bg-white max-w-[500px]  RevewTileShadow'>
                    <img className='w-8 relative -left-3 -top-6' src={require('./Assets/QuoteIcon.svg').default} alt="" />
                    <div className='flex flex-col justify-between  gap-16'>
                        <UserReview />
                        <UserImageName />
                    </div>
                </div>
                <div className='flex items-start px-10 pt-20 pb-10 rounded-[18px]  bg-white max-w-[500px]  RevewTileShadow'>
                    <img className='w-8 relative -left-3 -top-6' src={require('./Assets/QuoteIcon.svg').default} alt="" />
                    <div className='flex flex-col justify-between  gap-16'>
                        <UserReview />
                        <UserImageName />
                    </div>
                </div>
                <div className='flex items-start px-10 pt-20 pb-10 rounded-[18px]  bg-white max-w-[500px]  RevewTileShadow'>
                    <img className='w-8 relative -left-3 -top-6' src={require('./Assets/QuoteIcon.svg').default} alt="" />
                    <div className='flex flex-col justify-between  gap-16'>
                        <UserReview />
                        <UserImageName />
                    </div>
                </div>

            </div>
        </div>
    )
}
function UserImageName() {
    return (
        <div className='flex items-center w-fit gap-3 relative -left-5'>
            <div className='w-20 h-20 rounded-[40px] overflow-hidden'>
                <img src={require('./Assets/User Image.png')} alt="" />
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='flex flex-col items-start'>
                    <h4 className='font-normal text-2xs' >Ayesha</h4>
                    <h4 className='font-normal text-2xs text-[#848484]'>Project Manager</h4>
                </span>

                <StarIcon />
            </div>
        </div>
    )
}

function UserReview() {
    return (
        <>

            <span className='flex justify-start gap-4'>
                <p className='max-w-[350px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet
                </p>
            </span>
        </>
    )
}

function StarIcon() {
    return (
        <div className='flex gap-1 w-fit'>
            <img className='w-5' src={require('../CourseIntro/Assets/StarIcon.svg').default} alt="" srcSet="" />
            <img className='w-5' src={require('../CourseIntro/Assets/StarIcon.svg').default} alt="" srcSet="" />
            <img className='w-5' src={require('../CourseIntro/Assets/StarIcon.svg').default} alt="" srcSet="" />
            <img className='w-5' src={require('../CourseIntro/Assets/StarIcon.svg').default} alt="" srcSet="" />
            <img className='w-5' src={require('../CourseIntro/Assets/StarIcon.svg').default} alt="" srcSet="" />
        </div>
    )
}
export default StudentReviews