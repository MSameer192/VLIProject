function ImageAndPrice({ value }) {
    return <div className='flex flex-col items-center mx-2 md:mx-5'>
        <ImagePortion />
        <Pricing value={value} />
    </div>

}


function ImagePortion() {
    return <div className='w-full flex justify-center relative m-8 mb-0 '>
        <img className='w-[90%] rounded-[20px]' src={require('../../LandingPage/PopularCourses/Assets/images.jpg')} alt="" />
        <span className={`w-8 h-8 flex justify-center items-center bg-white absolute  rounded-[16px]
                          top-2 md:top-5 
                          right-8 md:right-5`}
        >
            <img className='h-6 relative -top-[2px] md:top-0 md:h-auto' src={require('../../LandingPage/PopularCourses/Assets/Favourite Icon.svg').default} alt="" />
        </span>
    </div>

}



function Pricing({ value }) {
    return <span className={`relative flex justify-center items-center bg-white rounded-[14px]
                            w-[102px]   md:w-[145px] 
                            h-[35px]    md:h-[50px]
                            -top-[15px] md:-top-[40px]`}
    >
        <h4 className='text-center font-extralight text-[12px] md:text-4xs Regularfont'>PKR {value?.Price}</h4>
    </span>

}

export default ImageAndPrice