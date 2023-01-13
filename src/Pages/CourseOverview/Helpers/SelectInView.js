export function SelectInView(ElementsArr) {

    ElementsArr.forEach((el, index) => {
        let Buttons = document.getElementsByClassName("CourseDetailsNavigateBtns")

        let Position = el?.current?.getBoundingClientRect(),
            Top = Position?.top - 170, Bottom = Position?.bottom - 170, Height = Position?.height


        if (Top <= Height && Bottom >= 0 && Buttons[index]) {
            Buttons[index].classList.add("NavigateButtonBorder");
            Buttons[index].classList.remove("border-none")

        } else if (Buttons[index]) {
            Buttons[index].classList.remove("NavigateButtonBorder");
            Buttons[index].classList.add("border-none");
        }
        return el
    })
    let Done, SetIndex;
    let Buttons = document.getElementsByClassName("CourseDetailsNavigateBtns");

    for (let index = 0; index < Buttons.length; index++) {
        const element = Buttons[index];

        if (element?.classList?.contains("NavigateButtonBorder")) {
            if (!Done && !SetIndex) {
                Done = true;
                SetIndex = index
            } else {
                element?.classList?.remove("NavigateButtonBorder");
                element?.classList.add("border-none");
            }
        } else {
            element?.classList?.remove("NavigateButtonBorder");
            element?.classList.add("border-none");
        }
    }
}