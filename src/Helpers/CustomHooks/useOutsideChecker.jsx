import { useEffect } from "react";

export function useHideOnClickOutside(refBtn, refChild, ClassName) {
    useEffect(() => {
        function handleClickOutside(event) {


            if (refBtn && refChild && !refBtn.contains(event.target) && !refChild.contains(event.target)) {
                if (refBtn.parentNode.classList.contains(ClassName)) {
                    refBtn.parentNode.classList.toggle(ClassName)
                }

            }

        }

        document?.addEventListener('click', handleClickOutside)
        refBtn?.addEventListener("mousedown", handleClickOutside);
        return () => {
            // refBtn?.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refBtn, refChild, ClassName]);
}