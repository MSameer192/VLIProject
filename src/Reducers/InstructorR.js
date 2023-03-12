import { createReducer } from '@reduxjs/toolkit';

const InstructorInitialState = {
    loading: false,
    Instructor: {},
    Instructors: [],
    error: {},
    SInstructor: {}
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



    builder.addCase("GetInstructorsRequest", (state) => {
        state.loading = true
    });

    builder.addCase("GetInstructorsSuccess", (state, action) => {
        state.loading = false;
        state.Instructors = action.payload;
    })

    builder.addCase('GetInstructorsFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("GetInstructorStudentsRequest", (state) => {
        state.loading = true
    });

    builder.addCase("GetInstructorStudentsSuccess", (state, action) => {
        state.loading = false;
        state.Students = action.payload;
    })

    builder.addCase('GetInstructorStudentsFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("GetSInstructorRequest", (state) => {
        state.loading = true
    });

    builder.addCase("GetSInstructorSuccess", (state, action) => {
        state.loading = false;
        state.SInstructor = action.payload;
    })

    builder.addCase('GetSInstructorFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})