import { Tags } from "../../../Components/Tags/Tags"


const SearchTags = ({ setCourseData, CourseData, Err, setErr }) => {
    return (
        <div className='DataInputContainer'>
            <span className='Admin_HeadingContainer'>
                <h3 className='InputHeadings'>
                    Possible Search Tags
                </h3>
                <p className='InputDetails'>
                    Search tags are keywords that clients use to find the desired Course/services.
                </p>
            </span>

            <div className="max-w-[730px] Add_C_B_InputSideContainer">
                <div className="h-fit">
                    <Tags setState={setCourseData} State={CourseData} Err={Err} setErr={setErr} />
                </div>
                <p className='text-[14px] text-[red] font-normal h-[14px]'>{Err?.PossibleKeywords} </p>
                <p className="text-right text-[12px]">
                    Maximum 5
                </p>
            </div>
        </div>
    )
}
export default SearchTags