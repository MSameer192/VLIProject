
const Template = ({ Src, Content, Title, ButtonText }) => {
    return <div className={`flex flex-col  justify-between max-w-[700px] bg-[white] shadow-[2px_3px_6px_#00000029] rounded-3xl 
    px-4    sm:px-4     md:px-6     lg:px-6     xl:px-10    2xl:px-11
    pt-6    sm:pt-7     md:pt-8     lg:pt-9     xl:pt-10    2xl:pt-11
    gap-4   sm:gap-5    md:gap-6    lg:gap-7    xl:gap-8    2xl:gap-9
    pb-4 Tiles
    `}
    >
        <div className='flex flex-col justify-between gap-2 w-full px-4 '>
            <div className='flex justify-between w-full h-14'>
                <h3 className='text-[#4D4F5C] text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base SemiBold'>{Title}</h3>
                {Src ? <img src={Src}
                className="h-7 sm:h-8 md:h-9 lg:h-10 xl:h-11 2xl:h-12"
                 alt="" /> : null}
            </div>


            <div className='flex flex-col w-full gap-5'>
                {Content ? <Content /> : null}
            </div>

        </div>
        <div className="pt-3 w-full PaymentSettingBorder">
            {typeof ButtonText === 'string'
                ? <button className='text-[#518BE6] bg-[#00000000] border-none outline-none cursor-pointer text-4xs md:text-3xs lg:text-2xs xl:text-xs SemiBold ' >{ButtonText}</button>
                : <ButtonText />
            }

        </div>
    </div>
}
export default Template