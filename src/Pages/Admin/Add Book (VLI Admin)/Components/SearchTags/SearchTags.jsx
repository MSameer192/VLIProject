import { Tags } from "../../../Components/Tags/Tags"

const SearchTags = ({ setBookData, BookData, Err, setErr }) => {
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
                    <Tags State={BookData} setState={setBookData}  Err={Err} setErr={setErr} />
                </div>
                <p className='text-[12px] h-6 text-[red]'>{Err.PossibleKeywords ? Err.PossibleKeywords : ""} </p>
                <p className="text-right">
                    Maximum 5
                </p>
            </div>
        </div>
    )
}


export default SearchTags