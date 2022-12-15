import { createReducer } from '@reduxjs/toolkit';

const VehicleTypeInitialState = {
    loading: false,
    UserInfo: {},
    error: {}
}
export const LoginSignupReducer = createReducer(VehicleTypeInitialState, {
    LoginRequest: (state, action) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.UserInfo = action.payload;
    },
    LoginError: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },



    SignUpRequest: (state, action) => {
        state.loading = true;
    },
    SignUpSuccess: (state, action) => {
        state.loading = false;
        state.UserInfo = action.payload;
    },
    SignUpError: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
})
