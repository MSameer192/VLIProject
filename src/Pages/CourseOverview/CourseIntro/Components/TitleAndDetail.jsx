import { RatingAndReviewd } from "./RatingAndReview";

export function TitleAndDetail({ CourseInfo }) {
    return <span className={`text-white px-4 flex flex-col items-center justify-between sm:block`}>
        <h2 className={`text-white flex order-1 
                        text-xs sm:text-[40px] Blackfont`}>
            {CourseInfo?.Course?.CourseName}
        </h2>
        <p className='inline-block text-2xs mt-3 mb-5 order-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus vehicula elit vel egestas.
        </p>
        <p className='hidden sm:block text-4xs sm:text-2xs mb-4 SemiBold'>22,000 Students already enrolled</p>
        <RatingAndReviewd />
    </span>
}
