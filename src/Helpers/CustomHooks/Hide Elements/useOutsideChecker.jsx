import { useEffect } from "react";

export function useHideOnClickOutside(refParent, refChild, ClassName ) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (refParent && refChild && !refParent.contains(event.target) && !refChild.contains(event.target))
                if (refParent.parentNode.classList.contains(ClassName))
                    refParent.parentNode.classList.toggle(ClassName)
        }


        document?.addEventListener('click', handleClickOutside)
        refParent?.addEventListener("mousedown", handleClickOutside);
        return () => {
            refParent?.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refParent, refChild, ClassName]);
}