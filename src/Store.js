import { configureStore } from "@reduxjs/toolkit";
import { VehicleTypeReducer, LicenseTypeReducer } from './Reducers/CategoryR.js'
import { LoginSignupReducer, ToggleSignupReducer } from './Reducers/UserR.js'
import { CourseReducer } from './Reducers/CourseR.js'
import { WishListReducer } from "./Reducers/WishListR.js";
import { SocketReducer } from "./Reducers/SocketR.js";
import { VehicleReducer } from "./Reducers/VehicleR.js";


const Store = configureStore({
    reducer: {
        VehicleTypeReducer,
        LicenseTypeReducer,
        VehicleReducer,
        ToggleSignupReducer,
        LoginSignupReducer,
        CourseReducer,
        SocketReducer,
        WishListReducer

    }
})

export default Store;