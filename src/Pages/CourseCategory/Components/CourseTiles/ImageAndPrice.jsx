import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseUrl } from '../../../../Actions/Base'
import { OpenLoginSignUp } from '../../../../Actions/ToggleSignupA';
import { AddtoWishList, RemoveFromWishList } from '../../../../Actions/UserA';


function ImageAndPrice({ value, Image }) {
    return <div className='flex flex-col items-center mx-2 md:mx-5'>
        <ImagePortion Image={Image} InstituteCourseId={value?.InstituteCourseId}
            WishLists={value.WishLists}

        />
        <Pricing value={value} />
    </div>

}


function ImagePortion({ Image, InstituteCourseId }) {

    const Dispatch = useDispatch()

    const [Wish, setWish] = useState(false)
    const { Authenticated, loading } = useSelector((Store) => Store.LoginSignupReducer)
    const { WishList } = useSelector((Store) => Store.WishListReducer)
    const AddToWishlist = (e) => {
        if (Authenticated) {

            e.stopPropagation();
            Dispatch(AddtoWishList(InstituteCourseId))
        } else
            Dispatch(OpenLoginSignUp("Sign In", false))
    }
    const RemoveFromWishlist = (e) => {

        if (Authenticated) {
            e.stopPropagation();
            Dispatch(RemoveFromWishList(Wish))
        } else
            Dispatch(OpenLoginSignUp("Sign In", false))
    }



    useEffect(() => {
        if (WishList && WishList.length) {

            WishList.forEach((value) => {

                if (value.ProductFK === InstituteCourseId)
                    setWish(value.WishId)

            })
        }
        else if (WishList?.length === 0) {
            setWish(false)
        }
    }, [WishList, InstituteCourseId])

    return !loading
        ? <div className='w-full flex justify-center relative m-8 mb-0  rounded-[20px]' >
            <span className='w-[90%] rounded-[20px] flex justify-center items-center min-h-[250px]'>
                <img className='w-full' src={`${BaseUrl}/api/LicenseType/Image?url=${Image}`} alt="Courseimg" />
            </span>
            <span className={`w-8 h-8 flex justify-center items-center bg-white absolute  rounded-[16px] cursor-pointer
                          top-2     md:top-5 
                          right-8   md:right-5`}


            >
                {
                    !Wish
                        ? <img className='h-6 relative -top-[2px] md:top-0 md:h-auto' src={require('../../../LandingPage/PopularCourses/Assets/Favourite Icon.svg').default} alt=""
                            onClick={AddToWishlist}
                        />
                        : <img className='h-6 relative -top-[2px] md:top-0 md:h-auto' src={require('../Assets/CarIcon.svg').default} alt=""
                            onClick={RemoveFromWishlist}
                        />
                }
            </span>
        </div>
        : <h1 className='text-black text-xl'>Content loading</h1>

}



function Pricing({ value }) {
 
    return <span className={`relative flex justify-center items-center bg-white rounded-[14px]
                            w-[102px]   md:w-[145px] 
                            h-[35px]    md:h-[50px]
                            -top-[15px] md:-top-[40px]`}
    >
        <h4 className='text-center font-extralight text-[12px] md:text-4xs Regularfont'>

            {value?.CoursePackages && `${value?.CoursePackages[0]?.TotalFee} `} $
        </h4>
    </span>

}

export default ImageAndPrice