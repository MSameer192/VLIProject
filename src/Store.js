import { configureStore } from "@reduxjs/toolkit";
import { VehicleTypeReducer, LicenseTypeReducer } from './Reducers/CategoryR.js'
import { LoginSignupReducer } from './Reducers/UserR.js'
import { CourseReducer } from './Reducers/CourseR.js'
const Store = configureStore({
    reducer: {
        VehicleTypeReducer, 
        LicenseTypeReducer,


        LoginSignupReducer,
        CourseReducer
    }
})

export default Store;