import { configureStore } from "@reduxjs/toolkit";
import { VehicleTypeReducer,LicenseTypeReducer } from './Reducers/CategoryR.js'
const Store = configureStore({
    reducer: { VehicleTypeReducer,LicenseTypeReducer }
})

export default Store;