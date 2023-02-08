import { Tags } from "../../../Components/Tags/Tags"


const SearchTags = ({ setCourseData, CourseData }) => {
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
                    <Tags setState={setCourseData} State={CourseData} />
                </div>
                <p className="text-right text-[12px]">
                    Maximum 5
                </p>
            </div>
        </div>
    )
}
export default SearchTags