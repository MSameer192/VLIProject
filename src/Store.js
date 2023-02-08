import { configureStore } from "@reduxjs/toolkit";
import { VehicleTypeReducer, LicenseTypeReducer } from './Reducers/CategoryR.js'
import { LoginSignupReducer, ToggleSignupReducer } from './Reducers/UserR.js'
import { CourseReducer } from './Reducers/CourseR.js'
import { WishListReducer } from "./Reducers/WishListR.js";
import { SocketReducer } from "./Reducers/SocketR.js";
import { VehicleReducer } from "./Reducers/VehicleR.js";
import { InstructorReducer } from "./Reducers/InstructorR.js";
import { AdminCourseReducer } from "./Reducers/AdminCourseR.js";
import { BookReducer } from "./Reducers/BookR.js";


const Store = configureStore({
    reducer: {
        VehicleTypeReducer,
        LicenseTypeReducer,
        VehicleReducer,
        ToggleSignupReducer,
        LoginSignupReducer,
        CourseReducer,
        SocketReducer,
        WishListReducer,
        InstructorReducer,
        AdminCourseReducer,
        BookReducer

    }
})

export default Store;