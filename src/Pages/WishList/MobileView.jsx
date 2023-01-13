import React from 'react'
import { BaseUrl } from '../../Actions/Base'

const MobileView = ({ WishListArr }) => {
    return (
        WishListArr?.map((Wish) =>

            <div className='bg-white w-[95%] sm:w-fit rounded-2xl px-6 py-4 justify-around gap-4 flex md:hidden' key={Wish.WishId}>

                <div className='flex gap-5'>
                    <span className='w-24 sm:w-28'>
                        <img className='w-full' src={`${BaseUrl}/api/LicenseType/Image?url=${Wish.InstituteCourse?.Course?.CourseThumbnail}`} alt="" />
                    </span>
                    <div className='flex justify-start gap-3 flex-col'>
                        <h3 className='text-4xs sm:text-sm font-normal Boldfont'>{Wish.InstituteCourse?.Course?.CourseName}</h3>
                        <p className='text-7xs'>{Wish.InstituteCourse?.ShortDescription}</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start gap-3'>
                    <button className={`bg-[#A1A3EF] text-white px-3 py-2 border-none cursor-pointer rounded-xl whitespace-nowrap
                              text-4xs sm:text-3xs`}>
                        Add to cart
                    </button>
                    <h4 className='font-normal text-4xs sm:text-4xs'>{Wish.InstituteCourse?.CoursePackages[0]?.TotalFee} $</h4>
                </div>
            </div>
        )
    )
}

export default MobileView