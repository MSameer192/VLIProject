import { createReducer } from '@reduxjs/toolkit';

const StudentInitialState = {
    loading: false,
    Student: {},
    Students: [],
    error: {},
    Schedule: [],
}

export const StudentReducer = createReducer(StudentInitialState, (builder) => {
    builder.addCase("GetStudentsListRequest", (state) => {
        state.loading = true
    });

    builder.addCase("GetStudentsListSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.Students = action.payload;
    })

    builder.addCase('GetStudentsListFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })




    builder.addCase("GetAboutClientRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetAboutClientSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.CourseProgress = action.CourseProgress;
        state.CoursePackage = action.CoursePackage;
        state.Student = action.Student;
        state.ScheduleTimeTable = action.ScheduleTimeTable;
    })

    builder.addCase('GetAboutClientFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })





    builder.addCase("GetClassScheduleRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetClassScheduleSuccess", (state, action) => {
        state.loading = false;
        state.error = {};
        state.Schedule = action.payload;
    })

    builder.addCase('GetClassScheduleFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("CreateScheduleRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("CreateScheduleSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.Schedule = action.payload;
    })

    builder.addCase('CreateScheduleFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

    // 
    builder.addCase("GetTimeTableRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetTimeTableSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.Schedule = action.payload;
    })

    builder.addCase('GetTimeTableFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

    builder.addCase("SubscriptionRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("SubscriptionSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.Subscription = action.payload;
    })

    builder.addCase('SubscriptionFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })


})