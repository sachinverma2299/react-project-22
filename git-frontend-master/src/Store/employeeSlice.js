import { createSlice } from "@reduxjs/toolkit"


const employeeSlice = createSlice({
    name: 'EmployeeCart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item._id !== action.payload)
        },
        
    }
})
export const { add, remove } = employeeSlice.actions;
export default employeeSlice.reducer;