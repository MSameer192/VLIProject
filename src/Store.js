import { configureStore } from "@reduxjs/toolkit";
import { VehicleTypeReducer, LicenseTypeReducer } from './Reducers/CategoryR.js'
import { LoginSignupReducer } from './Reducers/UserR.js'
const Store = configureStore({
    reducer: {
        VehicleTypeReducer, LicenseTypeReducer,


        LoginSignupReducer
    }
})

export default Store;