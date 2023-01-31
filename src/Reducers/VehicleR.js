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
 
 
 
    builder.addCase("GetAllVehiclesRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("GetAllVehiclesSuccess", (state, action) => {
        state.loading = false;
        state.Vehicles = action.payload;
    })
    builder.addCase("GetAllVehiclesFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
 

    
    builder.addCase("GetSingleVehicleRequest", (state, action) => {
        state.loading = true;
    })
    builder.addCase("GetSingleVehicleSuccess", (state, action) => {
        state.loading = false;
        state.VehicleData = action.payload;
    })
    builder.addCase("GetSingleVehicleFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})