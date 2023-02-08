import { createReducer } from "@reduxjs/toolkit";

export const AdminCourseReducer = createReducer({}, (builder) => {

    builder.addCase("Admin_AddCourseRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("Admin_AddCourseSuccess", (state, action) => {
        state.loading = false;
        state.ACourseInfo = action.payload;
    })

    builder.addCase('Admin_AddCourseFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})