import { useEffect } from "react";

export function useHideOnClickOutside(ref, setCheckOutside, ClassName) {
    useEffect(() => {
        function handleClickOutside(event) {
            event.propogation()

            if (setCheckOutside !== null) {
                setCheckOutside(false)

            }
            if (ref && !ref.contains(event.target)) {
                if (ClassName) {
                    ref.parentNode.classList.remove(ClassName)
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