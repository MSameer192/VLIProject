import React, { useEffect, useState } from "react";

export function Tags({ State, setState, Err, setErr }) {
    const [Tags, setTags] = useState([])

    const CreateTag = (e) => {

        const { value } = e.target;

        if (e.key === "Backspace" && Tags.length > 0 && value === "") {
            const NewTagsArr = Tags.filter((value, index, arr) => index < (arr.length - 1))
            setTags(NewTagsArr);
            setState({ ...State, PossibleKeywords: NewTagsArr })
            if (NewTagsArr.length <= 0)
                setErr({ ...Err, PossibleKeywords: "Please enter at least one keyword" })
            else if (NewTagsArr.length < 5) {
                delete Err?.PossibleKeywords
                setErr(Err)
            }

        }
        else if (e.key === "Enter" || e.key === " ") {
            if (!value.trim()) return;
            else if (Tags.length >= 5) {
                setErr({ ...Err, PossibleKeywords: "Maximum 5 keywords are allowed" })
                return
            }
            setTags([...Tags, value.trim()])
            setState({ ...State, PossibleKeywords: [...Tags, value.trim()] })
            e.target.value = ""
            delete Err?.PossibleKeywords
            setErr(Err)
        }

    }
    // useEffect(() => {
    //     setState({ ...State, PossibleKeywords: Tags })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [Tags])
    const OnClick = (e) => {
        if (e.target === e.currentTarget) {
            const TagsInput = document.getElementById("TagsInput");
            TagsInput.focus()
        }
    }

    useEffect(() => {
        if (Tags?.length <= 0) 
            setTags(State.PossibleKeywords)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [State])
    
    return <div className="w-full px-3 py-2 bg-white min-h-[96px] flex flex-wrap cursor-text" onClick={OnClick}>
        {Tags?.map(value =>
            <span className="text-2xs mr-[22px] mb-[22px] break-all h-fit px-[10px] py-[2px] bg-[#F5F5F5] w-fit text-[#C8C8C8] shadow-[4px_5px_6px_#00000029]" key={value}>
                {value}
            </span>
        )}
        <textarea name="" id="TagsInput" className="text-2xs  border-none bg-[#ffffff00] outline-none  flex-grow resize-none" onKeyDown={CreateTag} ></textarea>

    </div>
}