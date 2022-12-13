import { useEffect } from "react";

export function useHideOnClickOutside(ref, setCheckOutside, ClassName) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && ClassName) {
                if (setCheckOutside !== null)
                    setCheckOutside(false)

                else if (ClassName) {
                    ref.parentNode.classList.remove(ClassName)
                    console.log(ClassName)
                }
            }

        }
        ref?.addEventListener('click', handleClickOutside)
        ref?.addEventListener("mousedown", handleClickOutside);
        return () => {
            ref?.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setCheckOutside, ClassName]);
}