export const OpenLoginSignUp = (PageName, Navigation) => (dispatch) => {
    dispatch({
        type: "OpenLoginSignUp",
        AuthPageName: PageName,
        Navigation: Navigation,
        Done: false
    })
}
export const AgainOpenLoginSignUp = (PageName) => (dispatch) => {
    dispatch({
        type: "AgainOpenLoginSignUp",
        AuthPageName: PageName,
    })
}

export const DoneLoginSignUp = (PageName) => (dispatch) => {
    dispatch({
        type: "DoneLoginSignUp",
        AuthPageName: PageName,
        Done: true
    })

}
export const ResetLoginSignUp = () => (dispatch) => {
    dispatch({
        type: "OpenLoginSignUp",
        AuthPageName: false,
        Navigation: false,
        Done: false
    })

}