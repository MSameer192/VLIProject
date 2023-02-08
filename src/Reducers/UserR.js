import { createReducer } from '@reduxjs/toolkit';

const VehicleTypeInitialState = {
    loading: false,
    UserInfo: {},
    error: {}
}
export const LoginSignupReducer = createReducer(VehicleTypeInitialState, (builder) => {
    //Login
    builder.addCase("LoginRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("LoginSuccess", (state, action) => {
        state.loading = false;
        state.UserInfo = action.payload;
        state.Authenticated = action.Auth;
    })
    builder.addCase("LoginError", (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.Authenticated = false;
    })


    //Signup
    builder.addCase("SignUpRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("SignUpSuccess", (state, action) => {
        state.loading = false;
        state.UserInfo = action.payload;
        state.Authenticated = action.Auth;
    })
    builder.addCase("SignUpError", (state, action) => {
        state.loading = false;
        state.error = action.payload
        state.Authenticated = false;
    })
 
 
    builder.addCase("RegisterInstituteRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("RegisterInstituteSuccess", (state, action) => {
        state.loading = false;
        state.UserInfo = action.payload;
        state.Authenticated = action.Auth;
    })
    builder.addCase("RegisterInstituteError", (state, action) => {
        state.loading = false;
        state.error = action.payload
        state.Authenticated = false;
    })


})
export const ToggleSignupReducer = createReducer({}, (builder) => {
    builder.addCase("OpenLoginSignUp", (state, action) => {
        state.AuthPageName = action.AuthPageName;
        state.Navigation = action.Navigation;
        state.Done = action.Done;
    })
    builder.addCase("DoneLoginSignUp", (state, action) => {
        state.AuthPageName = action.AuthPageName;
        state.Done = action.Done;
    })
    builder.addCase("AgainOpenLoginSignUp", (state, action) => {
        state.AuthPageName = action.AuthPageName;
    })
})