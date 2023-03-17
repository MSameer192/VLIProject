import React from 'react'

import ImageAndPrice from './ImageAndPrice'
import { CourseInfo, RatingBtns } from './Navigation'

export function CourseTiles({ CoursesInfo, setref }) {


    return (
        <>
            {CoursesInfo?.map((Course, index) => {

                return Course?.InstituteCourses?.map((InstituteCourses) =>
                    <div
                        className={`flex flex-col rounded-[20px] items-center
                    bg-white relative  duration-300  hover:bg-[#BCBEFF] w-1/5
                      min-w-[252px] no-underline text-black

                    px-2                        lg:px-3             xl:px-4             2xl:px-5
                    pb-1            md:pb-2     lg:pb-3                                 2xl:pb-4
                    max-w-[275px]               lg:max-w-[300px]    xl:max-w-[325px]    2xl:max-w-[360px] 
            `}
                        ref={(e) => { setref(e) }}
                        key={Number(index)}
                    >
                        <ImageAndPrice value={InstituteCourses} Image={Course.CourseThumbnail} />

                        <CourseInfo value={Course} Path={`/course/${InstituteCourses?.InstituteCourseId}`} />

                        <RatingBtns value={InstituteCourses} Path={`/course/${InstituteCourses?.InstituteCourseId}`} />
                    </div>
                )

            })}


        </>
    )
}

export default CourseTiles