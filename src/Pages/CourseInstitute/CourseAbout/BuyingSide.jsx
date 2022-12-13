function BuyingSide() {
    let ButtonStyle ="text-white bg-[#A1A3EF] text-[24px] text-center py-6 rounded-[9px] border-none px-10 cursor-pointer SemiBold"


    return <div className='hidden bg-white sm:flex flex-col gap-9 px-12 py-14 rounded-[14px] relative -top-20 z-20'>
        <div className=' flex flex-col gap-4'>
            <span className='[&>*]:SemiBold [&>*]:text-[#A1A3EF]'>
                <h3 className='text-[24px]'>Fee</h3>
                <h2 className='text-xl '>PKR 2000</h2>
            </span>
            <span className={`flex flex-col gap-5`}>
                <button className={ButtonStyle}>
                    Enroll for 2000/Rs
                </button>
                <button className={ButtonStyle}>
                    <img className='w-6' src={require('./Assets/DownloadIcon.svg').default} alt="" />
                    Download Curriculum
                </button>
            </span>
        </div>
        <hr className='w-full bg-[#707070] h-[1px]' />

        <div className='flex flex-col gap-10'>
            <h3 className='text-base SemiBold'>Course Outlines</h3>
            <span className='flex flex-col gap-8 [&>*]:flex [&>*]:items-center [&>*]:gap-4'>
                <span>
                    <img src={require('./Assets/BooksIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Books</h4>
                </span>
                <span>
                    <img src={require('./Assets/AssignmentsIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Assignments</h4>
                </span>
                <span>
                    <img src={require('./Assets/QuizIcon.svg').default} alt="" />
                    <h4 className='font-normal text-[24px]'>Quiz</h4>
                </span>
            </span>
        </div>
    </div>
}

export default BuyingSide