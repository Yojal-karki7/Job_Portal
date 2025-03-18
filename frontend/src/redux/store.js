import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../redux/slices/authSlice'
import jobSlice from '../redux/slices/jobSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        job: jobSlice,
    }
});

export default store