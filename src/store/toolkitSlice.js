import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        auth: false,
        idInstance: null,
        apiTokenInstance: null,
        modal: false,
        contact: [],
    },
    reducers: {
        authTrue(state, actions) {
            state.auth = true;
            state.apiTokenInstance = actions.payload.ApiTokenInstance;
            state.idInstance = actions.payload.IdInstance;
        },
        openModal(state) {
            state.modal = true
        },
        closeModal(state) {
            state.modal = false
        },
        newContact(state, action) {
            state.contact.push(action.payload) 
        }
    }
})

export default toolkitSlice.reducer
export const {authTrue, openModal, closeModal, newContact} = toolkitSlice.actions