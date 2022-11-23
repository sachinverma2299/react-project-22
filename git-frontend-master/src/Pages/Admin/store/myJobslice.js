import { createSlice } from "@reduxjs/toolkit";


const myJobslice = createSlice({
    name: 'jobcart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
    }
})
export const { add, remove } = myJobslice.actions;
export default myJobslice.reducer;