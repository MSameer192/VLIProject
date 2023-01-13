import { useEffect } from "react";

export function useTimeSlotsHider(refParent, refChild, setVar, Var) {
    useEffect(() => {

        function handleClickOutside(event) {

            if (refParent && refChild && !refChild.contains(event.target)) {
                setVar(!Var)
            }
        } 


        refParent?.addEventListener("click", handleClickOutside);
        refParent?.addEventListener("mousedown", handleClickOutside);
        return () => {
            refParent?.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refParent, Var, setVar, refChild]);
}