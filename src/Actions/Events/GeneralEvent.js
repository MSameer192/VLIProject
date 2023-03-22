export const GeneralEvent = (data, Type) => (dispatch) => {
    dispatch({
        type: Type,
        payload: data
    })
}
