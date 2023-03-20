import { createReducer } from "@reduxjs/toolkit";


export const CourseReducer = createReducer({}, (builder) => {

    builder.addCase("CourseRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("CourseSuccess", (state, action) => {
        state.loading = false;
        state.CourseInfo = action.payload;
    })

    builder.addCase('CourseFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("GetAdminCoursesRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetAdminCoursesSuccess", (state, action) => {
        state.loading = false;
        state.AdminCourses = action.payload;
    })

    builder.addCase('GetAdminCoursesFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })







    builder.addCase("BuyCourseRequest", (state, action) => {
        state.loading = true;
    })

    builder.addCase("BuyCourseSuccess", (state, action) => {
        state.loading = false;
        state.CourseInfo = action.payload;
    })

    builder.addCase("BuyCoursefailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })





    builder.addCase("EnrollCourseRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("EnrollCourseSuccess", (state, action) => {
        state.loading = false;
        state.EnrollCourseInfo = action.payload;
    })

    builder.addCase('EnrollCourseFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })





    builder.addCase("GetEnrolledCoursesRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetEnrolledCoursesSuccess", (state, action) => {
        state.loading = false;
        state.EnrolledCourses = action.payload;
    })

    builder.addCase('GetEnrolledCoursesFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })






    builder.addCase("GetSEnrolledCoursesRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetSEnrolledCoursesSuccess", (state, action) => {
        state.loading = false;
        state.SEnrolledCourse = action.payload;
    })

    builder.addCase('GetSEnrolledCoursesFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })








    builder.addCase("LicenceTypeCoursesRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("LicenceTypeCoursesSuccess", (state, action) => {
        state.loading = false;
        state.Courses = action.payload;
    })
    builder.addCase("LicenceTypeCoursesFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })




    builder.addCase("EnrolledCourseProgressRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("EnrolledCourseProgressSuccess", (state, action) => {
        state.loading = false;
        state.CourseProgress = action.payload;
    })
    builder.addCase("EnrolledCourseProgressFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })




    builder.addCase("CreateCourseRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("CreateCourseSuccess", (state, action) => {
        state.loading = false;
        state.Course = action.payload;
    })
    builder.addCase("CreateCourseFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("FilterCoursesRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("FilterCoursesSuccess", (state, action) => {
        state.loading = false;
        state.AdminCourses = action.payload;
    })
    builder.addCase("FilterCoursesFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })



    builder.addCase("GetInstituteCoursesRequest", (state, action) => {
        state.loading = true
    })

    builder.addCase("GetInstituteCoursesSuccess", (state, action) => {
        state.loading = false;
        state.Courses = action.payload;
    })
    builder.addCase("GetInstituteCoursesFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})

