
const Template = ({ Src, Content, Title, ButtonText }) => {
    return <div className="PaymentTemplateContainer"
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
        <div className="pt-3 w-full PaymentActionBorder ">
            {typeof ButtonText === 'string'
                ? <button className='text-[#518BE6] bg-[#00000000] border-none outline-none cursor-pointer text-4xs md:text-3xs lg:text-2xs xl:text-xs SemiBold ' >{ButtonText}</button>
                : <ButtonText />
            }

        </div>
    </div>
}
export default Template