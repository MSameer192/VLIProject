import { useEffect, useState } from "react"
import CircularProgress from "./CircularProgress"

function CoursesProgresReport({ TotalClasses, ClassesTaken, Index,Color }) {
    const [PercentageCompletion, setPercentageCompletion] = useState()

    useEffect(() => {

        setPercentageCompletion((ClassesTaken / TotalClasses) * 100)
    }, [TotalClasses, ClassesTaken])


    return <div className={`flex w-full justify-between   rounded-3xl bg-white border-[#CACED5] border-[1px] border-solid shadow-[4px_5px_6px_#00000009] flex-col md:flex-row items-center gap-8 md:gap-3
    px-6    md:px-12    lg:px-16
    py-10
    `}>
        <div className='flex flex-col gap-7  md:gap-20 w-11/12 md:w-3/4  lg:w-4/5'>
            <div className="flex flex-col gap-4">
                <h2 className='text-[30px] md:text-xs lg:text-sm xl:text-base 2xl:text-[30px] text-center md:text-left Boldfont'>Overall Course Completion</h2>
                <p className='text-xs md:text-[19px] lg:text-2xs xl:text-[21px] 2xl:text-xs text-center md:text-left'>This Portion shows the overall Content which you have completed.
                    This Portion shows the overall.</p>
            </div>

           <Classes TotalClasses={TotalClasses} ClassesTaken={ClassesTaken} /> 
        </div>
        <CircularProgress Percentage={PercentageCompletion} Index={Index} Color={Color} />
    </div>
}
export default CoursesProgresReport

function Classes({ TotalClasses, ClassesTaken }) {
    return <div className='flex gap-5 justify-center md:justify-start'>
        <span className='flex flex-col'>
            <span className='text-xs'>
                Total Classes
            </span>
            <span className='text-xs whitespace-nowrap'>
                Completed Classes
            </span>

        </span>
        <span className='flex flex-col'>
            <span className='text-xs'>
                {TotalClasses}
            </span>
            <span className='text-xs'>
                {ClassesTaken}
            </span>
        </span>
    </div>
}