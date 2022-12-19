import { createReducer } from "@reduxjs/toolkit";


export const CourseReducer = createReducer({}, {
    CourseRequest: (state, action) => { state.loading = true },
    CourseSuccess: (state, action) => {
        state.loading = false;
        state.CourseInfo = action.payload;
    },
    CourseFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

})