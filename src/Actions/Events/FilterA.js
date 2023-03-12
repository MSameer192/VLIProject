export const FilterCourses = (data, Type) => (dispatch) => {
    dispatch({
        type: Type,
        payload: data
    })
}
export const GeneralEvent = (data, Type) => (dispatch) => {
    dispatch({
        type: Type,
        payload: data
    })
}
