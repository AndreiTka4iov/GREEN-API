import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        auth: false,
        idInstance: null,
        apiTokenInstance: null,
    },
    reducers: {
        authTrue(state) {
            state.auth = true
        }
    }
})

export default toolkitSlice.reducer
export const {authTrue, authFalse} = toolkitSlice.actions