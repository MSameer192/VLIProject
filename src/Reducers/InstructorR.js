import { createReducer } from '@reduxjs/toolkit';

const InstructorInitialState = {
    loading: false,
    Instructor: {},
    Instructors: [],
    error: {}
}

export const InstructorReducer = createReducer(InstructorInitialState, (builder) => {
    builder.addCase("CreateInstructorRequest", (state) => {
        state.loading = true
    });

    builder.addCase("CreateInstructorSuccess", (state, action) => {
        state.loading = false;
        state.Instructor = action.payload;
    })

    builder.addCase('CreateInstructorFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})