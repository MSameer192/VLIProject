import { createReducer } from "@reduxjs/toolkit";


export const SocketReducer = createReducer({}, (builder) => {
    builder.addCase("SetSocket", (state, action) => {
        state.SocketUserId = action.payload
    })
})