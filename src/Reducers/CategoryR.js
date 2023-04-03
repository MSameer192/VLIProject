import { createReducer } from '@reduxjs/toolkit';

const VehicleTypeInitialState = {
    loading: false,
    VehicleTypes: [],
    error: {}
}

export const VehicleTypeReducer = createReducer(VehicleTypeInitialState, (builder) => {

    builder.addCase("VehicleTypeRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("VehicleTypeSuccess", (state, action) => {
        state.loading = false;
        state.error = {}
        state.VehicleTypes = action.payload;
    })
    builder.addCase("VehicleTypeError", (state, action) => {
        state.loading = false;
        state.error = action.payload
    })

})
const LicenseTypeInitialState = {
    loading: false,
    LicenseTypes: [],
    error: {}
}
export const LicenseTypeReducer = createReducer(LicenseTypeInitialState, (builder) => {
    builder.addCase("LicenseTypeRequest", (state, action) => {
        state.loading = true;
    })


    builder.addCase("LicenseTypeSuccess", (state, action) => {
        state.loading = true;
        state.error = {}
        state.LicenseTypes = action.payload;
    })
    builder.addCase("LicenseTypeError", (state, action) => {
        state.loading = false;
        state.error = action.payload
    })

})