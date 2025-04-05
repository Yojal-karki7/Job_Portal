import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        allJobs: [],
        singleJob: null,
        allAdminJobs: [],
        searchJobByText: "",
        allAppliedJobs: [],
    }, 
    reducers: {
        setAllJobs(state, action) {
            state.allJobs = action.payload;
        },
        setSingleJobs(state, action) {
            state.singleJob = action.payload;
        },
        setAllAdminJobs(state, action) {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText(state, action) {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs(state, action) {
            state.allAppliedJobs = action.payload;
        },
    }
    }
);

export const {
    setAllJobs, 
    setSingleJobs, 
    setAllAdminJobs, 
    setSearchJobByText, 
    setAllAppliedJobs} = jobSlice.actions;

export default jobSlice.reducer;