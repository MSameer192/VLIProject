export const FilterCourses = (data, Type) => (dispatch) => {
    dispatch({
        type: Type,
        payload: data
    })
}
