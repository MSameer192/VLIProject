export const SetSocketA = (UserId) => async (dispatch) => {
 
    dispatch({
        type: 'SetSocket',
        payload: UserId
    })
}