import { createReducer } from '@reduxjs/toolkit';

export const VehicleReducer = createReducer({}, (builder) => {
    builder.addCase("AddVehicleRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("AddVehicleSuccess", (state, action) => {
        state.loading = false;
        state.VehicleData = action.payload;
    })
    builder.addCase("AddVehicleFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})