import { useEffect, useState } from "react";

export function Tags({ State, setState, Err, setErr }) {
    const [Tags, setTags] = useState([])
    const CreateTag = (e) => {

        const { value } = e.target;

        if (e.key === "Backspace" && Tags.length > 0 && value === "") {
            const NewTagsArr = Tags.filter((value, index, arr) => index < (arr.length - 1))
            setTags(NewTagsArr);
            if (NewTagsArr.length <= 0)
                setErr({ ...Err, PossibleKeywords: "Please enter at least one keyword" })

        }
        else if (e.key === "Enter" || e.key === " ") {

            if (!value.trim()) return;
            else if (Tags.length >= 5) {
                setErr({ ...Err, PossibleKeywords: "Maximum 5 keywords are allowed" })
                return
            }
            setTags([...Tags, value.trim()])
            e.target.value = ""
            delete Err.PossibleKeywords
        }

    }
    useEffect(() => {
        setState({ ...State, PossibleKeywords: Tags })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Tags])


    return <div className="w-full gap-[22px] px-3 py-2 bg-white min-h-[96px] flex flex-wrap">
        {Tags?.map(value =>
            <span className="text-2xs h-fit px-[10px] py-[2px] bg-[#F5F5F5] w-fit text-[#C8C8C8] shadow-[4px_5px_6px_#00000029]" key={value}>
                {value}
            </span>
        )}
        <input type="text" className="text-2xs h-fit border-none outline-none" onKeyDown={CreateTag} />
    </div>
}