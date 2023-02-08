import { Tags } from "../../../Components/Tags/Tags"

const SearchTags = ({ setBookData, BookData }) => {
    return (
        <div className='DataInputContainer mb-12 '>
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
                    <Tags State={BookData} setState={setBookData} />
                </div>
                <p className="text-right">
                    Maximum 5
                </p>
            </div>
        </div>
    )
}


export default SearchTags