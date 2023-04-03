export const ScrollElement = (Errors, Extra) => {

    if (!Extra)
        Extra = 200
    for (const [key] of Object.entries(Errors)) {
        if (key) {
            const Element = document.getElementById(key);
            const Y = Element.getBoundingClientRect().top + window.scrollY - Extra

            window.scroll({
                top: Y,
                behavior: 'smooth'
            });

            break
        }
    }

}