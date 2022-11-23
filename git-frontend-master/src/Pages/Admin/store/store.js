import { configureStore } from '@reduxjs/toolkit'

import  jobReducer from './myJobslice'
const store=configureStore({
    reducer:{
        cart: jobReducer,
    }
})
export default store