import { createReducer } from '@reduxjs/toolkit';

const VehicleTypeInitialState = {
    loading: false,
    VehicleTypes: [],
    error: {}
}

export const VehicleTypeReducer = createReducer(VehicleTypeInitialState, {
    VehicleTypeRequest: (state, action) => {
        state.loading = true;
    },
    VehicleTypeSuccess: (state, action) => {
        state.loading = false;
        state.VehicleTypes = action.payload;
    },
    VehicleTypeError: (state, action) => {
        state.loading = false;
        state.error = action.payload
    }
})
const LicenseTypeInitialState = {
    loading: false,
    LicenseTypes: [],
    error: {}
}
export const LicenseTypeReducer = createReducer(LicenseTypeInitialState, {
    LicenseTypeRequest: (state, action) => {
        state.loading = true;
    },
    LicenseTypeSuccess: (state, action) => {
        state.loading = false;
        state.LicenseTypes = action.payload;
    },
    LicenseTypeError: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },

    
})