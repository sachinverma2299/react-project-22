import { configureStore } from "@reduxjs/toolkit";


import userSlice from "./userSlice";
import applicantReducer from "./applicantSlice"
import employeeReducer from "./employeeSlice"

const store = configureStore({
    reducer: {
        login: userSlice,
        applicants: applicantReducer,
        employee: employeeReducer,
    }
})

export default store;