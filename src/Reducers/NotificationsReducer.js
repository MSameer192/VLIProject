import { createReducer } from '@reduxjs/toolkit';

const NotificationInitialState = {
    loading: false,
    Notifications: []
}
export const NotificationReducer = createReducer(NotificationInitialState, (builder) => {
    builder.addCase("GetNotificationsRequest", (state, action) => {
        state.loading = true
    })
    builder.addCase("GetNotificationsSuccess", (state, action) => {
        state.loading = true;
        state.Notifications = action.payload;
    })
})