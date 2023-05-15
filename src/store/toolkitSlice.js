import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        auth: false,
        idInstance: null,
        apiTokenInstance: null,
    },
    reducers: {
        authTrue(state, actions) {
            state.auth = true;
            state.apiTokenInstance = actions.payload.ApiTokenInstance;
            state.idInstance = actions.payload.IdInstance;
        }
    }
})

export default toolkitSlice.reducer
export const {authTrue, authFalse} = toolkitSlice.actions